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
  
  // Simple Form Validation for Contact Form
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
  
      if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill out all fields before submitting.');
      }
    });
  }