export function initializeAnimations() {
  // Security fill animation
  const fill = document.querySelector('.sp-fill') as HTMLElement;
  const fillObserver = new IntersectionObserver(
    ([e]) => {
      if (e.isIntersecting && fill) {
        fill.style.width = '95%';
      }
    },
    { threshold: 0.4 }
  );
  if (fill) fillObserver.observe(fill);

  // Reveal animations
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('on');
        }
      });
    },
    { threshold: 0.06, rootMargin: '0px 0px -12px 0px' }
  );

  document.querySelectorAll('.r').forEach((el) => {
    const sibs = [...(el.parentElement?.querySelectorAll(':scope > .r') || [])];
    const index = sibs.indexOf(el);
    (el as HTMLElement).style.transitionDelay = `${index * 0.055}s`;
    revealObserver.observe(el);
  });

  return () => {
    fillObserver.disconnect();
    revealObserver.disconnect();
  };
}