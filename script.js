`use strict`;

// Hamburger icon functionality and animation
const hamburger = document.getElementsByClassName("hamburger-icon")[0];
const nav = document.getElementsByClassName("top-nav")[0];
const logo = document.getElementsByClassName("logo")[0];
const menu = document.getElementsByClassName("menu")[0];
const overlay = document.getElementsByClassName("overlay")[0];
const main = document.getElementsByClassName("wrapper")[0];

hamburger.addEventListener("click", (element) => {
  element.target.parentElement.classList.toggle("open");
  main.classList.toggle("avoid-clicks");
  nav.classList.toggle("white-background");
  logo.classList.toggle("hide");
  menu.classList.toggle("hide");
  overlay.classList.toggle("hide");
});

// Slide show functionality
const prev = document.getElementsByClassName("prev-btn")[0];
const next = document.getElementsByClassName("next-btn")[0];
let slideIndex = 1;

const showSlide = (index) => {
  const slides = document.getElementsByClassName("hero");
  if (index > slides.length) slideIndex = 1;
  if (index < 1) slideIndex = slides.length;
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.add("hideSlide");
  }
  slides[slideIndex - 1].classList.remove("hideSlide");
};
const prevSlide = () => {
  slideIndex -= 1;
  showSlide(slideIndex);
};
const nextSlide = () => {
  slideIndex += 1;
  showSlide(slideIndex);
};
prev.addEventListener("click", prevSlide);
next.addEventListener("click", nextSlide);
