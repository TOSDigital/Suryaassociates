window.addEventListener('load', function() {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');

  function showSlide(index) {
    slides.forEach((slide) => {
      slide.classList.remove('active');
    });

    slides[index].classList.add('active');
  }

  function changeSlide(n) {
    currentSlide += n;

    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    showSlide(currentSlide);
  }

  prevButton.addEventListener('click', () => changeSlide(-1));
  nextButton.addEventListener('click', () => changeSlide(1));

  showSlide(currentSlide); // Show the first slide initially
  setInterval(() => changeSlide(1), 3000);
});
