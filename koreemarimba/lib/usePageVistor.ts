import { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';

export function usePageVisitor(pagePath: string) {
  const [sessionId] = useState(() => {
    // Generate or retrieve session ID from localStorage
    if (typeof window !== 'undefined') {
      let id = localStorage.getItem('session_id');
      if (!id) {
        id = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        localStorage.setItem('session_id', id);
      }
      return id;
    }
    return '';
  });

  useEffect(() => {
    const trackVisitor = async () => {
      try {
        const userAgent = navigator.userAgent;
        const referrer = document.referrer;

        // Log visitor
        const { error: insertError } = await supabase.from('page_visitors').insert({
          page_path: pagePath,
          user_agent: userAgent,
          referrer: referrer || null,
          session_id: sessionId,
        });
        if (insertError) console.error('Visitor tracking error:', insertError);
      } catch (error) {
        console.error('Error tracking visitor:', error);
      }
    };

    trackVisitor();
  }, [pagePath, sessionId]);
}