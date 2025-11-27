export const GA_TRACKING_ID = "G-QHNQZJBCM8"; // replace with your ID

// Standard pageview tracking
export const pageview = (url: string) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

export function trackEvent(
  eventName: string,
  params: Record<string, any> = {}
): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      ...params,
      debug_mode: import.meta.env.DEV
    });
  } else {
    console.warn(`GA event skipped: ${eventName}`, params);
  }
};