$(document).ready(function () {
  let prevScrollPos = window.scrollY;
  const $header = $(".header");

  $(window).on("scroll", function () {
    const currentScrollPos = window.scrollY;
    $header.css(
      "top",
      prevScrollPos > currentScrollPos || currentScrollPos === 0
        ? "0px"
        : "-105px"
    );
    $header.removeClass("header__active");
    prevScrollPos = currentScrollPos;
  });

  $("input[id='tel']").mask("+7 (999) 999-99-99");
  $("input[id='tel-number']").mask("+7 (999) 999-99-99");

  $(".humb").on("click", function () {
    $(".header").toggleClass("header__active");
  });

  let inputs = document.querySelectorAll(".input__file");
  Array.prototype.forEach.call(inputs, function (input) {
    let label = input.nextElementSibling,
      labelVal = label.querySelector(".input__file-button-text").innerText;

    input.addEventListener("change", function (e) {
      let countFiles = "";
      if (this.files && this.files.length >= 1) countFiles = this.files.length;

      if (countFiles)
        label.querySelector(".input__file-button-text").innerText =
          "Выбрано файлов: " + countFiles;
      else label.querySelector(".input__file-button-text").innerText = labelVal;
    });
  });
});
