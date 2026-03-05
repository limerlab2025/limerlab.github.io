/* ═══════════════════════════════════════════════════════════
   LIMeR Lab — script.js
   ═══════════════════════════════════════════════════════════ */

// ─── Section Navigation ──────────────────────────────────
function showSection(id) {
  // Hide all sections
  document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));

  // Show target section
  const target = document.getElementById(id);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Update nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.section === id);
  });

  // Close mobile menu
  document.getElementById('main-nav').classList.remove('open');
}

// ─── Nav link click handler ──────────────────────────────
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    showSection(link.dataset.section);
  });
});

// ─── Hamburger menu toggle ────────────────────────────────
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('main-nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Close nav when clicking outside
document.addEventListener('click', e => {
  if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
    nav.classList.remove('open');
  }
});

// ─── Sticky header shadow on scroll ──────────────────────
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

// ─── Publication filter buttons ──────────────────────────
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    // Future: filter pub items by type
  });
});

// ─── Staggered card entrance animations ──────────────────
const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

function observeCards() {
  document.querySelectorAll(
    '.position-card, .research-card, .facility-card, .member-card, .course-card, .pub-item, .news-item'
  ).forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.4s ease, transform 0.4s ease, border-color 0.25s ease, box-shadow 0.25s ease';
    observer.observe(el);
  });
}

// Run on load and whenever section changes
observeCards();

// Re-run observer when switching sections
const originalShow = window.showSection;
window.showSection = function(id) {
  originalShow(id);
  setTimeout(observeCards, 50);
};

// ─── Init: show home on load ──────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  showSection('home');
});
