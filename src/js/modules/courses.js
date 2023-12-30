document.addEventListener("DOMContentLoaded", function () {
  var today = new Date();
  var currentMonth = today.getMonth();
  var nextMonth = (currentMonth + 1) % 12; // Get the next month

  // Add 'active' class to the default slides
  document
    .querySelector(
      ".courses-block__carousel-one .swiper-slide:nth-child(" +
        (currentMonth + 1) +
        ")"
    )
    .classList.add("active");
  document
    .querySelector(
      ".courses-block__carousel-two .swiper-slide:nth-child(" +
        (nextMonth + 1) +
        ")"
    )
    .classList.add("active");

  // Initialize Swiper sliders
  var swiper1 = new Swiper(".courses-block__carousel-one", {
    navigation: {
      prevEl: ".courses-block__btn-prev",
      nextEl: ".courses-block__btn-next",
    },
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
  });

  var swiper2 = new Swiper(".courses-block__carousel-two", {
    navigation: {
      prevEl: ".courses-block__btn-prev",
      nextEl: ".courses-block__btn-next",
    },
    slidesPerView: 1,
    spaceBetween: 20,
    loop: 3,
  });

  // Update all courses-block__item elements based on the active slide
  function updateItemSpan() {
    var activeMonth1 = swiper1.slides[swiper1.activeIndex].textContent.trim();
    var activeMonth2 = swiper2.slides[swiper2.activeIndex].textContent.trim();

    updateSpanText(".courses-block__item span", activeMonth1, activeMonth2);
  }

  // Function to update text in the specified <span> elements
  function updateSpanText(selector, text1, text2) {
    var spanElements = document.querySelectorAll(selector);
    if (spanElements) {
      spanElements.forEach(function (spanElement) {
        spanElement.textContent = text1;
        // You can also update the other span with text2 if needed
        // spanElement.textContent = text2;
      });
    }
  }

  // Initial update on page load
  updateItemSpan();

  // Update all courses-block__item elements on slide change for both sliders
  swiper1.on("slideChange", updateItemSpan);
  swiper2.on("slideChange", updateItemSpan);
});
