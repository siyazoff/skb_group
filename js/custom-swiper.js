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

const swiperInfoP = new Swiper(".swiper-info-p", {
  direction: "vertical",
  loop: false,

  spaceBetween: 50,
  slidesPerView: 1,
  allowTouchMove: false,

  navigation: {
    nextEl: ".info-btn-next",
    prevEl: ".info-btn-prev",
  },
});

const swiperInfoImgs2 = new Swiper(".swiper-info-imgs-2", {
  direction: "horizontal",
  loop: false,

  spaceBetween: 50,
  slidesPerView: 1,
  allowTouchMove: false,

  navigation: {
    nextEl: ".info-btn-next",
    prevEl: ".info-btn-prev",
  },
});

const swiperInfoImgs1 = new Swiper(".swiper-info-imgs-1", {
  direction: "horizontal",
  loop: false,

  spaceBetween: 50,
  slidesPerView: 1,
  allowTouchMove: false,

  navigation: {
    nextEl: ".info-btn-next",
    prevEl: ".info-btn-prev",
  },
});

const swiperGalleryThumbs = new Swiper(".swiper-gallery-thumbs", {
  direction: "vertical",

  spaceBetween: 0,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,

  breakpoints: {
    320: {
      slidesPerView: 4,
      spaceBetween: 0,
      direction: "horizontal",
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 0,
      direction: "horizontal",
    },

    1440: {
      direction: "vertical",
    },
  },
});

const swiperGallery = new Swiper(".swiper-gallery", {
  direction: "horizontal",

  spaceBetween: 10,
  slidesPerView: 1,

  navigation: {
    nextEl: ".gallery-btn-prev",
    prevEl: ".gallery-btn-next",
  },
  thumbs: {
    swiper: swiperGalleryThumbs,
  },
  pagination: {
    el: ".gallery-pagination",
    type: "fraction",
  },
});

const swiperVideos = new Swiper(".swiper-videos", {
  direction: "horizontal",
  loop: false,

  spaceBetween: 0,
  slidesPerView: 1,

  navigation: {
    nextEl: ".video-btn-next",
    prevEl: ".video-btn-prev",
  },
});
