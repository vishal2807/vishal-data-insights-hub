
export const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        // Stagger animations for project cards
        if (entry.target.classList.contains('project-card')) {
          const cards = entry.target.parentElement?.querySelectorAll('.project-card');
          cards?.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('stagger-animation');
            }, index * 100);
          });
        }
      }
    });
  }, observerOptions);

  // Observe all scroll-animate elements
  document.querySelectorAll('.scroll-animate').forEach(el => {
    observer.observe(el);
  });
};

// Initialize on DOM content loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', initScrollAnimations);
}
