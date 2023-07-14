/* Carrosel podre */

var currentSlide = 0;
var slides = [
  'img/t1.jpg',
  'img/t2.jpg',
  'img/t3.jpg',
  'img/t4.jpg',
  'img/t5.jpg'
];

var carouselImage = document.querySelector('.carousel-image');

function showSlide() {
  carouselImage.src = slides[currentSlide];
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide();
}

function previousSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide();
}

showSlide();

/* Menu dropdown */ 

function toggleDropdown() {
  var dropdown = document.getElementById("myDropdown");
  if (dropdown.style.display === "none") {
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }
}

function toggle() {
  var blur = document.getElementById("blur");
  blur.classList.toggle("active");
}

