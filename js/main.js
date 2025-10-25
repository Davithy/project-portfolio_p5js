let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const slideBack = document.getElementById("prevSlide");
  const slideNext = document.getElementById("nextSlide");

  slideBack.addEventListener('click', () => {
    plusSlides(-1);
  })

  slideNext.addEventListener('click', () => {
    plusSlides(1);
  })

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  setInterval(function() {
    plusSlides(1);
  }, 5000)
});