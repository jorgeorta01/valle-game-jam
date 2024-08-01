let slideIndex = 0;

const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function showSlide(index) {
  if (index >= slides.length) slideIndex = 0;
  if (index < 0) slideIndex = slides.length - 1;

  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(-${slideIndex * 100}%)`;
  });

  dots.forEach((dot, i) => {
    dot.className = dot.className.replace(' active', '');
    if (i === slideIndex) dot.className += ' active';
  });
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    slideIndex = index;
    showSlide(slideIndex);
  });
});

// script.js
document.addEventListener('DOMContentLoaded', () => {
  const closeButton = document.querySelector('.close-btn');
  const floatingMessage = document.querySelector('.floating-message');

  // Add class to show the floating message
  floatingMessage.classList.add('show');

  closeButton.addEventListener('click', () => {
    floatingMessage.classList.remove('show');
    setTimeout(() => {
      floatingMessage.classList.add('hidden'); // Optionally hide element completely
    }, 300); // Duration of the transition
  });
});


// Initialize
showSlide(slideIndex);
