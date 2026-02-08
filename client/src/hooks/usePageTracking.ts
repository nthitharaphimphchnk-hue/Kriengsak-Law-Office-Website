import { useEffect } from "react";
import { useLocation } from "wouter";

/**
 * Hook to track page views with Google Analytics
 * Sends page view event whenever the route changes
 */
export function usePageTracking() {
  const [location] = useLocation();

  useEffect(() => {
    // Track page view with Google Analytics
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", "G-XXXXXXXXXX", {
        page_path: location,
        page_title: document.title,
      });
    }

    // Track page view with Umami (Manus built-in analytics)
    if (typeof window !== "undefined" && window.umami) {
      window.umami.track("page_view", {
        url: window.location.href,
        title: document.title,
      });
    }
  }, [location]);
}

// Extend window interface to include gtag and umami
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    umami?: {
      track: (event: string, data?: any) => void;
    };
    dataLayer?: any[];
  }
}
