const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true; // Automatic sliding
const intervalTime = 5000;
let slideInterval;

// Function to move to the next slide
const nextSlide = () => {
  const current = document.querySelector('.current');
  current.classList.remove('current');
  if (current.nextElementSibling && current.nextElementSibling.classList.contains('slide')) {
    current.nextElementSibling.classList.add('current');
  } else {
    slides[0].classList.add('current');
  }
};

// Function to move to the previous slide
const prevSlide = () => {
  const current = document.querySelector('.current');
  current.classList.remove('current');
  if (current.previousElementSibling && current.previousElementSibling.classList.contains('slide')) {
    current.previousElementSibling.classList.add('current');
  } else {
    slides[slides.length - 1].classList.add('current');
  }
};

// Button events
next.addEventListener('click', () => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener('click', () => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// Prevent slide navigation when clicking on links
slides.forEach(slide => {
  const link = slide.querySelector('a');
  if (link) {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // Stop default link behavior
      window.open(link.href, link.target); // Open the link properly
    });
  }
});

// Auto slide
if (auto) {
  slideInterval = setInterval(nextSlide, intervalTime);
}