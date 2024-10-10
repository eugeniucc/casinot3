const popupBtnClose = document.querySelector(".popup_close");
const popup = document.querySelector(".popup");

window.addEventListener("load", function () {
  setTimeout(function () {
    popup.classList.add("active");
  }, 500);
});

popupBtnClose.addEventListener("click", () => {
  popup.classList.remove("active");
});
