const menu = document.querySelector(".nav_list-mobile");
const menuOverlay = document.querySelector(".nav-mobile-overlay");

document
  .querySelector(".mobile_menu-btn")
  .addEventListener("click", function () {
    menu.classList.toggle("active");
    menuOverlay.classList.toggle("active");
    document.body.classList.toggle("freeze");
  });

menuOverlay.addEventListener("click", function () {
  menu.classList.remove("active");
  menuOverlay.classList.remove("active");
  document.body.classList.remove("freeze");
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    menu.classList.remove("active");
    menuOverlay.classList.remove("active");
    document.body.classList.remove("freeze");
  }
});
