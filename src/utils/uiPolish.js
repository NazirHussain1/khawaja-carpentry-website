const revealSelector = [
  'main section',
  'main article',
  'main form',
  'main [class*="rounded-3xl"]',
  'main [class*="rounded-2xl"]'
].join(',');

export function installUiPolish() {
  if (!('IntersectionObserver' in window)) return () => {};

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return () => {};

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
  );

  const apply = () => {
    document.querySelectorAll(revealSelector).forEach((element, index) => {
      if (element.classList.contains('ui-reveal')) return;
      element.classList.add('ui-reveal');
      element.style.setProperty('--reveal-delay', `${Math.min(index % 6, 5) * 45}ms`);
      observer.observe(element);
    });
  };

  apply();
  const mutationObserver = new MutationObserver(apply);
  mutationObserver.observe(document.body, { childList: true, subtree: true });

  return () => {
    observer.disconnect();
    mutationObserver.disconnect();
  };
}
