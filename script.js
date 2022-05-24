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
const slidesWeb = [
  "images/desktop-image-hero-1.jpg",
  "images/desktop-image-hero-2.jpg",
  "images/desktop-image-hero-3.jpg",
];
const slidesMob = [
  "images/mobile-image-hero-1.jpg",
  "images/mobile-image-hero-2.jpg",
  "images/mobile-image-hero-3.jpg",
];
const heading = [
  `Discover innovative ways to decorate`,
  `We are available all across the globe`,
  `Manufactured with the best materials`,
];
const writeup = [
  `We provide unmatched quality, comfort,and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.`,
  `With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.`,
  `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.`,
];
let slideIndex = 0;
const slide = document.getElementsByClassName("hero")[0];
const bannerHeading = document.getElementsByClassName(
  "top-banner-content-heading"
)[0];
const bannerWriteup = document.getElementsByClassName(
  "top-banner-content-writeup"
)[0];
const checkMediaQuery = (slideIndex) => {
  // Create a media condition that targets viewports at least 768px wide
  const mediaQuery = window.matchMedia("(max-width: 820px)");
  let slides = [];
  // Check if the media query is true
  if (mediaQuery.matches) slides = slidesMob;
  else slides = slidesWeb;
  showSlide(slideIndex, slides);
};
const setSlides = (slideIndex, slides) => {
  slide.setAttribute("src", slides[slideIndex]);
  console.log(slides);
  bannerHeading.innerText = heading[slideIndex];
  bannerWriteup.innerText = writeup[slideIndex];
};
const showSlide = (index, slides) => {
  if (index >= slides.length) slideIndex = 0;
  if (index < 0) slideIndex = slides.length - 1;
  setSlides(slideIndex, slides);
};
const prevSlide = () => {
  slideIndex -= 1;
  checkMediaQuery(slideIndex);
};
const nextSlide = () => {
  slideIndex += 1;
  checkMediaQuery(slideIndex);
};
checkMediaQuery(slideIndex);
prev.addEventListener("click", prevSlide);
next.addEventListener("click", nextSlide);
