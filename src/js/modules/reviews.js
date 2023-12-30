// Отримати всі елементи з класом 'clients__more-btn'
const readMoreButtons = document.querySelectorAll(".clients__more-btn");

// Додати обробник подій для кожної кнопки
readMoreButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Отримати батьківський контейнер <div class="clients__review">
    const container = button.closest(".clients__review");

    // Знайти текстовий блок та кнопку в батьківському контейнері
    const review = container.querySelector(".clients__text");

    // Перемикання класу 'hide-text' для текстового блоку
    review.classList.toggle("hide-text");

    // Зміна тексту кнопки в залежності від стану текстового блоку
    if (review.classList.contains("hide-text")) {
      button.innerText = "Read more";
    } else {
      button.innerText = "Hide";
    }
  });
});
