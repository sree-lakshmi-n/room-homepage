`use strict`;
const hamburger = document.getElementsByClassName("hamburger-icon")[0];
const nav = document.getElementsByClassName("top-nav")[0];
const logo = document.getElementsByClassName("logo")[0];
const menu = document.getElementsByClassName("menu")[0];

hamburger.addEventListener("click", (element) => {
  element.target.parentElement.classList.toggle("open");
  //   document.body.classList.toggle("position-and-colour");
  nav.classList.toggle("white-background");
  logo.classList.toggle("hide");
  menu.classList.toggle("hide");
});

// window.addEventListener("click", (element) => {
//   console.log(element.target.parentElement);
// });
