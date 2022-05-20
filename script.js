`use strict`;
const hamburger = document.getElementsByClassName("hamburger-icon")[0];
const nav = document.getElementsByClassName("top-nav")[0];
hamburger.addEventListener("click", (element) => {
  console.log(element.target.parentElement);
  element.target.parentElement.classList.toggle("open");
  document.body.classList.toggle("fixed-position");
  nav.classList.toggle("white-background");
});
