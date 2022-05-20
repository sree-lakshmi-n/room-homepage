`use strict`;
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
