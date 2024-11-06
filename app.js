let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".carousel-item");
  if (index >= slides.length) currentIndex = 0;
  if (index < 0) currentIndex = slides.length - 1;

  slides.forEach((slide) => slide.classList.remove("active"));
  slides[currentIndex].classList.add("active");
}

function moveSlide(step) {
  currentIndex += step;
  showSlide(currentIndex);
}

// Tự động chuyển slide mỗi 5 giây
setInterval(() => moveSlide(1), 5000);
