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

  //Countdown on date for registration on Event page
  function initializeEventTimers() {
    document.querySelectorAll('.event-card[data-event-date]').forEach(card => {
      const eventDate = new Date(card.dataset.eventDate);
      const daysElement = card.querySelector('.days');
      const hoursElement = card.querySelector('.hours');
      const minutesElement = card.querySelector('.minutes');
      const secondsElement = card.querySelector('.seconds');
      const status = card.querySelector('.registration-status');
      const btn = card.querySelector('.btn');
      let timerInterval;

      function updateTimer() {
        const now = new Date();
        const diff = eventDate - now;

        if (diff <= 0) {
          clearInterval(timerInterval);
          status.textContent = "🎉 Registration Now Open!";
          card.querySelector('.countdown-timer').style.display = 'none';
          btn.classList.remove('disabled');
          btn.removeAttribute('aria-disabled');
          return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        daysElement.textContent = days.toString().padStart(2, '0');
        hoursElement.textContent = hours.toString().padStart(2, '0');
        minutesElement.textContent = minutes.toString().padStart(2, '0');
        secondsElement.textContent = seconds.toString().padStart(2, '0');
      }

      // Initial call to avoid 1 second delay
      updateTimer();
      
      // Update every second
      timerInterval = setInterval(updateTimer, 1000);
    });
  }

  document.addEventListener('DOMContentLoaded', initializeEventTimers);