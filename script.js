let burger = document.querySelector(".burger_menu");
let xmark = document.querySelector(".xmark_menu");
let mobileMenu = document.querySelector(".header_nav");

burger.addEventListener("click", () => {
  mobileMenu.classList.add("show");
  burger.style.display = "none";
  xmark.style.display = "block";
});

xmark.addEventListener("click", () => {
  mobileMenu.classList.remove("show");
  burger.style.display = "block";
  xmark.style.display = "none";
});
