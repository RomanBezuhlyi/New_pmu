const askBtns = document.querySelectorAll(".ask__item-btn");
const askItems = document.querySelectorAll(".ask__item");

askItems.forEach((askBtn, index) => {
  askBtn.addEventListener("click", () => {
    // Отримуємо батьківський елемент .ask__item для кнопки, яку ми клікнули
    const clickedItem = askItems[index];

    // Закриваємо всі попередні елементи, окрім клікнутого
    askItems.forEach((item, i) => {
      if (i !== index) {
        item.classList.remove("ask-open");
      }
    });

    // Додаємо або видаляємо клас для відкриття/закриття клікнутого елемента
    clickedItem.classList.toggle("ask-open");
  });
});
