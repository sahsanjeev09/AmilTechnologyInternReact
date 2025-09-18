const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slider = document.querySelector('.slider'); 

let currentIndex = 0;
let slideInterval;

let intervalTime = 2000; 

function showSlide(index) {
  slides.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slide.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slide.length) % slide.length;
  showSlide(currentIndex);
}

function startAutoSlide() {
  slideInterval = setInterval(nextSlide, intervalTime);
}

function stopAutoSlide() {
  clearInterval(slideInterval);
}

function resetAutoSlide() {
  stopAutoSlide();
  startAutoSlide();
}

nextBtn.addEventListener('click', () => {
  nextSlide();
  resetAutoSlide();
});

prevBtn.addEventListener('click', () => {
  prevSlide();
  resetAutoSlide();
});

slider.addEventListener('mouseenter', stopAutoSlide);
slider.addEventListener('mouseleave', startAutoSlide);

let touchStartX = 0;
let touchEndX = 0;

slider.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

slider.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  const swipeDistance = touchEndX - touchStartX;

  if (swipeDistance > 50) {      // swipe right
    prevSlide();
    resetAutoSlide();
  } else if (swipeDistance < -50) { // swipe left
    nextSlide();
    resetAutoSlide();
  }
}

showSlide(currentIndex);
startAutoSlide();
