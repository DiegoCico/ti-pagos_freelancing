export function initializeAnimations() {
  // Security bar animation
  const bar = document.querySelector('.sv-fill') as HTMLElement;
  const barObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && bar) {
        bar.style.width = '95%';
      }
    },
    { threshold: 0.4 }
  );
  
  if (bar) {
    barObserver.observe(bar);
  }

  // Reveal animations
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('on');
        }
      });
    },
    { threshold: 0.07, rootMargin: '0px 0px -16px 0px' }
  );

  // Add staggered delays to reveal elements
  document.querySelectorAll('.r').forEach((el) => {
    const siblings = [...(el.parentElement?.querySelectorAll(':scope > .r') || [])];
    const elementIndex = siblings.indexOf(el);
    (el as HTMLElement).style.transitionDelay = (elementIndex * 0.06) + 's';
    revealObserver.observe(el);
  });

  return () => {
    barObserver.disconnect();
    revealObserver.disconnect();
  };
}