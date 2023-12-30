var swiper = new Swiper(".school__swiper", {
  navigation: {
    prevEl: ".school__carousel-chev-left",
    nextEl: ".school__carousel-chev-right",
  },
  slidesPerView: 3,
  spaceBetween: 5,
  breakpoints: {
    991: {
      spaceBetween: 19,
    },
  },
});

var swiper = new Swiper(".school__bottom-swiper", {
  navigation: {
    prevEl: ".school__carousel-chev-left",
    nextEl: ".school__carousel-chev-right",
  },
  slidesPerView: 0.8,
  spaceBetween: 0,
  breakpoints: {
    480: {
      slidesPerView: 1,
      spaceBetween: 19,
    },
  },
});

var swiper = new Swiper(".press-media__swiper", {
  navigation: {
    prevEl: ".press-media-prev-arr",
    nextEl: ".press-media-next-arr",
  },
  slidesPerView: 3,
  spaceBetween: 5,
  breakpoints: {
    991: {
      spaceBetween: 9,
    },
  },
});
