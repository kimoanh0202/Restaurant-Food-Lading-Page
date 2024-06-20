// Toggle to show and hide navbar menu
const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");

burgerMenu.addEventListener("click", () => {
  navbarMenu.classList.toggle("is-active");
  burgerMenu.classList.toggle("is-active");
});

// Fixed navbar menu on window resizing
window.addEventListener("resize", () => {
  if (window.innerWidth > 992) {
    if (navbarMenu.classList.contains("is-active")) {
      navbarMenu.classList.remove("is-active");
      burgerMenu.classList.remove("is-active");
    }
  }
});

window.onscroll = function() {scrollHeader()};
var header = document.getElementById("header");
var sticky = header.offsetTop;

console.log("sticky", sticky);

// Scroll header
function scrollHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}