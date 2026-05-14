const endpoint = `${import.meta.env.VITE_API_BASE_URL || ''}/api/events`;

export function trackEvent(eventName, payload = {}) {
  const event = {
    eventName,
    payload,
    path: window.location.pathname,
    timestamp: new Date().toISOString()
  };

  window.dataLayer?.push({ event: eventName, ...payload });
  window.gtag?.('event', eventName, payload);
  window.fbq?.('trackCustom', eventName, payload);

  if (navigator.sendBeacon) {
    const blob = new Blob([JSON.stringify(event)], { type: 'application/json' });
    navigator.sendBeacon(endpoint, blob);
    return;
  }

  fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(event),
    keepalive: true
  }).catch(() => {});
}
