const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slider = document.querySelector('.slider');

let currentIndex = 0;
let slideInterval;
let intervalTime = 2000; // auto-slide interval

// === Show slide ===
function showSlide(index) {
  slides.style.transform = `translateX(-${index * 100}%)`;
}

// === Next / Prev ===
function nextSlide() {
  currentIndex = (currentIndex + 1) % slide.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slide.length) % slide.length;
  showSlide(currentIndex);
}

// === Auto slide ===
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

// === Button events ===
nextBtn.addEventListener('click', () => { nextSlide(); resetAutoSlide(); });
prevBtn.addEventListener('click', () => { prevSlide(); resetAutoSlide(); });

// === Pause on hover ===
slider.addEventListener('mouseenter', stopAutoSlide);
slider.addEventListener('mouseleave', startAutoSlide);

// === Touch swipe (mobile) ===
let touchStartX = 0;
let touchEndX = 0;

slider.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].screenX; });
slider.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  const swipeDistance = touchEndX - touchStartX;
  if (swipeDistance > 50) prevSlide();
  else if (swipeDistance < -50) nextSlide();
  resetAutoSlide();
}

// === Mouse drag (desktop) ===
let isDragging = false;
let startX = 0;

slider.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.pageX;
  stopAutoSlide();
  slider.style.cursor = 'grabbing';
});

slider.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const dragDistance = e.pageX - startX;
  slides.style.transform = `translateX(${-currentIndex * 100 + dragDistance / slider.offsetWidth * 100}%)`;
});

slider.addEventListener('mouseup', (e) => {
  if (!isDragging) return;
  isDragging = false;
  const dragDistance = e.pageX - startX;
  slider.style.cursor = 'grab';
  if (dragDistance > 50) prevSlide();
  else if (dragDistance < -50) nextSlide();
  else showSlide(currentIndex); // snap back if small drag
  resetAutoSlide();
});

slider.addEventListener('mouseleave', () => {
  if (isDragging) {
    isDragging = false;
    showSlide(currentIndex);
    slider.style.cursor = 'grab';
    resetAutoSlide();
  }
});

// initial cursor
slider.style.cursor = 'grab';

// === Keyboard navigation ===
document.addEventListener('keydown', (e) => {
  switch(e.key) {
    case 'ArrowRight':
    case 'PageDown': nextSlide(); resetAutoSlide(); break;
    case 'ArrowLeft':
    case 'PageUp': prevSlide(); resetAutoSlide(); break;
    case 'Home': currentIndex = 0; showSlide(currentIndex); resetAutoSlide(); break;
    case 'End': currentIndex = slide.length-1; showSlide(currentIndex); resetAutoSlide(); break;
  }
});

// === Init ===
showSlide(currentIndex);
startAutoSlide();
