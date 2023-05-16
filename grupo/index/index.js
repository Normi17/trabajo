const carousel = document.querySelector('.carousel');
const carouselInner = document.querySelector('.carousel-inner');
const navButtons = document.querySelectorAll('.tns-nav button');

let slideIndex = 0;
const slideWidth = carousel.offsetWidth;
const slideInterval = setInterval(moveSlide, 3000);

function moveSlide() {
  slideIndex++;
  if (slideIndex >= 5) {
    slideIndex = 0;
  }
  carouselInner.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
  updateNavButtons();
}

function updateNavButtons() {
  navButtons.forEach(button => {
    button.classList.remove('tns-nav-active');
  });
  navButtons[slideIndex].classList.add('tns-nav-active');
}

navButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    slideIndex = index;
    carouselInner.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
    updateNavButtons();
  });
});

