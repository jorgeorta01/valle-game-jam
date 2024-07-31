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

// Initialize
showSlide(slideIndex);
