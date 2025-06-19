// Smooth Scroll untuk link anchor
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Scroll Effect untuk Header
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 100) {
    header.style.background = 'rgba(255, 255, 255, 0.98)';
    header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
  } else {
    header.style.background = 'rgba(255, 255, 255, 0.95)';
    header.style.boxShadow = 'none';
  }
});

// Fade-in Scroll Observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Efek Parallax Hero
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.2}px)`;
  }
});

// Hover Animation pada Project Card
document.querySelectorAll('.project-card').forEach((card, index) => {
  card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-15px) scale(1.02)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) scale(1)';
  });
});

// Hover Animation pada Code Window
const codeWindow = document.querySelector('.code-window');
if (codeWindow) {
  codeWindow.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
  codeWindow.addEventListener('mouseenter', () => {
    codeWindow.style.transform = 'skewY(-1.5deg) skewX(1.5deg)';
    codeWindow.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.3)';
  });
  codeWindow.addEventListener('mouseleave', () => {
    codeWindow.style.transform = 'none';
    codeWindow.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
  });
}
