"use strict";

// const navButton = document.querySelector('.nav-button');
// const nav = document.querySelector('.nav');
// const overlay = document.querySelector('.overlay');
// const navElements = [navButton, nav, overlay];

// const mobileMenuShowHide = (items, classToToggle) => {
//   items.forEach((item) => {
//     item.classList.toggle(classToToggle);
//   });
// };

// navElements.forEach((element) => {
//   element.addEventListener("click", (event) => {
//     const clicked = event.currentTarget;
//     if (clicked.classList.contains("active") || clicked === navButton) {
//       mobileMenuShowHide(navElements, "active");
//     }
//   });
// });


const pageBody = document.querySelector(".body");
const navButton = document.querySelector(".nav-button");
const nav = document.querySelector(".nav");

function burgerMenu() {
  navButton.classList.toggle("active");
  nav.classList.toggle("active");
  pageBody.classList.toggle("lock");
}
navButton.addEventListener("click", burgerMenu);

function closeMenu(event) {
  if (event.target.classList.contains("nav-link")) {
    navButton.classList.remove("active");
    nav.classList.remove("active");
    pageBody.classList.remove("lock");
  }
}
nav.addEventListener("click", closeMenu);