$(document).ready(function () {
  let prevScrollPos = window.scrollY;
  const $header = $("#header");

  $(window).on("scroll", function () {
    const currentScrollPos = window.scrollY;
    $header.css(
      "top",
      prevScrollPos > currentScrollPos || currentScrollPos === 0
        ? "0px"
        : "-105px"
    );
    navbar.classList.remove("open");
    popup.classList.remove("open");
    hamb.classList.remove("active");
    prevScrollPos = currentScrollPos;
  });

  $("input[id='tel']").mask("+7 (999) 999-99-99");
  $("input[id='tel-number']").mask("+7 (999) 999-99-99");
});
