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

// Button events
nextBtn.addEventListener('click', () => {
  nextSlide();
  resetAutoSlide();
});

prevBtn.addEventListener('click', () => {
  prevSlide();
  resetAutoSlide();
});

// Pause on hover
slider.addEventListener('mouseenter', stopAutoSlide);
slider.addEventListener('mouseleave', startAutoSlide);

// Touch swipe (mobile)
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

  if (swipeDistance > 50) {      
    prevSlide();
    resetAutoSlide();
  } else if (swipeDistance < -50) { 
    nextSlide();
    resetAutoSlide();
  }
}

// Drag 
let isDragging = false;
let startX = 0;
let endX = 0;

slider.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.pageX;   // where mouse started
});

slider.addEventListener('mouseup', (e) => {
  if (!isDragging) return;
  isDragging = false;
  endX = e.pageX;     // where mouse ended
  handleDrag();
});

function handleDrag() {
  const dragDistance = endX - startX;

  if (dragDistance > 50) {   // dragged right
    prevSlide();
    resetAutoSlide();
  } else if (dragDistance < -50) { // dragged left
    nextSlide();
    resetAutoSlide();
  }
}
 
showSlide(currentIndex);
startAutoSlide();
