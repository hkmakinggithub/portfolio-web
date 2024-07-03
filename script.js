document.addEventListener('DOMContentLoaded', () => {
  // Toggle menu icon and navbar
  let menuIcon = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');

  menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  };

  // Sticky header on scroll
  window.onscroll = () => {
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  };

  // Swiper initialization
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Dark mode toggle
  let darkModeIcon = document.querySelector('#darkmode-icon');

  darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
  };

  // Scroll Reveal animations
  ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
  });

  ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
  ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, contact form', { origin: 'bottom' });
  ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
  ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });
});
