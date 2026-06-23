// ===== Mobile nav toggle =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close mobile menu after clicking a link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ===== Dynamic footer year =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== "Last compiled" date in hero eyebrow =====
const buildDate = document.getElementById('buildDate');
buildDate.textContent = new Date().toLocaleDateString('en-US', {
  year: 'numeric', month: 'short', day: 'numeric'
});

// ===== Back to top button =====
const toTopBtn = document.getElementById('toTop');
toTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== Highlight active nav link on scroll =====
const sections = document.querySelectorAll('main section');
const navAnchors = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navAnchors.forEach(a => {
        a.style.color = a.getAttribute('href') === `#${id}` ? 'var(--amber)' : '';
      });
    }
  });
}, { rootMargin: '-40% 0px -50% 0px' });

sections.forEach(section => observer.observe(section));
