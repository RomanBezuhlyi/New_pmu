const burgerBtn = document.getElementById("burger");
const closeBtn = document.getElementById("close");
const mobileMenu = document.getElementById("mobile-menu");
const body = document.querySelector("body");

burgerBtn.addEventListener("click", () => {
  mobileMenu.classList.add("open");
  body.classList.add("no-scroll");
});
closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("open");
  body.classList.remove("no-scroll");
});
