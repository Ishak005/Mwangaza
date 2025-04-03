// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
// Mobile Menu Toggle
const menuToggle = document.createElement('div');
menuToggle.classList.add('menu-toggle');
menuToggle.innerHTML = '&#9776;'; // Hamburger icon
document.querySelector('header .container').appendChild(menuToggle);

const nav = document.querySelector('header nav ul');
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});
  
//Read more on the mentee
document.querySelectorAll('.read-more').forEach(button => {
  button.addEventListener('click', function() {
    const parent = this.closest('.description');
    const short = parent.querySelector('.short-text');
    const full = parent.querySelector('.full-text');
    const isExpanded = full.style.display === 'block';

    short.style.display = isExpanded ? 'block' : 'none';
    full.style.display = isExpanded ? 'none' : 'block';
    this.textContent = isExpanded ? 'Read more' : 'Read less';
  });
});

  //Program Card scroll
  document.querySelectorAll('.program-card').forEach(card => {
    card.addEventListener('click', function() {
      this.classList.toggle('expanded');
    });
  });
