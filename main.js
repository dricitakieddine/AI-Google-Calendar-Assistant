// AI Google Calendar Assistant: portfolio interactions
document.addEventListener('DOMContentLoaded', () => {
  // Smoothly reveal major sections as they enter the viewport.
  const sections = document.querySelectorAll('section');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    sections.forEach(section => {
      section.classList.add('reveal');
      observer.observe(section);
    });
  } else {
    sections.forEach(section => section.classList.add('is-visible'));
  }
});
