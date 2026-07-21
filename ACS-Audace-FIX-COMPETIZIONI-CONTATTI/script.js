
const button = document.querySelector('.menu-button');
const nav = document.querySelector('.main-navigation');
if (button && nav) {
  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('is-open');
  });
}
const reveal = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  });
}, { threshold: 0.12 });
document.querySelectorAll('main section, .news-card, .news-feature, .person-card').forEach(el => {
  el.classList.add('reveal');
  reveal.observe(el);
});

document.querySelectorAll('.competition-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.competition-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.competition-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    const panel = document.getElementById(tab.dataset.target);
    if (panel) panel.classList.add('active');
  });
});
