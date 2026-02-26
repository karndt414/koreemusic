'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

interface PromptRow {
  id: number;
  created_at: string;
  user_message: string;
  ai_response: string;
  from_faq_cache: boolean;
  tokens_used: number;
  response_time_ms: number;
  ip_address: string;
}

interface VisitorRow {
  page_path: string;
  session_id: string;
  created_at: string;
}

interface PageStat {
  page: string;
  totalVisits: number;
  uniqueVisitors: number;
}

export default function AnalyticsPage() {
  const [prompts, setPrompts] = useState<PromptRow[]>([]);
  const [pageStats, setPageStats] = useState<PageStat[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'overview' | 'prompts' | 'visitors'>('overview');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch prompt logs
        const { data: promptData } = await supabase
          .from('melos_prompts')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(200);

        if (promptData) setPrompts(promptData);

        // Fetch visitor data
        const { data: visitorData } = await supabase
          .from('page_visitors')
          .select('page_path, session_id, created_at');

        if (visitorData) {
          // Group by page
          const grouped: Record<string, { total: number; sessions: Set<string> }> = {};
          for (const v of visitorData) {
            if (!grouped[v.page_path]) {
              grouped[v.page_path] = { total: 0, sessions: new Set() };
            }
            grouped[v.page_path].total++;
            if (v.session_id) grouped[v.page_path].sessions.add(v.session_id);
          }

          const stats: PageStat[] = Object.entries(grouped)
            .map(([page, data]) => ({
              page,
              totalVisits: data.total,
              uniqueVisitors: data.sessions.size,
            }))
            .sort((a, b) => b.totalVisits - a.totalVisits);

          setPageStats(stats);
        }
      } catch (err) {
        console.error('Error fetching analytics:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const totalPrompts = prompts.length;
  const faqHits = prompts.filter((p) => p.from_faq_cache).length;
  const faqRate = totalPrompts > 0 ? Math.round((faqHits / totalPrompts) * 100) : 0;
  const totalTokens = prompts.reduce((sum, p) => sum + (p.tokens_used || 0), 0);
  const avgResponseTime =
    totalPrompts > 0
      ? Math.round(prompts.reduce((sum, p) => sum + (p.response_time_ms || 0), 0) / totalPrompts)
      : 0;
  const totalPageVisits = pageStats.reduce((sum, p) => sum + p.totalVisits, 0);
  const totalUnique = pageStats.reduce((sum, p) => sum + p.uniqueVisitors, 0);

  if (loading) {
    return (
      <div style={{ padding: '3rem', textAlign: 'center', fontFamily: 'inherit' }}>
        <h1>📊 Loading Analytics...</h1>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '1100px', margin: '2rem auto', padding: '0 1.5rem', fontFamily: 'inherit' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📊 Analytics Dashboard</h1>
      <p style={{ color: '#666', marginBottom: '2rem' }}>Track Melos usage and site visitors</p>

      {/* Overview Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
        <StatCard label="Total Prompts" value={totalPrompts} color="#667eea" />
        <StatCard label="FAQ Cache Hits" value={`${faqHits} (${faqRate}%)`} color="#48bb78" />
        <StatCard label="Est. Tokens Used" value={totalTokens.toLocaleString()} color="#ed8936" />
        <StatCard label="Avg Response Time" value={`${avgResponseTime}ms`} color="#e53e3e" />
        <StatCard label="Total Page Visits" value={totalPageVisits} color="#9f7aea" />
        <StatCard label="Unique Visitors" value={totalUnique} color="#38b2ac" />
      </div>

      {/* Tab Navigation */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '2px solid #e2e8f0', paddingBottom: '0.5rem' }}>
        {(['overview', 'prompts', 'visitors'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '0.6rem 1.2rem',
              border: 'none',
              borderRadius: '8px 8px 0 0',
              cursor: 'pointer',
              fontWeight: activeTab === tab ? '700' : '400',
              background: activeTab === tab ? '#667eea' : '#f7fafc',
              color: activeTab === tab ? 'white' : '#4a5568',
              fontSize: '0.95rem',
              transition: 'all 0.2s',
            }}
          >
            {tab === 'overview' ? '📈 Overview' : tab === 'prompts' ? '💬 Prompts' : '👥 Visitors'}
          </button>
        ))}
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div>
          <h2 style={{ marginBottom: '1rem' }}>Page Traffic</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', background: 'white', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
            <thead>
              <tr style={{ background: '#f7fafc' }}>
                <th style={thStyle}>Page</th>
                <th style={thStyle}>Total Visits</th>
                <th style={thStyle}>Unique Visitors</th>
              </tr>
            </thead>
            <tbody>
              {pageStats.map((stat) => (
                <tr key={stat.page} style={{ borderBottom: '1px solid #edf2f7' }}>
                  <td style={tdStyle}><code>{stat.page}</code></td>
                  <td style={tdStyle}>{stat.totalVisits}</td>
                  <td style={tdStyle}>{stat.uniqueVisitors}</td>
                </tr>
              ))}
              {pageStats.length === 0 && (
                <tr><td colSpan={3} style={{ ...tdStyle, textAlign: 'center', color: '#a0aec0' }}>No visitor data yet</td></tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* Prompts Tab */}
      {activeTab === 'prompts' && (
        <div>
          <h2 style={{ marginBottom: '1rem' }}>Recent Melos Prompts</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {prompts.slice(0, 50).map((prompt) => (
              <div
                key={prompt.id}
                style={{
                  background: 'white',
                  borderRadius: '10px',
                  padding: '1rem 1.25rem',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                  borderLeft: `4px solid ${prompt.from_faq_cache ? '#48bb78' : '#667eea'}`,
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.8rem', color: '#a0aec0' }}>
                  <span>{new Date(prompt.created_at).toLocaleString()}</span>
                  <span style={{ display: 'flex', gap: '0.75rem' }}>
                    {prompt.from_faq_cache && (
                      <span style={{ background: '#c6f6d5', color: '#276749', padding: '0.15rem 0.5rem', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 600 }}>
                        FAQ CACHE
                      </span>
                    )}
                    <span>⏱ {prompt.response_time_ms}ms</span>
                    <span>🔤 ~{prompt.tokens_used} tokens</span>
                  </span>
                </div>
                <p style={{ margin: '0 0 0.5rem', fontWeight: 600, color: '#2d3748' }}>
                  Q: {prompt.user_message}
                </p>
                <p style={{ margin: 0, color: '#4a5568', fontSize: '0.9rem', lineHeight: 1.5, maxHeight: '4.5rem', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  A: {prompt.ai_response?.slice(0, 200)}{prompt.ai_response?.length > 200 ? '...' : ''}
                </p>
              </div>
            ))}
            {prompts.length === 0 && (
              <p style={{ textAlign: 'center', color: '#a0aec0' }}>No prompts recorded yet</p>
            )}
          </div>
        </div>
      )}

      {/* Visitors Tab */}
      {activeTab === 'visitors' && (
        <div>
          <h2 style={{ marginBottom: '1rem' }}>Visitor Breakdown</h2>
          {pageStats.map((stat) => (
            <div key={stat.page} style={{ background: 'white', borderRadius: '10px', padding: '1.25rem', marginBottom: '1rem', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ margin: 0, fontSize: '1.1rem' }}><code>{stat.page}</code></h3>
                <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem' }}>
                  <span><strong>{stat.totalVisits}</strong> visits</span>
                  <span><strong>{stat.uniqueVisitors}</strong> unique</span>
                </div>
              </div>
              {/* Visual bar */}
              <div style={{ marginTop: '0.75rem', background: '#edf2f7', borderRadius: '6px', height: '8px', overflow: 'hidden' }}>
                <div
                  style={{
                    height: '100%',
                    width: `${Math.min((stat.totalVisits / Math.max(...pageStats.map((p) => p.totalVisits))) * 100, 100)}%`,
                    background: 'linear-gradient(135deg, #667eea, #764ba2)',
                    borderRadius: '6px',
                    transition: 'width 0.5s ease',
                  }}
                />
              </div>
            </div>
          ))}
          {pageStats.length === 0 && (
            <p style={{ textAlign: 'center', color: '#a0aec0' }}>No visitor data yet</p>
          )}
        </div>
      )}
    </div>
  );
}

function StatCard({ label, value, color }: { label: string; value: string | number; color: string }) {
  return (
    <div
      style={{
        background: 'white',
        borderRadius: '12px',
        padding: '1.25rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        borderTop: `4px solid ${color}`,
      }}
    >
      <p style={{ margin: '0 0 0.25rem', fontSize: '0.85rem', color: '#718096' }}>{label}</p>
      <p style={{ margin: 0, fontSize: '1.5rem', fontWeight: 700, color: '#2d3748' }}>{String(value)}</p>
    </div>
  );
}

const thStyle: React.CSSProperties = {
  textAlign: 'left',
  padding: '0.75rem 1rem',
  fontWeight: 600,
  color: '#4a5568',
  fontSize: '0.9rem',
};

const tdStyle: React.CSSProperties = {
  padding: '0.75rem 1rem',
  fontSize: '0.9rem',
  color: '#2d3748',
};
