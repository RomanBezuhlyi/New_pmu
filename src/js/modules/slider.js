// Media
var swiper = new Swiper(".media__swiper", {
  navigation: {
    prevEl: ".media__slider-chev-left",
    nextEl: ".media__slider-chev-right",
  },
  pagination: {
    el: ".media__pagination",
    clickable: true,
  },
  slidesPerView: 3,
  spaceBetween: 7,
  centeredSlides: false,
  breakpoints: {
    480: {
      slidesPerView: 4,
      spaceBetween: 8,
    },
    600: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
    991: {
      slidesPerView: 8,
      spaceBetween: 12,
    },
    1200: {
      slidesPerView: 10,
      spaceBetween: 15,
    },
  },
});

var swiper = new Swiper(".media__swiper-second", {
  pagination: {
    el: ".media__pagination-second",
    clickable: true,
  },
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    480: {
      slidesPerView: 2,
    },
  },
});

var swiper = new Swiper(".video-swiper", {
  navigation: {
    prevEl: ".video__slider-chev-left",
    nextEl: ".video__slider-chev-right",
  },
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  breakpoints: {
    430: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 6,
    },
    991: {
      slidesPerView: 8,
    },
    1200: {
      slidesPerView: 10,
    },
  },
});

// Academy
var swiper = new Swiper(".academy-swiper", {
  navigation: {
    prevEl: ".academy-chev-left",
    nextEl: ".academy-chev-right",
  },
  pagination: {
    el: ".academy-pagination",
    clickable: true,
  },
  slidesPerView: 1,
  loop: true,
  breakpoints: {
    600: {
      slidesPerView: 2,
    },
  },
});

// Courses
var swiper = new Swiper(".courses__carousel", {
  navigation: {
    prevEl: ".courses-chev-left",
    nextEl: ".courses-chev-right",
  },
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    480: {
      slidesPerView: 2,
    },
    660: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

// Clients
var swiper = new Swiper(".clients__swiper", {
  navigation: {
    prevEl: ".clients-chev-left",
    nextEl: ".clients-chev-right",
  },
  pagination: {
    el: ".clients-pagination",
    clickable: true,
  },
  slidesPerView: 1,
});

var swiper = new Swiper(".clients__middle-swiper", {
  navigation: {
    prevEl: ".clients-middle-chev-left",
    nextEl: ".clients-middle-chev-right",
  },
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    1300: {
      slidesPerView: 2,
    },
  },
});

var swiper = new Swiper(".clients__bottom-swiper", {
  navigation: {
    prevEl: ".clients-bottom-chev-left",
    nextEl: ".clients-bottom-chev-right",
  },
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    1300: {
      slidesPerView: 2,
    },
  },
});
