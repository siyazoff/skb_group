const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: false,
  effect: "fade",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  spaceBetween: 0,
  slidesPerView: 1,

  navigation: {
    nextEl: ".btn-next",
    prevEl: ".btn-prev",
  },
});
