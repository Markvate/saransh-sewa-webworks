
import { useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface AnalyticsEvent {
  event_type: string;
  page_path: string;
  user_agent?: string;
  referrer?: string;
  session_id?: string;
}

export const useAnalytics = () => {
  const trackEvent = async (eventData: AnalyticsEvent) => {
    try {
      await supabase.from('analytics_events').insert({
        ...eventData,
        user_agent: navigator.userAgent,
        referrer: document.referrer || null,
        session_id: sessionStorage.getItem('session_id') || crypto.randomUUID(),
      });
    } catch (error) {
      console.error('Analytics tracking error:', error);
    }
  };

  const trackPageView = (pagePath: string) => {
    trackEvent({
      event_type: 'page_view',
      page_path: pagePath,
    });
  };

  const trackButtonClick = (buttonName: string, pagePath: string) => {
    trackEvent({
      event_type: 'button_click',
      page_path: `${pagePath}#${buttonName}`,
    });
  };

  // Set session ID on first load
  useEffect(() => {
    if (!sessionStorage.getItem('session_id')) {
      sessionStorage.setItem('session_id', crypto.randomUUID());
    }
  }, []);

  return { trackEvent, trackPageView, trackButtonClick };
};
