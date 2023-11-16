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

const swiperTwoRoom = new Swiper(".swiper-two-room", {
  direction: "horizontal",
  loop: false,

  spaceBetween: 48,
  slidesPerView: 1,
  allowTouchMove: false,

  navigation: {
    nextEl: ".two-room-btn-next",
    prevEl: ".two-room-btn-prev",
  },
});

const swiperTwoRoomInfoFirst = new Swiper(".swiper-info__first", {
  direction: "vertical",
  loop: false,

  spaceBetween: 48,
  slidesPerView: 1,
  allowTouchMove: false,

  navigation: {
    nextEl: ".two-room-btn-next",
    prevEl: ".two-room-btn-prev",
  },
});

const swiperTwoRoomInfoSecond = new Swiper(".swiper-info__second", {
  direction: "vertical",
  loop: false,

  spaceBetween: 48,
  slidesPerView: 1,
  allowTouchMove: false,

  navigation: {
    nextEl: ".two-room-btn-next",
    prevEl: ".two-room-btn-prev",
  },
});

const swiperTwoRoomInfoThird = new Swiper(".swiper-info__third", {
  direction: "vertical",
  loop: false,

  spaceBetween: 48,
  slidesPerView: 1,
  allowTouchMove: false,

  navigation: {
    nextEl: ".two-room-btn-next",
    prevEl: ".two-room-btn-prev",
  },
});
