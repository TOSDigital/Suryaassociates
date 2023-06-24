document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll(".testimonial-slide");
  let currentSlide = 0;

  function showSlide(n) {
    slides[currentSlide].classList.remove("active1");
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add("active1");
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function previousSlide() {
    showSlide(currentSlide - 1);
  }

  const testimonialNext = document.querySelector(".testimonial-next");
  const testimonialPrev = document.querySelector(".testimonial-prev");

  testimonialNext.addEventListener("click", nextSlide);
  testimonialPrev.addEventListener("click", previousSlide);

  setInterval(nextSlide, 5000); // Automatic slide every 3000ms

  // Function to change slide by clicking on navigation buttons
  function changeSlide(n) {
    showSlide(currentSlide + n);
  }

  // Function to handle keyboard arrow keys for sliding
  document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight") {
      changeSlide(1); // Move to the next slide when the right arrow key is pressed
    } else if (event.key === "ArrowLeft") {
      changeSlide(-1); // Move to the previous slide when the left arrow key is pressed
    }
  });
});
