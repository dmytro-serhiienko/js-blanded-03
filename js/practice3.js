// ! Делегування подій простий список

// 	•	Повісити одну подію click на <ul>, щоб при кліку на будь-який <li> виводити його текст у консоль.
// 	•	Не додавати click на кожен <li> окремо.

// const item1 = document.querySelector("#todo-list");
// console.log("🚀 ~ item1:", item1);

// item1.addEventListener("click", (event) => {
//   console.log(event.target.textContent);
// });

// ! Делегування подій додавання нового елемента

// •	При кліку на кнопку додавати новий <li> з текстом із input.
// •	При кліку на будь-який <li> (новий чи старий) видаляти його.
// •	Використати делегування подій на <ul>.

// const item1 = document.querySelector("#btn");

// const item2 = document.querySelector("#list");

// const item3 = document.querySelector("#new-item");

// item1.addEventListener("click", () => {
//   const newLi = document.createElement("li");
//   newLi.textContent = item3.value;
//   item2.append(newLi);

//   item3.value = "";
// });

// item2.addEventListener("click", (event) => {
//   if (event.target.tagName === "LI") {
//     event.target.remove();
//   }
// });

// ! Поширення подій (bubble phase)

// •	Повісити click на #outer і #inner.
// •	При кліку на внутрішній <div> спостерігати, як спрацьовують обидві події (спливання).
// •	Додати console.log("Outer clicked") і console.log("Inner clicked").

// const item1 = document.querySelector("#outer");
// const item2 = document.querySelector("#inner");

// item1.addEventListener("click", (event) => {
//   console.log("Outer clicked");
// });

// item2.addEventListener("click", () => {
//   console.log("Inner clicked");
// });

// ! Bubble + делегування

// •	Повісити одну подію click на #container, щоб при кліку
// на будь-яку кнопку змінювати колір #box відповідно до data-color.

// •	Пояснити, чому делегування працює і з новими кнопками, які додадуться пізніше.

// const item1 = document.querySelector("#container");

// const item2 = document.querySelectorAll("#color-btn");

// const item3 = document.querySelector("#box");

// item1.addEventListener("click", (event) => {
//   if (event.target.tagName === "BUTTON") {
//     item3.style.background = event.target.dataset.color;
//   }
// });

// ! Задача
// •	При кліку на кнопку X — видаляти лише свою картку
// •	Використати один click на #cards
// •	Використати closest(".card") для пошуку потрібного елемента

// const item1 = document.querySelector("#cards");

// const item2 = document.querySelectorAll(".card");

// item1.addEventListener("click", (event) => {
//   if (event.target.tagName === "BUTTON") {
//     const currentCard = event.target.closest(".card");
//     currentCard.remove();
//   }
// });

// ! Задача
// •	Навішати один обробник на <ul>
// •	Реагувати лише на кліки по <a>
// •	Виводити текст меню (event.target.textContent)

// const item1 = document.querySelector("#nav");

// item1.addEventListener("click", (event) => {
//   event.preventDefault();
//   if (event.target.tagName === "A") {
//     event.target.classList.add("active");
//     console.log(event.target.textContent);
//   }
// });

// event.preventDefault() — не переходити по посиланню
// 	•	Змінювати активний елемент (наприклад, додати active клас)

// ! Задача

// 	•	Делегування на таблицю
// 	•	При кліку на будь-яку комірку показати:
// 	•	текст у ній
// 	•	координати: rowIndex та cellIndex

// (Через event.target.closest("td"))

// const item1 = document.querySelector("#product-table");

// item1.addEventListener("click", (event) => {
//   if (event.target.tagName === "TD") {
//     console.log(event.target.textContent);
//   }
// });

//! Динамічні кнопки в таблиці

// •	При кліку на кнопку Edit виводити ім’я користувача (текст з першої клітинки рядка)
// •	Додаючи нового користувача (через кнопку Add User), делегування все ще повинно працювати

const item1 = document.querySelector("#user-table");

item1.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const row = event.target.closest("tr");
    const nameCell = row.querySelector("td");
    console.log(nameCell.textContent);
  }
});
