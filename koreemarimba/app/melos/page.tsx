'use client';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Message {
  role: 'user' | 'bot';
  text: string;
}

interface ResourceCategory {
  title: string;
  links: { name: string; url: string }[];
}

const resources: ResourceCategory[] = [
  {
    title: 'Music Distributors',
    links: [
      { name: 'DistroKid', url: 'https://distrokid.com' },
      { name: 'TuneCore', url: 'https://tunecore.com' },
      { name: 'CD Baby', url: 'https://cdbaby.com' },
      { name: 'Amuse', url: 'https://amuse.io' },
      { name: 'RouteNote', url: 'https://routenote.com' },
      { name: 'ONErpm', url: 'https://onerpm.com' },
    ],
  },
  {
    title: 'Learning Platforms',
    links: [
      { name: 'Berklee Online', url: 'https://online.berklee.edu' },
      { name: 'Coursera Music', url: 'https://coursera.org' },
      { name: 'Udemy Music Production', url: 'https://udemy.com' },
      { name: 'Splice Learn', url: 'https://splice.com/learn' },
      { name: 'Music Theory.net', url: 'https://musictheory.net' },
      { name: 'YouTube Music Education', url: 'https://youtube.com' },
    ],
  },
  {
    title: 'Production Tools',
    links: [
      { name: 'Ableton Live', url: 'https://ableton.com' },
      { name: 'FL Studio', url: 'https://image-line.com' },
      { name: 'Logic Pro', url: 'https://apple.com/logic-pro' },
      { name: 'REAPER', url: 'https://reaper.fm' },
      { name: 'Pro Tools', url: 'https://avid.com/pro-tools' },
      { name: 'Splice Sounds', url: 'https://splice.com/sounds' },
    ],
  },
  {
    title: 'Royalties & Rights',
    links: [
      { name: 'ASCAP', url: 'https://ascap.com' },
      { name: 'BMI', url: 'https://bmi.com' },
      { name: 'SESAC', url: 'https://sesac.com' },
      { name: 'SoundExchange', url: 'https://soundexchange.com' },
      { name: 'The MLC', url: 'https://themlc.com' },
      { name: 'Copyright.gov', url: 'https://copyright.gov' },
    ],
  },
  {
    title: 'Streaming Platforms',
    links: [
      { name: 'Spotify for Artists', url: 'https://artists.spotify.com' },
      { name: 'Apple Music for Artists', url: 'https://artists.apple.com' },
      { name: 'YouTube Music', url: 'https://youtube.com/music' },
      { name: 'TIDAL Artists', url: 'https://tidal.com' },
      { name: 'SoundCloud for Artists', url: 'https://soundcloud.com/artists' },
      { name: 'Bandcamp', url: 'https://bandcamp.com' },
    ],
  },
  {
    title: 'Music Promotion',
    links: [
      { name: 'SubmitHub', url: 'https://submithub.com' },
      { name: 'Groover', url: 'https://groover.co' },
      { name: 'Musosoup', url: 'https://musosoup.com' },
      { name: 'PlaylistPush', url: 'https://playlistpush.com' },
      { name: 'TuneMyMusic', url: 'https://tunemymusic.com' },
      { name: 'DistroKid Promote', url: 'https://distrokid.com/promote' },
    ],
  },
  {
    title: 'Collaboration & Networking',
    links: [
      { name: 'BeatStars', url: 'https://beatstars.com' },
      { name: 'Splice Community', url: 'https://splice.com' },
      { name: 'Soundtrap', url: 'https://soundtrap.com' },
      { name: 'BeatMaker Communities', url: 'https://reddit.com/r/makinghiphop' },
      { name: 'Discord Music Servers', url: 'https://discord.com' },
      { name: 'Musician Forums', url: 'https://gearslutz.com' },
    ],
  },
];

export default function MelosPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'bot',
      text: "Hello! I'm **Melos**, your AI guide to the music industry. I specialize in helping young artists understand music distributors, industry strategies, and career development. Whether you're curious about Spotify, Apple Music, independent distribution, or building your fanbase—I'm here to help. What would you like to know?",
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = { role: 'user' as const, text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/melos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to get response');
      }

      setMessages((prev) => [
        ...prev,
        { role: 'bot' as const, text: data.reply },
      ]);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'An error occurred';
      setMessages((prev) => [
        ...prev,
        {
          role: 'bot' as const,
          text: `Sorry, I encountered an error: ${errorMessage}. Please try again.`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="melos-page">
      <div className="melos-hero">
        <div className="melos-hero-content">
          <h1>Melos AI</h1>
          <p className="melos-tagline">Your Expert Guide to the Music Industry</p>
          <p className="melos-description">Get personalized advice about music distributors, career strategies, and everything you need to succeed as a young artist.</p>
        </div>
      </div>

      <div className="melos-wrapper">
        <div className="melos-chat-container">
          <div className="melos-messages">
            {messages.map((message, index) => (
              <div key={index} className={`melos-message melos-message-${message.role}`}>
                <div className="melos-message-avatar">
                  {message.role === 'bot' ? '🎵' : '👤'}
                </div>
                <div className="melos-message-bubble">
                  {message.role === 'bot' ? (
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        p: ({ node, ...props }) => (
                          <p style={{ marginBottom: '0.5rem' }} {...props} />
                        ),
                        ul: ({ node, ...props }) => (
                          <ul
                            style={{
                              marginLeft: '1.5rem',
                              marginBottom: '0.5rem',
                              listStyleType: 'disc',
                            }}
                            {...props}
                          />
                        ),
                        ol: ({ node, ...props }) => (
                          <ol
                            style={{
                              marginLeft: '1.5rem',
                              marginBottom: '0.5rem',
                            }}
                            {...props}
                          />
                        ),
                        li: ({ node, ...props }) => (
                          <li style={{ marginBottom: '0.25rem' }} {...props} />
                        ),
                        code: ({ node, inline, ...props }: any) => (
                          <code
                            style={{
                              backgroundColor: inline ? '#f0f0f0' : '#2d3748',
                              color: inline ? '#333' : '#e2e8f0',
                              padding: inline ? '0.2rem 0.4rem' : '1rem',
                              borderRadius: '0.25rem',
                              display: inline ? 'inline' : 'block',
                              marginBottom: inline ? '0' : '0.5rem',
                              overflow: 'auto',
                              fontFamily: 'Courier New, monospace',
                              fontSize: '0.9rem',
                            }}
                            {...props}
                          />
                        ),
                        strong: ({ node, ...props }) => (
                          <strong style={{ fontWeight: 'bold', color: '#1a202c' }} {...props} />
                        ),
                        em: ({ node, ...props }) => (
                          <em style={{ fontStyle: 'italic' }} {...props} />
                        ),
                        a: ({ node, ...props }) => (
                          <a
                            style={{
                              color: '#2563eb',
                              textDecoration: 'underline',
                              fontWeight: '500',
                            }}
                            target="_blank"
                            rel="noopener noreferrer"
                            {...props}
                          />
                        ),
                        h3: ({ node, ...props }) => (
                          <h3
                            style={{
                              fontSize: '1.1rem',
                              fontWeight: 'bold',
                              marginTop: '0.75rem',
                              marginBottom: '0.5rem',
                              color: '#1a202c',
                            }}
                            {...props}
                          />
                        ),
                        blockquote: ({ node, ...props }) => (
                          <blockquote
                            style={{
                              borderLeft: '4px solid #cbd5e0',
                              paddingLeft: '1rem',
                              marginLeft: '0',
                              marginBottom: '0.5rem',
                              fontStyle: 'italic',
                              color: '#4a5568',
                            }}
                            {...props}
                          />
                        ),
                      }}
                    >
                      {message.text}
                    </ReactMarkdown>
                  ) : (
                    <p>{message.text}</p>
                  )}
                </div>
              </div>
            ))}
            {loading && (
              <div className="melos-message melos-message-bot">
                <div className="melos-message-avatar">🎵</div>
                <div className="melos-message-bubble melos-typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
          </div>

          <div className="melos-input-area">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Ask me about music distributors, career strategies, promotion tactics..."
              disabled={loading}
              className="melos-input"
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              className="melos-send-btn"
            >
              {loading ? '⏳' : '➤'}
            </button>
          </div>
        </div>

        <aside className="melos-resources-sidebar">
          <h3>Resources</h3>
          <div className="resources-list">
            {resources.map((category, index) => (
              <div key={index} className="resource-category">
                <button
                  className="resource-header"
                  onClick={() =>
                    setOpenCategory(
                      openCategory === category.title ? null : category.title
                    )
                  }
                >
                  <span>{category.title}</span>
                  <span className="dropdown-arrow">
                    {openCategory === category.title ? '▼' : '▶'}
                  </span>
                </button>
                {openCategory === category.title && (
                  <div className="resource-links">
                    {category.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resource-link"
                      >
                        {link.name}
                        <span className="external-icon">↗</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
