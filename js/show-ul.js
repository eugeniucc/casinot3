document.querySelector(".descr_wrapper").addEventListener("click", function () {
  // header section
  const list = document.querySelector(".descr_list");
  const btn = document.querySelector(".descr_btn");
  btn.classList.toggle("rotate");
  list.classList.toggle("visible");
});
document.querySelectorAll(".faq_box").forEach((faq) => {
  // faq section
  faq.addEventListener("click", function () {
    const res = faq.querySelector(".faq_box-res");
    const btnRes = faq.querySelector(".faq_box-btn");
    btnRes.classList.toggle("rotate");
    res.classList.toggle("active");
  });
});
