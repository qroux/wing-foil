export const GA_TRACKING_ID = 'G-JSZJP4T45B';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

export const consentGranted = () => {
  gtag('consent', 'update', {
    ad_storage: 'granted',
    analytics_storage: 'granted',
  });
};
