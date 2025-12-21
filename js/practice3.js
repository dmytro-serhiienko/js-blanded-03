// ! Делегування подій простий список

// import { calculateDiscount } from "./utils";

// const { createElement } = require("react");

// const { createElement } = require("react");

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

// const item1 = document.querySelector("#user-table");

// item1.addEventListener("click", (event) => {
//   if (event.target.tagName === "BUTTON") {
//     const row = event.target.closest("tr");
//     const nameCell = row.querySelector("td");
//     console.log(nameCell.textContent);
//   }
// });

//! Деструктуризація

// const user = { name: "Dmytro", age: 30, city: "Kyiv" };

// // Завдання:
// // Використовуючи деструктуризацію, виведи змінні name та city

// const { name, city } = user;

// console.log(name); // "Dmytro"
// console.log(city); // "Kyiv"

// !
// const numbers = [10, 20, 30, 40];

// // Завдання:
// // Використовуючи деструктуризацію, отримати перші два числа в змінні a та b

// const [a, b] = numbers;

// console.log(a);
// console.log(b);

// !

// const product = { id: 1, title: "Laptop", price: 2500 };

// // Завдання:
// // Використовуючи деструктуризацію, отримати змінну productName замість title

// const { title: productName } = product;

// console.log(productName);

// !

// const settings = { theme: "dark" };

// // Завдання:
// // Використовуючи деструктуризацію, отримати змінні
// // theme та fontSize (дефолтне значення 16)

// const { theme, fontSize = 16 } = settings;

// console.log(theme);
// console.log(fontSize);

// !

// const data = { user: { name: "Anna", address: { city: "Lviv", zip: 79000 } } };

// // Завдання:
// // Використовуючи деструктуризацію, отримати змінну city

// const {
//   user: {
//     address: { city },
//   },
// } = data;

// console.log(city);

// !

// const colors = ["red", "green", "blue", "yellow", "purple"];

// // Завдання:
// // Отримати перший та третій кольори в змінні firstColor та thirdColor

// const [firstColor, , thirdColor, ,] = colors;
// console.log(firstColor);
// console.log(thirdColor);

// !

// const employee = {
//   name: "Oleg",
//   position: "Developer",
//   contact: { email: "oleg@mail.com", phone: "123456789" },
// };

// // Завдання:
// // Отримати email та phone через деструктуризацію

// const {
//   contact: { email, phone },
// } = employee;

// console.log(email);
// console.log(phone);

// !

// const scores = [10, 20, 30, 40, 50];

// // Завдання:
// // Отримати перше число в змінну first, а решту в масив rest

// const [first, ...rest] = scores;

// console.log(first);
// console.log(rest);

// ! модальне

// const images = [
//   {
//     preview:
//       "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
//     original:
//       "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
//     description: "Hokkaido Flower",
//   },
//   {
//     preview:
//       "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
//     original:
//       "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
//     description: "Container Haulage Freight",
//   },
// ];

// Завдання:
// 	1.	Створи список <li> з картинками (<img>) у галереї .gallery з даного масиву.
// 	2.	При кліку на картинку відкривається модальне вікно (.modal) з великим зображенням (original).
// 	3.	Модальне вікно можна закрити:
// 	•	натисканням на ×
// 	•	натисканням на фон модального вікна
// 	4.	Під час відкритого модального вікна змінюй src і alt для <img> всередині модалки на відповідні значення.

// Додатково (опційно, якщо хочеш ускладнити):
// 	•	Додай анімацію відкриття/закриття модального вікна через CSS.
// 	•	Додай клавішу Escape, щоб закривати модалку через клавіатуру.

//! Деструктуризація Витягни name і age в окремі змінні.

// ?
// const user = { name: "Anna", age: 25 };

// const { name: username, gender = "female" } = user;

// const { age: userage } = user;

// console.log(username, gender);
// console.log(userage);

// ? Отримай перший та другий елемент у змінні first і second.

// const colors = ["red", "green", "blue"];

// const [first, second] = colors;

// console.log(first, second);

// ? Отримай theme і lang, при тому щоб lang мав значення "en" за замовчуванням.

// const settings = { theme: "dark" };

// const { theme, lang = "en" } = settings;

// console.log(theme, lang);

// ? Отримай city і country прямо в окремі змінні.

// const profile = {
//   user: {
//     id: 1,
//     info: { city: "Lviv", country: "Ukraine" },
//   },
// };

// const {
//   user: {
//     info: { city },
//   },
// } = profile;

// console.log(city);

// const {
//   user: {
//     info: { country },
//   },
// } = profile;

// console.log(country);

// ? Отримай другий елемент масиву items

// const response = {
//   data: {
//     items: ["item1", "item2", "item3", "item4", "item5", "item6", "item7"],
//   },
// };

// const {
//   data: {
//     items: [, , , ...rest],
//   },
// } = response;

// console.log(rest);

// ? Отримай title другого об’єкта.

// const items = [
//   { id: 1, title: "Book" },
//   { id: 2, title: "Pen" },
// ];

// const [, { title }] = items;

// console.log(title);

//? Отримай перший елемент у змінну first, а решту елементів — у масив rest.
// const arr = [10, 20, 30, 40];

// const [first] = arr;

// const [, ...rest] = arr;

// console.log(first);
// console.log(rest);

//! 🟢 Рівень 1: Базові операціїЗавдання 1: Зміна тексту
//! Створи кнопку, при натисканні на яку текст параграфа змінюється на "Текст змінено!".

// const btn = document.querySelector("#changeBtn");

// const txt = document.querySelector("#text");

// window.addEventListener("click", (event) => {
//   if (event.target.tagName === "BUTTON") {
//     txt.textContent = "Текст змінено";
//     txt.style.background = "yellow";
//     txt.style.color = "blue";
//     txt.style.fontSize = "20px";
//   }
// });

//* var2
// btn.addEventListener("click", () => {
//   txt.textContent = "Текст змінено";
//   txt.style.background = "yellow";
//   txt.style.color = "blue";
//   txt.style.fontSize = "20px";
// });

//! Завдання 3: Додавання класів
//! Створи кнопку, яка додає/видаляє клас active до елемента.

// const box = document.querySelector("#toggleBox");
// const spa = document.querySelector("#sp");

// window.addEventListener("click", (event) => {
//   if (event.target.tagName === "BUTTON") {
//     box.classList.toggle("active");

//     spa.textContent = "Privit";
//   }
// });

//! Завдання 4: Лічильник
//! Зроби простий лічильник з кнопками "+" і "-".

// const plus = document.querySelector("#increaseBtn");
// const minus = document.querySelector("#decreaseBtn");

// const monitor = document.querySelector("#counter");

// let counter = 0;

// plus.addEventListener("click", () => {
//   monitor.textContent = ++counter;
// });

// minus.addEventListener("click", () => {
//   monitor.textContent = --counter;
// });

//* var 2
// window.addEventListener("click", (event) => {
//   if (event.target.id === "increaseBtn") {
//     monitor.textContent = ++counter;
//   } else if (event.target.id === "decreaseBtn") {
//     monitor.textContent = --counter;
//   } else if (event.target.id === "reset") {
//     counter = 0;

//     monitor.textContent = counter;
//   }
// });

//!  Валідація форми
//! Створи форму з полем для імені. При відправці перевір, чи заповнене поле.

// const valid = document.querySelector("#nameForm");

// const validInp = document.querySelector("#nameInput");

// const textError = document.querySelector("#errorMsg");

// valid.addEventListener("submit", (event) => {
//   event.preventDefault(); // зупиняємо

//   if (validInp.value.trim().length <= 5) {
//     textError.textContent = "Напиши нормальне повідомлення";
//   } else {
//     textError.textContent = "";
//     alert("Форма успішно відправлена!");
//     valid.reset();
//   }
// });

//! Завдання 6: Список справ (To-Do List)
//! Зроби простий список справ.

// const item1 = document.querySelector("#todoInput");

// const item2 = document.querySelector("#addBtn");

// const item3 = document.querySelector("#todoList");

// const newUl = document.createElement("ul");
// item3.append(newUl);

// item2.addEventListener("click", () => {
//   const newLi = document.createElement("li");
//   newLi.textContent = item1.value;
//   newUl.append(newLi);

//   item1.value = "";

//   const newBtn = document.createElement("button");
//   newBtn.textContent = "X";
//   newBtn.classList.add("close-btn");
//   newLi.append(newBtn);

//   newBtn.addEventListener("click", () => {
//     newLi.remove();
//   });
// });

//! Лічильник символів
//! Порахуй кількість символів у тексті.

// const item1 = document.querySelector("#textArea");

// const item2 = document.querySelector("#charCount");

// const item3 = document.querySelector("#wordCount");

// item1.addEventListener("input", (event) => {
//   item2.textContent = event.target.value.length;
// });

// item1.addEventListener("input", (event) => {
//   item3.textContent = event.target.value.split(" ").length;
// });

//! Завдання 4: Генератор HTML списку
// Створи список з масиву даних.

// Використай innerHTML для додавання HTML розмітки
// Створи красиві елементи списку

// const item1 = document.querySelector("#itemInput");

// const item2 = document.querySelector("#addBtn");

// const item3 = document.querySelector("#clearBtn");

// const item4 = document.querySelector("#list");

// //* var1
// const newUl = document.createElement("ul");
// item4.append(newUl);

// item2.addEventListener("click", (event) => {
//   // Перевірка
//   if (item1.value.length >= 5) {
//     newUl.insertAdjacentHTML("beforeend", `<li>${item1.value}</li>`);
//     item1.value = "";
//   } else {
//     alert(`Закоротко`);
//   }
// });

// item3.addEventListener("click", () => {
//   newUl.remove();
// });

//! element.style
// Завдання 5: Динамічний слайдер розміру тексту
// Зміни розмір тексту за допомогою слайдера.

// const item1 = document.querySelector("#demoText");

// const item2 = document.querySelector("#fontSize");
// const item22 = document.querySelector("#fontSizeValue");

// const item3 = document.querySelector("#textColor");

// const item4 = document.querySelector("#bgColor");

// const item5 = document.querySelector("#padding");
// const item55 = document.querySelector("#paddingValue");

// item2.addEventListener("input", (event) => {
//   item1.style.fontSize = event.target.value + "px";
//   item22.textContent = event.target.value + "px";
// });

// item3.addEventListener("change", (event) => {
//   item1.style.color = event.target.value;
// });

// item4.addEventListener("change", (event) => {
//   item1.style.background = event.target.value;
// });

// item5.addEventListener("input", (event) => {
//   item1.style.padding = event.target.value + "px";
//   item55.textContent = event.target.value + "px";
// });

// !
// const colors = ["червоний", "синій", "зелений", "жовтий"];
// // Витягни перший і другий колір у змінні first та second

// const [first, second] = colors;
// console.log(first);
// console.log(second);

// !
// const fruits = ["яблуко", "банан", "апельсин", "груша", "ківі"];
// // Витягни перший фрукт окремо, а решту в окремий масив

// const [first] = fruits;
// console.log("🚀 ~ first:", first);

// const [, ...rest] = fruits;
// console.log("🚀 ~ rest:", rest);

// !
// let a = 5;
// let b = 10;
// // Поміняй значення місцями використовуючи деструктуризацію

// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// !
// const nested = [1, [2, 3], 4];
// // Витягни всі числа в окремі змінні: one, two, three, four

// // const [one] = nested;
// // console.log("🚀 ~ one:", one);

// // const [, [two]] = nested;
// // console.log("🚀 ~ two:", two);

// // const [, [, three]] = nested;
// // console.log("🚀 ~ three:", three);

// // const [, [,], four] = nested;
// // console.log("🚀 ~ four:", four);

// // *var2
// const [one, [two, three], four] = nested;

// console.log(one); // 1
// console.log(two); // 2
// console.log(three); // 3
// console.log(four); // 4

// !
// Напиши функцію, яка приймає масив координат [x, y]
// і повертає рядок "X: {x}, Y: {y}"

// function foo([x, y]) {
//   return `X: ${x}, Y: ${y}`;
// }

// const par = [5, 7];

// console.log(foo(par));

// !
// const csvLine = "Іван,Петренко,25,Київ";
// Розпарси рядок у змінні: firstName, lastName, age, city

//* var1
// const firstName = csvLine.slice(0, 4);
// console.log("🚀 ~ firstName:", firstName);

//* var2
// const firstName = csvLine.split(",")[0];
// console.log("🚀 ~ firstName:", firstName);

// const firstName = csvLine.split(",")[1];
// console.log("🚀 ~ firstName:", firstName);

//* var3
// const peredelka = csvLine.split(",");
// // console.log("🚀 ~ firstName:", firstName);

// const [firstName, lastName, age, city] = peredelka;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(city);

// !
// const queue = ["перший", "другий", "третій", "четвертий", "п'ятий"];
// // Витягни перший, другий і останній елемент

// const [first, second, , , five] = queue;

// console.log(first);
// console.log(second);
// console.log(five);

// !
// const pairs = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

// for (const [a, b] of pairs) {
//   console.log(a + b);
// }

// !
// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// // Витягни центральний елемент (5) в змінну center

// const [[, ,], [, center], [, ,]] = matrix;

// console.log(center);

// const sum = center + 5;
// console.log("🚀 ~ sum:", sum);

// !
// const scores = [95, 87, 92, 78, 88, 91];
// // Витягни перші два та останні два результати, середні проігноруй

// const [first, second, , , ...rest] = scores;

// console.log("🚀 ~ first:", first);
// console.log("🚀 ~ second:", second);
// console.log("🚀 ~ rest:", rest);

// const separ = rest.join(",");
// console.log("🚀 ~ separ:", separ);

// !
// const randomNumbers = [Math.random(), Math.random(), Math.random()];
// // Витягни перше число як 'random', решту як 'others'

// const [random, ...others] = randomNumbers;
// console.log("🚀 ~ random:", random);
// console.log("🚀 ~ others:", others);

// !
// const fullName = "Тарас Григорович Шевченко".split(" ");
// // Витягни ім'я, по батькові та прізвище в окремі змінні

// const [name, fathername, surname] = fullName;
// console.log("🚀 ~ name:", name);
// console.log("🚀 ~ fathername:", fathername);
// console.log("🚀 ~ surname:", surname);

// !
// const dateString = "2024-03-15";
// const dateParts = dateString.split("-");
// // Витягни рік, місяць і день в окремі змінні

// const [year, mounth, date] = dateParts;
// console.log("🚀 ~ date:", date);
// console.log("🚀 ~ mounth:", mounth);
// console.log("🚀 ~ year:", year);

// ************************************************************************************* !
// Задача 1: Магазин товарів
// Створи масив об'єктів products з товарами (назва, ціна, категорія). Напиши функції:

// filterByPrice(min, max) - фільтрує товари за ціною
// getTotalPrice() - повертає загальну вартість усіх товарів
// groupByCategory() - групує товари за категоріями (повертає об'єкт)

// const products = [
//   { name: "Ноутбук", price: 25000, category: "електроніка" },
//   { name: "Миша", price: 500, category: "електроніка" },
//   { name: "Книга", price: 200, category: "книги" },
// ];

// const minMax = products.toSorted((a, b) => {
//   return a.price - b.price;
// });
// console.log("🚀 ~ minMax:", minMax);

// const sum = products.reduce((accu, el) => {
//   return accu + el.price;
// }, 0);
// console.log(`Загальна сума товарів - ${sum}`);

// const cat = products.reduce((accu, el) => {
//   if (!accu[el.category]) {
//     accu[el.category] = [];
//     accu[el.category].push(el);
//   }
//   return accu;
// }, {});
// console.log("🚀 ~ cat:", cat);

//! При кліку на кнопку змініть текст заголовка на "Новий заголовок".

// const btn = document.querySelector("#changeBtn");

// const title = document.querySelector("#title");

// btn.addEventListener("click", () => {
//   title.textContent = "Новий заголовок";
//   title.style.color = "green";
// });

//! Створіть три кнопки, які змінюють стиль тексту.

// const text = document.querySelector("#text");

// const btnRed = document.querySelector("#redBtn");
// const btnBig = document.querySelector("#bigBtn");
// const btnBolt = document.querySelector("#boldBtn");

// btnRed.addEventListener("click", () => {
//   text.style.color = "red";
// });

// btnBig.addEventListener("click", () => {
//   text.style.fontSize = "20px";
// });

// btnBolt.addEventListener("click", () => {
//   text.style.fontWeight = "700";
// });

//! Додайте HTML-код всередину контейнера при кліку на кнопку.

// const box = document.querySelector("#container");

// const btn = document.querySelector("#addBtn");

// btn.addEventListener("click", () => {
//   box.insertAdjacentHTML("beforeend", `<p>Привіт ! =)</p>`);
// });

//! Перемикач теми
//! Перемикайте між світлою та темною темою.

// const text = document.querySelector("#container p");

// const btn = document.querySelector("#themeBtn");

// btn.addEventListener("click", () => {
//   text.classList.toggle("dark");
// });

//! Активний пункт меню
//! При кліку на пункт меню зробіть його активним
//! (інші - неактивні).

// const menuList = document.querySelector("#menu");

// const menuListItem = document.querySelectorAll(".menu-item");

// window.addEventListener("click", (event) => {
//   menuListItem.forEach((el) => {
//     el.classList.remove("active");

//     if (el === event.target) {
//       el.classList.add("active");
//     }
//   });
// });

//! Показати/Сховати
//! Створіть кнопку, яка показує/ховає текст.

// const btn = document.querySelector("#toggleBtn");

// const text = document.querySelector("#content");

// btn.addEventListener("click", () => {
//   text.classList.toggle("hidden");
// });

//! Додавання елементів у список
//! Додайте новий пункт списку при кліку на кнопку.
// Створіть новий <li> з текстом "Новий елемент"

// const list = document.querySelector("#list");

// const btn = document.querySelector("#addBtn");

// btn.addEventListener("click", () => {
//* var1
// const newLi = document.createElement("li");
// newLi.textContent = "Новий елемент";
// list.append(newLi);

//* var2
// list.insertAdjacentHTML("beforeend", `<li>Новий елемент</li>`);
// });

//!************************************* Видалення елементів
//! Додайте кнопку "Видалити" до кожного елемента списку.

// const list = document.querySelector("#list li");

// const btn = document.querySelectorAll(".deleteBtn");

// window.addEventListener("click", (event) => {
//   if (event.target.classList.contains("deleteBtn")) {
//     const li = event.target.closest("li");
//     li.remove();
//   }
// });

//! Створіть простий TODO список з можливістю додавання
//! та видалення завдань.

// const input = document.querySelector("#todoInput");

// const list = document.querySelector("#todoList");

// const btn = document.querySelector("#addTodoBtn");

// const newUl = document.createElement("ul");
// list.append(newUl);

// btn.addEventListener("click", () => {
//   const newLi = document.createElement("li");
//   newLi.textContent = input.value;
//   newUl.append(newLi);

//   input.value = "";

//   window.addEventListener("click", (event) => {
//     if (event.target === newLi) {
//       newLi.remove();
//     }
//   });
// });

// ! Задача 10: Лічильник натискань
// Підрахуйте кількість натискань на кнопку.

// const btn = document.querySelector("#clickBtn");

// const txt = document.querySelector("#counter");

// let count = 0;

// btn.addEventListener("click", (event) => {
//   txt.textContent = ++count;
// });

//! Обробка submit форми
//! Виведіть введені дані при відправці форми
//! (заборонити перезавантаження сторінки).

// const formEl = document.querySelector("#myForm");

// const nameEl = document.querySelector("#nameInput");
// const emailEl = document.querySelector("#emailInput");

// formEl.addEventListener("submit", (event) => {
//   event.preventDefault();

//   console.log(nameEl.value);
//   console.log(emailEl.value);

//   nameEl.value = "";
//   emailEl.value = "";
// });

//! Відображайте кількість символів у реальному часі.

// const textEl = document.querySelector("#textArea");

// const countEl = document.querySelector("#charCount");

// textEl.addEventListener("input", (event) => {
//   countEl.textContent = event.target.value.length;
// });

//! Focus і Blur
//! Змініть стиль поля при фокусі та при втраті фокусу.
// const inputEl = document.querySelector("#myInput");

// inputEl.addEventListener("focus", () => {
//   inputEl.classList.add("focused");
// });

// inputEl.addEventListener("blur", (event) => {
//   inputEl.classList.remove("focused");
// });

//! Клавіша Enter
//! При натисканні Enter в полі введення додайте текст до списку.

// const inputEl = document.querySelector("#itemInput");

// const listEl = document.querySelector("#itemList");

// inputEl.addEventListener("keydown", (event) => {
//   if (event.key === "Enter") {
//     const newLi = document.createElement("li");

//     listEl.append(newLi);
//     newLi.textContent = event.target.value;
//     inputEl.value = "";
//   }
// });

// window.addEventListener("click", (event) => {
//   const li = event.target.closest("li");
//   li.remove();
// });

//! Випадаюче меню (change)
//! Виведіть обраний варіант при зміні select.

// const selectEl = document.querySelector("#citySelect");

// selectEl.addEventListener("change", (event) => {
//   console.log(event.target.value);
// });

//! Калькулятор
//! Створіть простий калькулятор.

// const num1 = document.querySelector("#num1");
// const num2 = document.querySelector("#num2");

// const operationEl = document.querySelector("#operation");

// const btnGo = document.querySelector("#calculateBtn");

// const resEL = document.querySelector("#result");

// btnGo.addEventListener("click", () => {

//   const a = Number(num1.value);
//   const b = Number(num2.value);
//   let result;

// switch (operationEl.value) {
//     case "+":
//       result = a + b;
//       break;
//     case "-":
//       result = a - b;
//       break;
//     case "*":
//       result = a * b;
//       break;
//     case "/":
//       result = b !== 0 ? a / b : "На 0 ділити не можна";
//       break;
//   }

//   resEL.textContent = result;
// });

//! Фільтр списку
//! Відфільтруйте список при введенні тексту.

// const inputEl = document.querySelector("#searchInput");

// const listFruit = document.querySelectorAll("#fruitList li");

// inputEl.addEventListener("input", (event) => {
//   listFruit.forEach((el) => {
//     if (
//       el.textContent.toLowerCase().includes(event.target.value.toLowerCase())
//     ) {
//       el.style.color = "green";
//     } else {
//       el.style.display = "none";
//     }
//   });
// });

// window.addEventListener("click", (event) => {
//   if (!event.target.closest("#searchInput")) {
//     inputEl.value = "";

//     listFruit.forEach((el) => (el.style.display = ""));
//   }
// });

//! Модальне вікно
//! Створіть модальне вікно, яке відкривається та закривається.

// const btnOpen = document.querySelector("#openModal");

// const btnClose = document.querySelector(".close");
// const modalContent = document.querySelector(".modal-content");

// const modalWindow = document.querySelector("#modal");

// btnOpen.addEventListener("click", () => {
//   modalWindow.classList.remove("modal");
// });

// btnClose.addEventListener("click", () => {
//   modalWindow.classList.add("modal");
// });

//! Лічильник

// const countEl = document.querySelector("#count");

// const btnEl = document.querySelector("#btn");

// let count = 0;

// btnEl.addEventListener("click", () => {
//   countEl.textContent = ++count;
// });

//! Список справ (To-Do)

// const inputEl = document.querySelector("#taskInput");

// const btnEl = document.querySelector("#addBtn");

// const listEl = document.querySelector("#taskList");

// btnEl.addEventListener("click", () => {
//   if (inputEl.value.length >= 3) {
//     const newLi = document.createElement("li");
//     newLi.textContent = inputEl.value;
//     listEl.append(newLi);
//   }
//   inputEl.value = "";
// });

// window.addEventListener("click", (event) => {
//   if (event.target.tagName === "LI") {
//     event.target.remove();
//   }
// });

// inputEl.addEventListener("keydown", (event) => {
//   if (event.key === "Enter") {
//     const newLi = document.createElement("li");
//     newLi.textContent = inputEl.value;
//     listEl.append(newLi);
//     inputEl.value = "";
//   }
// });

//! Показати/Сховати текст
//! Створи кнопку, яка показує або ховає текст.

// const btnEl = document.querySelector("#toggleBtn");

// const textEl = document.querySelector("#text");

// btnEl.addEventListener("click", () => {
//   textEl.style.display = "block";
// });

//! Перемикач теми (світла/темна)

// const btnEl = document.querySelector("#themeBtn");

// const boxEl = document.querySelector("#content");

// const body = document.body;

// btnEl.addEventListener("mousemove", () => {
//   // boxEl.style.background = "#292929";
//   // boxEl.style.color = "#fff";
//   // btnEl.style.background = "#292929";
//   // btnEl.style.color = "#fff";

//   body.style.background = "#292929";
//   body.style.color = "#fff";
// });

//! Слайдер зображень
//! Створи простий слайдер для перегляду зображень.

// const image = [
//   "https://via.placeholder.com/400x300/FF5733/fff?text=Slide+1",
//   "https://via.placeholder.com/400x300/33C1FF/fff?text=Slide+2",
//   "https://via.placeholder.com/400x300/75FF33/fff?text=Slide+3",
// ];

// let currentIndex = 0;

// const slideImg = document.querySelector("#slideImg");
// const slideNumEl = document.querySelector("#slideNum");
// const nextBtn = document.querySelector("#nextBtn");
// const prevBtn = document.querySelector("#prevBtn");

// function updateSlide() {
//   slideImg.src = image[currentIndex];
//   slideNumEl.textContent = currentIndex + 1;
// }

// nextBtn.addEventListener("click", () => {
//   currentIndex++;
//   if (currentIndex >= image.length) {
//     currentIndex = 0;
//   }
//   updateSlide();
// });

// prevBtn.addEventListener("click", () => {
//   currentIndex--;
//   if (currentIndex < 0) {
//     currentIndex = image.length - 1;
//   }
//   updateSlide();
// });

// ! Destryktyruzacia

// const user = { name: "Dmytro", lastname: "Serhiienko" };

// const nameEl = document.querySelector("#firstName");
// const lastEl = document.querySelector("#lastName");

// const btnEl = document.querySelector("#btn1");

// btnEl.addEventListener("click", () => {
//   const { name, lastname } = user;

//   nameEl.textContent = name;
//   lastEl.textContent = lastname;
// });

//! Колір та розмір
//! Отримай колір та розмір з об'єкта.

// const colors = { color: "green", size: "20px" };

// const colorEl = document.querySelector("#color");
// const sizeEl = document.querySelector("#size");

// const btnEl = document.querySelector("#btn2");

// btnEl.addEventListener("click", () => {
//   const { color, size } = colors;

//   colorEl.textContent = color;
//   sizeEl.textContent = size;
// });

//! Три числа
//! Виведи три числа з масиву.

// const numbers = [3, 5, 9];

// const num1El = document.querySelector("#n1");
// const num2El = document.querySelector("#n2");
// const num3El = document.querySelector("#n3");

// const btnEl = document.querySelector("#btn3");

// btnEl.addEventListener("click", () => {
//   const [first, second, three] = numbers;

//   num1El.textContent = first;
//   num2El.textContent = second;
//   num3El.textContent = three;
// });

//! Ім'я та вік
//! Витягни ім'я та вік з об'єкта людини.

// const person = { name: "Dmytro", personal: { age: 33 } };

// const nameEl = document.querySelector("#name");
// const ageEl = document.querySelector("#age");

// const btnEl = document.querySelector("#btn4");

// btnEl.addEventListener("click", () => {
//   const {
//     name,
//     personal: { age },
//   } = person;

//   nameEl.textContent = name;
//   ageEl.textContent = age;
// });

//! Перше та друге місце
//! Виведи перші два елементи з масиву переможців.

// const medal = { gold: "Dmytro", silver: "Lana" };

// const jsonEl = JSON.stringify(medal);
// console.log("🚀 ~ jsonEl:", jsonEl);

// const goldEl = document.querySelector("#gold");
// const silverEl = document.querySelector("#silver");

// const btnEl = document.querySelector("#btn5");

// btnEl.addEventListener("click", () => {
//   const { gold, silver } = medal;

//   goldEl.textContent = gold;
//   silverEl.textContent = silver;
// });

//! Решта масиву (rest)
//! Виведи перший елемент окремо, а решту - разом.

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const mainEl = document.querySelector("#main");
// const othersEl = document.querySelector("#others");

// const btnEl = document.querySelector("#btn10");

// btnEl.addEventListener("click", () => {
//   const [first, , , , ...rest] = num;

//   mainEl.textContent = first;
//   othersEl.textContent = rest;
// });

// Задача 1: Створення профілю користувача
// Створи JSON-об'єкт, який описує профіль користувача з такими полями:

// ім'я
// вік
// email
// чи є студентом (boolean)
// список хобі (масив)

// !  JSON
// const user = {
//   name: "Dmytro",
//   age: 33,
//   email: "dima@gmail.com",
//   ifStudent: true,
//   hobby: "tecnologies",
// };

// const toJson = JSON.stringify(user);
// console.log("🚀 ~ toJson:", toJson);

// const fromJson = JSON.parse(toJson);
// console.log("🚀 ~ fromJson:", fromJson);
// console.log(fromJson.name);

//! Завдання 1 — Просте серіалізування

// Створи об’єкт book з полями:
// 	•	title (рядок)
// 	•	author (рядок)
// 	•	year (число)
// 	•	isAvailable (булеве значення)

// Потім:
// 	1.	Перетвори його в JSON рядок.
// 	2.	Виведи цей рядок у консоль.

// const book = {
//   title: "My book",
//   author: "Dima",
//   year: 2025,
//   isAvailable: true,
// };

// const toJson = JSON.stringify(book);
// console.log("🚀 ~ toJson:", toJson);

// const toJs = JSON.parse(toJson);
// console.log("🚀 ~ toJs:", toJs);

//! Використай JSON рядок:

// const jsonInfo = '{"name":"Anna","age":25,"city":"Kyiv"}';

// const toJs = JSON.parse(jsonInfo);
// console.log("🚀 ~ toJs:", toJs);

// console.log(toJs.name, toJs.city);

//! Завдання 3 — Масив об’єктів

// Створи масив students, де буде 3 об’єкти студентів, кожен з полями:
// 	•	name
// 	•	age
// 	•	isEnrolled

// 	1.	Перетвори масив у JSON рядок.
// 	2.	Потім розпарсь цей рядок назад в масив об’єктів.
// 	3.	Виведи в консоль імена всіх студентів, які навчаються (isEnrolled === true).

// const students = [
//   { name: "Dmytro", age: 33, isEnrolled: true },
//   { name: "Lana", age: 30, isEnrolled: true },
//   { name: "Bob", age: 31, isEnrolled: true },
// ];

// const toJson = JSON.stringify(students);
// console.log("🚀 ~ toJson:", toJson);

// const toJs = JSON.parse(toJson);
// console.log("🚀 ~ toJs:", toJs);

// console.log(toJs, "isEnrolled: true");

// ! Завдання 4 — Форматований JSON

// Створи об’єкт movie з полями:
// 	•	title
// 	•	director
// 	•	year
// 	•	genres (масив жанрів)

// 	1.	Перетвори його в гарно відформатований JSON з відступом у 2 пробіли.
// 	2.	Виведи результат у консоль.

// const movie = {
//   title: "The Last",
//   director: "Bob",
//   year: 2022,
//   genres: ["fantastic", "horror"],
// };

// const toJson = JSON.stringify(movie, null, 2);
// console.log("🚀 ~ toJson:", toJson);

//! Парсинг і доступ до даних
// 1.	Перетвори JSON у об’єкт
// 2.	Виведи в консоль:
// •	назву продукту
// •	чи є в наявності (inStock)

// const jsonStr = '{"product":"Laptop","price":1500,"inStock":false}';

// const toJs = JSON.parse(jsonStr);
// console.log(toJs.product, toJs.inStock);

//! Завдання 2 — Масив у JSON

// Створи масив із 4 чисел і:
// 	1.	Перетвори його в JSON рядок
// 	2.	Виведи в консоль тип результату (typeof ...)

// const numbers = [1, 2, 3, 4];

// const toJson = JSON.stringify(numbers);
// console.log(typeof toJson);

//! Завдання 3 — Фільтрація після парсингу

// const usersJson =
//   '[{"name":"Mia","age":20},{"name":"Max","age":30},{"name":"Liza","age":25}]';

// // 1.	Розпарсь його у масив об’єктів
// // 2.	Виведи в консоль лише тих, хто старше 21 року

// const toJs = JSON.parse(usersJson).filter((el) => el.age > 21);
// console.log("🚀 ~ toJs:", toJs);

//!  Завдання 4 — Складний об’єкт

// Створи об’єкт company:
// 	•	name
// 	•	employees — масив об’єктів з name і department
// 	•	isActive — булеве значення

// 	1.	Перетвори в JSON
// 	2.	Виведи у консоль
// 	3.	Потім розпарсь назад і виведи список імен працівників

// const company = {
//   name: "Pipper",
//   employees: [
//     { name: "Bob", department: "IT" },
//     { name: "Rebeca", department: "Sales" },
//     { name: "Mango", department: "Promotion" },
//   ],
//   isActive: true,
// };

// const toJson = JSON.stringify(company, null, 2);
// console.log("🚀 ~ toJson:", toJson);

// const toJs = JSON.parse(toJson);

// const {
//   employees: [{ name: n1 }, { name: n2 }, { name: n3 }],
// } = toJs;
// console.log(n1, n2, n3);

//! Завдання 5 — Красиве форматування

// // Створи об’єкт recipe:
// // 	•	назва
// // 	•	час приготування
// // 	•	інгредієнти — масив
// // 	•	вид (наприклад: десерт, основна страва)

// // Перетвори в JSON із відступами 4 пробіли
// // і виведи результат у консоль.

// const recipe = {
//   name: "Cake",
//   time: 3,
//   ingridients: ["flower", "sugar", "milk", "almonds"],
//   tipe: "desert",
// };

// const toJson = JSON.stringify(recipe, null, 4);
// console.log("🚀 ~ toJson:", toJson);

//! Практичні задачі з try…catch
// Спробуй розпарсити його через try…catch.
// У разі помилки — виведи "Error parsing JSON".

// const data = '{"title":"Avatar","rating":9}';

// try {
//   const toJs = JSON.parse(data);
// } catch (error) {
//   console.log("Error parsing JSON");
//   console.log(error.name);
//   console.log(error.message);
// }

//! Завдання 3

// Створи функцію safeParse(jsonText):
// 	•	всередині використовуй try…catch
// 	•	якщо JSON правильний → повертає об’єкт
// 	•	якщо ні → повертає null

// function safeParse(jsonText) {
//   try {
//     return JSON.parse(jsonText);
//   } catch (error) {
//     return null;
//   }
// }

// console.log(safeParse('{"a":1}')); // ✔ об'єкт
// console.log(safeParse("{a:1}")); // ❌ null

// Завдання 4 — Комбо
// 	1.	Створи об’єкт з мінімум 4 полями
// 	2.	Перетвори у JSON
// 	3.	Навмисно поламай JSON (видали лапки)
// 	4.	Пропусти через JSON.parse() з try…catch
// 	5.	В catch виведи щось типу:
// ("⚠ JSON is not valid!");

// const team = [
//   { name: "Bob", age: 22 },
//   { name: "Tesla", age: 33 },
//   { name: "Rebeca", age: 24 },
//   { name: "Latina", age: 26 },
// ];

// const toJson = JSON.stringify(team, null, 1);
// // console.log("🚀 ~ toJson:", toJson);

// try {
//   const toJs = JSON.parse(toJson);
// } catch (error) {
//   console.log("⚠ JSON is not valid!");
//   console.log(error.name);
// }

//! Перевірка замовлень

// •	Розпарсь його через JSON.parse у try…catch.
// •	Якщо JSON некоректний — виведи повідомлення про помилку.
// •	Перевір кожен об’єкт, щоб price був числом.
// •	Виведи у консоль тільки замовлення з валідними цінами.

// const ordersJson = `
// [
//   { "id": 1, "product": "Laptop", "price": 1200 },
//   { "id": 2, "product": "Phone", "price": "не число" },
//   { "id": 3, "product": "Tablet", "price": 400 }
// ]
// `;

// try {
//   const toJs = JSON.parse(ordersJson);
// } catch (error) {
//   console.log(`error`);
//   console.log(error.name);
// }

// !

// •	Розпарсь JSON у try…catch.
// •	Якщо рядок некоректний — виведи помилку.
// •	Виведи у консоль тільки книги, де year — число.

// const booksJson = `
// [
//   { "title": "Harry Potter", "year": 1997 },
//   { "title": "1984", "year": "рік невідомий" },
//   { "title": "Clean Code, "year": 2008 }
// ]
// `;

// try {
//   const toJs = JSON.parse(booksJson);
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
// }

//! Задача 1: Зберігання повідомлення
// 	1.	Створи змінну message з будь-яким текстом.
// 	2.	Запиши її у localStorage під ключем "userMessage".
// 	3.	Потім отримай це повідомлення з localStorage і виведи в консоль.
// 	4.	Очисти значення з localStorage.

// const message = "text";

// localStorage.setItem("userMessage", message);
// console.log("🚀 ~ message:", message);

// const balck = localStorage.getItem("userMessage");
// console.log("🚀 ~ balck:", balck);

//! Задача 1: Збереження і відображення імен
// 	1.	Створи змінну name з будь-яким ім’ям.
// 	2.	Збережи її у localStorage під ключем "userName".
// 	3.	Потім отримай ім’я з localStorage і виведи у консоль.

// const nameUser = "Dmytro";

// // Зберігаємо під ключем "name"
// localStorage.setItem("name", nameUser);

// // Отримуємо під тим самим ключем
// const resultName = localStorage.getItem("name");

// console.log("🚀 ~ resultName:", resultName); // "Dmytro"

//! Задача 2: Збереження числа
// 	1.	Створи змінну age з будь-яким числом.
// 	2.	Збережи її у localStorage під ключем "userAge".
// 	3.	Потім отримай число з localStorage, перетвори його у число (якщо потрібно) і виведи у консоль.

// const age = 33;

// localStorage.setItem("ageUser", age);

// const resAge = localStorage.getItem("ageUser");
// console.log("🚀 ~ resAge:", resAge);

// ! Задача 3: Очистка ключа
// 	1.	Збережи будь-яке значення у localStorage під ключем "test".
// 	2.	Потім видали цей ключ з localStorage.
// 	3.	Спробуй отримати значення цього ключа і виведи результат у консоль (має бути null).

// localStorage.setItem("brand", "apple");

// const res = localStorage.getItem("brand");
// console.log("🚀 ~ res:", res);

// const rem = localStorage.removeItem("brand");
// console.log("🚀 ~ rem:", rem);

//! Пошук DOM-елементів
//! Задача 1.1: Підрахунок параграфів

// const counterEl = document.querySelectorAll("#content p ");
// console.log("🚀 ~ counterEl:", counterEl);

// const counterEl = [...document.querySelectorAll("#content p ")];
// console.log("🚀 ~ counterEl:", counterEl);

//! Задача 2.1: Зміна заголовка

// const titleEl = document.querySelector("#title");

// const btnEl = document.querySelector("#changeBtn");

// btnEl.addEventListener("click", () => {
//   titleEl.textContent = "Новий заголовок";
//   titleEl.style.color = "yellow";
//   titleEl.style.background = "blue";
// });

// titleEl.addEventListener("mouseover", () => {
//   titleEl.textContent = "Новий заголовок";
//   titleEl.style.color = "yellow";
//   titleEl.style.background = "blue";
// });

// titleEl.addEventListener("mouseout", () => {
//   titleEl.textContent = "Змінити заголовок";
//   titleEl.style.color = "";
//   titleEl.style.background = "";
// });

// !   Зміна стилю

// const textEl = document.querySelector("#greeting");

// const btnEl = document.querySelector("#colorBtn");

// btnEl.addEventListener("click", () => {
//   textEl.style.color = "red";
// });

//! CSS класи на DOM-елементах

// const checkerEl = document.querySelector("#sidebar");

// const res = checkerEl.classList.contains("hidden");
// console.log("🚀 ~ res:", res);

// !Додавання класу до всіх елементів

// const ckeckEl = document.querySelectorAll("nav a");

// ckeckEl.forEach((el) => {
//   return el.classList.add("dima");
// });
// console.log("🚀 ~ ckeckEl:", ckeckEl);

// ! Перемикач темної теми

// const btnEl = document.querySelector("#themeToggle");

// const textEl = document.querySelector(".content p");
// console.log("🚀 ~ textEl:", textEl);

// btnEl.addEventListener("click", () => {
//   document.body.classList.toggle("dark-mode");
// });

//! Заміна класу
// Заміни "old-style" на "new-style" для всіх .card

// const divEl = document.querySelectorAll(".card");

// divEl.forEach((el) => {
//   el.classList.remove("old-style");
//   el.classList.add("new-style");
// });

// console.log("🚀 ~ divEl:", divEl);

//! Створи <div> з текстом "Привіт, світ!"
// Додай його в кінець #container

// const divEl = document.querySelector("#container");

// const btnEl = document.querySelector("#btn");

// const newUl = document.createElement("ul");
// divEl.append(newUl);

// btnEl.addEventListener("click", () => {
//   const newLi = document.createElement("li");
//   newLi.classList.add("my-li");
//   newLi.textContent = "my new li";
//   newUl.append(newLi);
// });

// ! Задача 4.2: Створення списку

// Створи 3 нових <li> з текстом "Елемент 1", "Елемент 2", "Елемент 3"
// Додай їх на початок списку

// const ulEl = document.querySelector("#list");

// const btnEl = document.querySelector("#addItems");

// btnEl.addEventListener("click", () => {
//   // const newLi = document.createElement("li");
//   // newLi.classList.add("lishechka");
//   // newLi.textContent = "Dima";
//   // ulEl.append(newLi);

//   ulEl.insertAdjacentHTML(
//     "afterbegin",
//     `   <li>Елемент 1</li>
//         <li>Елемент 2</li>
//         <li>Елемент 3</li>
// `
//   );
// });

// !При події input виводь поточне значення в #output

// const inputEl = document.querySelector("#textInput");

// const spanEl = document.querySelector("#output");

// inputEl.addEventListener("input", (event) => {
//   spanEl.textContent = event.target.value;
// });

//! Обробка форми
// Додай обробник submit
// Запобіжи стандартній поведінці
// Виведи дані форми в консоль

// const formEl = document.querySelector("#myForm");
// const inputName = document.querySelector("#username");
// const inputEmail = document.querySelector("#useremail");

// formEl.addEventListener("submit", (event) => {
//   event.preventDefault();

//   console.log(inputName.value, inputEmail.value);
// });

// ! 📝 Задача 1: Збереження об’єкта у JSON
// 	1.	Користувач вводить через prompt ім’я та вік.
// 	2.	Створи об’єкт і перетвори його в JSON.
// 	3.	Збережи цей JSON у localStorage під ключем "userData".
// 	4.	Після збереження — дістань цей JSON зі сховища, розпарсь його і виведи об’єкт у консоль.

// 📌 Використовуй try…catch при парсингу JSON.

// const name = prompt("Введи ім'я:");
// const age = prompt("Введи вік:");

// const dataUser = {
//   name,
//   age: Number(age),
// };
// const toJson = JSON.stringify(dataUser);
// localStorage.setItem("userData", toJson);

// try {
//   const toJs = JSON.parse(toJson);
//   console.log(toJs);
// } catch (error) {
//   console.log(error.name);
// }

//! 🔥 Рівень 1 — Найлегші задачі (без localStorage)

// 🟡 Завдання 1 — Один об’єкт
// 	1.	Запитай у користувача ім’я
// 	2.	Створи об’єкт із цим ім’ям
// 	3.	Виведи об’єкт у консоль

// 🧠 Підказка:
// 	•	масив []
// 	•	push або одразу [{}]

// const nameEl = prompt(`Your name?`);

// const myMasive = [];
// myMasive.push({ name: nameEl });

// console.log("🚀 ~ myMasive:", myMasive);

//! 🟡 Завдання 2 — Два поля в об’єкті
// 	1.	Запитай ім’я і вік
// 	2.	Створи об’єкт { name, age }
// 	3.	Перетвори його в JSON і виведи результат в консоль

// 🧠 Підказка:
// 	•	JSON.stringify(obj)

// const nameEl = prompt(`Name`);
// const ageEl = prompt(`Age`);

// const myMassive = JSON.stringify({ name: nameEl, age: ageEl });
// console.log("🚀 ~ myMassive:", myMassive);

//! 🔥 Рівень 2 — Масиви об’єктів

// 	1.	Запитай у користувача ім’я та номер телефону
// 	2.	Додай цей контакт у масив contacts
// 	3.	Виведи масив у консоль
// 	4.	Ще не треба localStorage

// 💡 Підказка:
// 	•	масив спочатку порожній: let contacts = []
// 	•	кожен контакт — об’єкт { name, phone }
// 	•	використовуй push

// const nameEl = prompt(`Name`);
// const phoneEl = prompt(`Phone`);

// let contactList = [];
// contactList.push({ name: nameEl, phone: phoneEl });

// // console.log("🚀 ~ contactList:", contactList);

// //! 🟢 Завдання 2 — Перетворення у JSON
// // 	1.	Візьми масив контактів із попередньої задачі
// // 	2.	Перетвори його у JSON-рядок
// // 	3.	Виведи JSON у консоль
// // 	4.	Потім розпакуй JSON назад у масив і виведи його

// // 💡 Підказка:
// // 	•	JSON.stringify() → рядок
// // 	•	JSON.parse() → назад у масив/об’єкт

// const toJson = JSON.stringify(contactList);
// console.log("🚀 ~ toJson:", toJson);

// const toJs = JSON.parse(toJson);
// console.log("🚀 ~ toJs:", toJs);

//! 🔥 Рівень 3 — Масиви об’єктів + localStorage

// 🔵 Завдання 1 — Книга контактів з localStorage (повна версія)
// 	1.	Створи масив контактів із localStorage, якщо він уже існує, або порожній, якщо ні.
// 	2.	Запитай користувача про ім’я та телефон.
// 	3.	Додай новий контакт у масив.
// 	4.	Збережи масив у localStorage у вигляді JSON.
// 	5.	Виведи всі контакти в консоль.

// 💡 Підказка:
// 	•	Ключ у localStorage: "contactList"
// 	•	Перевірка: let contacts = JSON.parse(localStorage.getItem("contactList")) || [];
// 	•	Збереження: localStorage.setItem("contactList", JSON.stringify(contacts))

// const contactsList = [];

// const nameEl = prompt(`Name`);
// const phoneEl = prompt(`Phone`);

// contactsList.push({ name: nameEl, phone: phoneEl });

// const toJson = JSON.stringify(contactsList);

// localStorage.setItem("contactsList", toJson);

// const show = localStorage.getItem("contactsList");
// console.log("🚀 ~ show:", show);

//!🔹 Рівень 1 — Просте зберігання даних

// 	1.	Запитай у користувача його улюблений колір (prompt).
// 	2.	Збережи цей колір у localStorage під ключем "favoriteColor".
// 	3.	Прочитай його назад і виведи в консоль.

// const prom = prompt(`color`);

// localStorage.setItem("box", prom);

// const lookGet = localStorage.getItem("box");
// console.log("🚀 ~ lookGet:", lookGet);

//! 🔹 Завдання — Список улюблених фруктів

// Умова:
// 	1.	Створи масив порожній: fruits = [].
// 	2.	Запитай користувача через prompt, який фрукт він хоче додати.
// 	3.	Додай фрукт у масив.

// 	4.	Збережи масив у localStorage під ключем "fruits".

// 	5.	Прочитай масив із localStorage і виведи в консоль весь список фруктів.
// 	6.	Кожного разу, коли користувач додає новий фрукт, він повинен додаватися до списку, а не перезаписувати його.

// // Отримуємо масив із localStorage або створюємо новий
// let fruits = JSON.parse(localStorage.getItem("storage")) || [];
// console.log("🚀 ~ fruits:", fruits);

// // Запитуємо новий фрукт
// const asK = prompt("What fruit add?");
// fruits.push(asK);

// // Зберігаємо масив у localStorage як JSON
// localStorage.setItem("storage", JSON.stringify(fruits));

// // Прочитуємо масив назад і виводимо
// const lool = JSON.parse(localStorage.getItem("storage"));
// console.log("🚀 ~ lool:", lool);

//! 🔹 Завдання — Список улюблених книг
// 	1.	Створи масив books (спочатку пустий або візьми зі сховища, якщо вже збережений).
// 	2.	Запитай користувача через prompt, яку книгу він хоче додати.
// 	3.	Додай книгу у масив.
// 	4.	Збережи масив у localStorage під ключем "books".
// 	5.	Прочитай масив із localStorage і виведи весь список у консоль.
// 	6.	Кожного разу нова книга повинна додаватися до списку, а не перезаписувати старі книги.

// let storageEl = JSON.parse(localStorage.getItem("storage1")) || [];

// const asK = prompt("What book?");
// storageEl.push(asK);

// localStorage.setItem("storage1", JSON.stringify(storageEl));

// const lookBook = JSON.parse(localStorage.getItem("storage1"));
// console.log("🚀 ~ lookBook:", lookBook);

//! 🔹 Завдання — Список контактів (ім’я + телефон)
// 	1.	Створи масив contacts (спочатку порожній або візьми зі сховища, якщо він вже збережений).
// 	2.	Запитай користувача через prompt:
// 	•	ім’я контакту
// 	•	телефон контакту

// 3.	Додай новий контакт у масив у вигляді об’єкта:
// { name: "ім’я", phone: "телефон" }

// 	4.	Збережи масив у localStorage під ключем "contacts".
// 	5.	Прочитай масив із localStorage і виведи всі контакти у консоль.
// 	6.	Кожного разу новий контакт повинен додаватися до списку, а не перезаписувати старі контакти.

// let myMassive = JSON.parse(localStorage.getItem("storage2")) || [];

// const nameEl = prompt("What name?");
// const phoneEl = prompt("What number?");

// myMassive.push({ name: nameEl, phone: phoneEl });

// localStorage.setItem("storage2", JSON.stringify(myMassive));

// const look = JSON.parse(localStorage.getItem("storage2"));
// console.log("🚀 ~ look:", look);

//  прибираємо сторадж
// localStorage.removeItem("storage1");

// const look2 = localStorage.getItem("storage1");
// console.log("🚀 ~ look2:", look2);

//! 🔹 Частина 1 — Створення масиву контактів
// 1.	Створи масив контактів (масив об’єктів { name, phone }) або візьми зі сховища, якщо він уже є.
// 2.	Запитай користувача ім’я та номер телефону через prompt.
// 3.	Додай контакт у масив.
// 4.	Збережи масив у localStorage під ключем "contacts".
// 5.	Виведи весь масив у консоль.

// 🔹 Частина 2 — Видалення контакту
// 	1.	Запитай у користувача ім’я контакту, який він хоче видалити.
// 	2.	Видали контакт із масиву за допомогою filter.
// 	3.	Збережи оновлений масив у localStorage.
// 	4.	Виведи результат у консоль.

// let storageEl = JSON.parse(localStorage.getItem("storage3")) || [];

// // const nameEl = prompt("What your name?");
// // const phoneEl = prompt("What your phone?");
// // storageEl.push({ name: nameEl, phone: phoneEl });

// // localStorage.setItem("storage3", JSON.stringify(storageEl));

// const look = JSON.parse(localStorage.getItem("storage3"));
// console.log("🚀 ~ look:", look);

// const askDelete = prompt("What phone delete");

// // Видаляємо контакт, номер якого ввів користувач
// storageEl = storageEl.filter((el) => el.name !== askDelete);

// // Зберігаємо оновлений масив у localStorage
// localStorage.setItem("storage3", JSON.stringify(storageEl));

//! 🔹 Задача 1 — Список улюблених фільмів
// 	1.	Створи масив movies (порожній або візьми зі сховища).

// 	2.	Запитай користувача через prompt, який фільм він хоче додати.
// 	3.	Додай фільм у масив.

// 	4.	Збережи масив у localStorage під ключем "movies".

// 	5.	Виведи весь список у консоль.
// 	6.	Додай можливість видалити фільм по назві.

// let movies = JSON.parse(localStorage.getItem("storage")) || [];

// const askFilm = prompt(`What film add?`);
// movies.push(askFilm);

// localStorage.setItem("storage", JSON.stringify(movies));

// const look = JSON.parse(localStorage.getItem("storage"));
// console.log("🚀 ~ look:", look);

// const askDelete = prompt(`Delete?`);

// movies = movies.filter((el) => el !== askDelete);
// localStorage.setItem("storage", JSON.stringify(movies));

//! 🔹 Завдання — Список контактів із видаленням
// 	1.	Створи масив contacts (спочатку порожній або візьми зі сховища localStorage).
// 	2.	Запитай користувача через prompt:
// 	•	ім’я контакту (name)
// 	•	номер телефону (phone)
// 3.	Додай новий контакт у масив як об’єкт:
// { name: "ім’я", phone: "номер" }
//   	4.	Збережи масив у localStorage під ключем "contacts".
// 	5.	Виведи весь список контактів у консоль.
// 	6.	Потім запитай у користувача, який контакт він хоче видалити по імені.
// 	7.	Видали контакт із масиву за допомогою filter.
// 	8.	Збережи оновлений масив у localStorage та виведи його.

let contactList = JSON.parse(localStorage.getItem("storage")) || [];

//* Додавання
// const askName = prompt(`Give your name`);
// const askPhone = prompt(`Give your number`);
// contactList.push({ name: askName, phone: askPhone });

// localStorage.setItem("storage", JSON.stringify(contactList));

// const look = JSON.parse(localStorage.getItem("storage"));
// console.log("🚀 ~ look:", look);

//! видалення
// const askDelete = prompt(`Name phone for delete`);

// contactList = contactList.filter((el) => el.name !== askDelete);

// localStorage.setItem("storage", JSON.stringify(contactList));

// const look2 = JSON.parse(localStorage.getItem("storage"));
// console.log("🚀 ~ look2:", look2);

//! 🔹 Завдання — Безпечне читання JSON
// 	1.	Створи функцію safeParse(jsonString), яка:
// 	•	Приймає рядок jsonString
// 	•	Повертає об’єкт, якщо рядок валідний JSON
// 	•	Якщо рядок невалідний, виводить помилку в консоль і повертає null
// 	2.	Перевір функцію на таких прикладах:

// function safeParse(jsonString) {
//   try {
//     return JSON.parse(jsonString);
//   } catch (error) {
//     // console.log(error.name);
//     return null;
//   }
// }

// console.log(safeParse('{"name":"Anna","age":25}')); // має повернути об’єкт
// console.log(safeParse('{name:"Anna",age:25}')); // має вивести помилку і повернути null

//! 🔹 Завдання — Безпечний список справ (todo list)
// 	1.	Створи масив tasks у localStorage під ключем "tasks".
// 	2.	Користувач вводить нове завдання через prompt і ми додаємо його у масив.
// 	3.	Збережи масив у localStorage у вигляді JSON.
// 	4.	При читанні списку з localStorage використай функцію safeParse, щоб уникнути помилок, якщо JSON некоректний.
// 	5.	Виведи весь список справ у консоль.

// let myMassive = JSON.parse(localStorage.getItem("storageKey")) || [];

//* Додавання
// const askEl = prompt("New Todo");
// myMassive.push(askEl);

// localStorage.setItem("storageKey", JSON.stringify(myMassive));

// try {
//   console.log(JSON.parse(localStorage.getItem("storageKey")));
// } catch (error) {
//   console.log(error.name);
// }

//! видалення
// const askDelete = prompt(`Delete?`);

// myMassive = myMassive.filter((el) => el !== askDelete);

// localStorage.setItem("storageKey", JSON.stringify(myMassive));

// const look2 = JSON.parse(localStorage.getItem("storageKey"));
// console.log("🚀 ~ look2:", look2);

// !Zadacha
// Знайдіть перший елемент з класом highlight // та виведіть його текст у
//   консоль  Ваш код тут:
// const searchClas = document.querySelector(".highlight");
// console.log(searchClas.textContent);

// ! Zadacha 2
// Підрахуйте кількість виконаних завдань (з класом completed)
// та виведіть результат у елемент з id="count"

// const searchClas = document.querySelectorAll(".completed");
// const show = document.querySelector("#count");
// show.textContent = searchClas.length;

// //! Змініть текст кнопки на "Clicked!" при натисканні
// const searchClas = document.querySelector("#myButton");
// searchClas.textContent = "Clicked!";

//! Задача 5 (середня)
// Виведіть у консоль textContent та innerHTML елемента #content
// Поясніть різницю між ними // Ваш код тут:

// const item1 = document.querySelector("#content");
// console.log(item1.textContent);

// console.log(item1.innerHTML);

// CSS класи на DOM-елементах

// !
// При натисканні на кнопку перемикайте класи // light-theme та dark-theme на
// елементі #page

// const item1 = document.querySelector("#themeToggle");

// const item2 = document.querySelector("#page");

// item1.addEventListener("click", () => {
//   document.body.classList.toggle("dark-theme");

//   item2.classList.toggle("dark-theme");
// });

// ! Список покупок із цінами
// •	prompt: назва товару + ціна
// •	Зберігати як масив об’єктів:
// •	Видалення по title
// // •	Показати загальну суму всіх товарів

// // * Запис
// let memory = JSON.parse(localStorage.getItem("storage")) || [];

// // const ask1 = prompt(`Товар`);
// // const ask2 = prompt(`Ціна`);
// // memory.push({ Товар: ask1, Ціна: ask2 });

// localStorage.setItem("storage", JSON.stringify(memory));

// // const look = JSON.parse(localStorage.getItem("storage"));
// // console.log("🚀 ~ look:", look);

// // ? Видалення
// const ask3 = prompt(`Назва для видалення?`);

// memory = memory.filter((el) => el.Товар !== ask3);

// localStorage.setItem("storage", JSON.stringify(memory));

// const look2 = JSON.parse(localStorage.getItem("storage"));
// console.log("🚀 ~ look2:", look2);

// ! ✏️ Завдання 1: Список покупок
// 	1.	Користувач вводить назву товару через prompt.
// 	2.	Додай товар у масив (який зберігається в localStorage під ключем "shoppingList").
// 	3.	Перетвори масив у JSON та збережи назад у localStorage.
// 	4.	Виведи оновлений список у консоль.

// let memory = JSON.parse(localStorage.getItem("storage")) || [];

// const askPro = prompt(`Name product?`);
// memory.push(askPro);

// localStorage.setItem("storage", JSON.stringify(memory));

// const look = JSON.parse(localStorage.getItem("storage"));
// console.log("🚀 ~ look:", look);

// Delete

// const askDelete = prompt(`What delete?`);

// memory = memory.filter((el) => el !== askDelete);
// localStorage.setItem("storage", JSON.stringify(memory));

// const look2 = JSON.parse(localStorage.getItem("storage"));
// console.log("🚀 ~ look2:", look2);

// !

// const item1 = document.querySelector("#btn1");
// const item2 = document.querySelector("#text1");

// item1.addEventListener("click", () => {
//   item2.textContent = `CinaZas`;
// });

// !

// const item1 = document.querySelector("#input2");

// item1.addEventListener("blur", (event) => {
//   console.log(item1.value);
//   item1.value = "";
// });

// ! 4️⃣ Submit → не перезавантажувати і вивести значення

// const item1 = document.querySelector("#form4");

// item1.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const inputEl = event.target.elements.username.value;
//   console.log(inputEl);
// });

//!

// const item1 = document.querySelector("#box5");

// item1.addEventListener("click", (event) => {
//   event.target.style.background = "red";
// });

// ! 6️⃣ Лічильник кнопок

// const item1 = document.querySelector("#minus6");
// const item2 = document.querySelector("#counter6");
// const item3 = document.querySelector("#plus6");
// const item4 = document.querySelector("#reset6");

// let counter = 0;

// item1.addEventListener("click", () => {
//   item2.textContent = --counter;
// });

// item3.addEventListener("click", () => {
//   item2.textContent = ++counter;
// });

// item4.addEventListener("click", () => {
//   counter = 0;
//   item2.textContent = counter;
// });

// !
// const item1 = document.querySelector("#list7");

// item1.addEventListener("click", (event) => {
//   if (event.target.tagName === "LI") {
//     event.target.remove();
//   }
// });

// !

// const item1 = document.querySelector("#add9");
// const item2 = document.querySelector("#list9");

// item1.addEventListener("click", () => {
//   //   const newLi = document.createElement("li");
//   //   newLi.textContent = `New item`;
//   //   item2.append(newLi);

//     //! Var 2
// //   item2.insertAdjacentHTML("beforeend", `<li>New Item</li>`);
// });

// !

// document.addEventListener("keydown", (event) => {
//   if (event.key === "ArrowUp") {
//     console.log(`KeyUp`);
//   }
// });

// document.addEventListener("keydown", (event) => {
//   if (event.key === "ArrowDown") {
//     console.log(`KeyDown`);
//   }
// });

// !
// const item1 = document.querySelector("#input11");
// const item2 = document.querySelector("#warning11");

// item1.addEventListener("input", (event) => {
//   const value = event.target.value;

//   if (/\b/.test(value)) {
//     item2.textContent = `ЧИСЛО!`;
//   } else {
//     item2.textContent = `Все ок!!!`;
//   }
// });

// !1️⃣ Зберегти список справ у localStorage

// Умова:
// Користувач вводить через prompt одну справу.
// Додай її у масив у localStorage під ключем "todos".

// Що потрібно зробити:
// 	•	витягнути існуючий масив або створити новий
// 	•	додати нову справу
// 	•	перезаписати назад через JSON.stringify()

//? add
// let memory = JSON.parse(localStorage.getItem("storage")) || [];

// const askTodo = prompt(`Todo-List`);
// memory.push(askTodo);

// localStorage.setItem("storage", JSON.stringify(memory));

// const lookList1 = JSON.parse(localStorage.getItem("storage"));
// console.log("🚀 ~ lookList1:", lookList1);

// ? delete

// const look2 = JSON.parse(localStorage.getItem("storage"));

// const askDelete = prompt(`What you want delete?`);
// memory = memory.filter((el) => el !== askDelete);

// localStorage.setItem("storage", JSON.stringify(memory));

// const look3 = JSON.parse(localStorage.getItem("storage"));
// console.log("🚀 ~ look3:", look3);

// ! Галерея
// 1.	Створи масив із 3 об’єктами:
//	2.	На сторінці має бути <ul class="gallery"></ul>.
// 	3.	Джаваскриптом перебери масив і всередину <ul> додай 3 картинки у <li>:

// const images = [
//   {
//     src: "https://images.unsplash.com/photo-1629897048514-3dd7414fe72a?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     alt: "Картинка 1",
//     full: "https://images.unsplash.com/photo-1604430096113-f3806ab7c810?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // велика картинка
//   },
//   {
//     src: "https://images.unsplash.com/photo-1557323137-bd6bd20fe022?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     alt: "Картинка 2",
//     full: "https://images.unsplash.com/photo-1559246082-db96ed0eae0f?q=80&w=1072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1506244856291-8910ea843e81?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     alt: "Картинка 3",
//     full: "https://images.unsplash.com/photo-1686914687902-e58579225e84?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
// ];

// const galleryUl = document.querySelector(".gallery");

// const organaize = images.map((el) => {
//   galleryUl.insertAdjacentHTML(
//     "beforeend",
//     `<li><img src="${el.src}" alt="${el.alt}"></li>`
//   );
// });

// images.forEach((el) => {
//   galleryUl.insertAdjacentHTML(
//     "beforeend",
//     `<li><img src="${el.src}" alt="${el.alt}" data-full="${el.full}"></li>`
//   );
// });

// Клік по картинці (просто логіка)
// 	1.	Продовжуй попередню задачу.
// 	2.	Додай слухача на .gallery (делегування).
// 	3.	Якщо клікнули по <img> — в консоль виведи ALT картинки.
// console.log(event.target.alt);

// galleryUl.addEventListener("click", (event) => {
//   if (event.target.tagName !== "IMG") return;

//   // Створюємо і показуємо модалку
//   const instance = basicLightbox.create(`
//     <img src="${event.target.dataset.full}" alt="${event.target.alt}">
//   `);
//   instance.show();
// });

// ! Галерея 2

// const galleryMassiv = [
//   {
//     preview:
//       "https://images.unsplash.com/photo-1608506436795-af65d01305bf?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     full: "https://images.unsplash.com/photo-1462396881884-de2c07cb95ed?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     alt: "pic1",
//   },
//   {
//     preview:
//       "https://plus.unsplash.com/premium_photo-1664391794673-579cf6d65f79?q=80&w=935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     full: "https://images.unsplash.com/photo-1614972973290-3b2f6f6cab49?q=80&w=921&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     alt: "pic2",
//   },
//   {
//     preview:
//       "https://images.unsplash.com/photo-1705624843697-4461f9dce482?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     full: "https://images.unsplash.com/photo-1635716983858-c061845471b6?q=80&w=827&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     alt: "pic3",
//   },
// ];

// const gallery = document.querySelector(".gallery");

// galleryMassiv.forEach((el) => {
//   gallery.insertAdjacentHTML(
//     "beforeend",
//     `    <li>
//       <img src="${el.preview}" data-big="${el.full}" alt="${el.alt}"/>
//     </li>`
//   );
// });

// gallery.addEventListener("click", (event) => {
//   if (event.target.tagName !== "IMG") return;

//   const full = event.target.dataset.full;

//   const biblioteca = basicLightbox.create(
//     `<img src="${event.target.dataset.full}" alt="${event.target.alt}" />`
//   );

//   biblioteca.show();
// });

// !
//  Умови задачі:
//? 	1.	Під час вводу (input event):
// 	•	якщо поле порожнє — під полем показувати червоне повідомлення: “Поле обов’язкове”
// 	•	якщо поле заповнене — повідомлення зникати
//? 	2.	Для email
// Перевіряй валідність регуляркою:
// /^\S+@\S+\.\S+$/
// Якщо email неправильний — показувати помилку: “Некоректний email”
//? 	3.	Для пароля
// Під час вводу показувати підказку:
// 	•	якщо < 6 символів → “Мінімум 6 символів”
// 	•	якщо ок → помилки нема
//? 	4.	Подія submit
// 	•	Заборонити стандартну поведінку (event.preventDefault())
// 	•	Якщо є хоча б одна помилка → під формою показати:
//  “Форма містить помилки”
// 	•	Якщо все валідно → під формою показати:
//  “Успіх! Дані відправлено.”
//? 	5.	Додатковий бонус (необовʼязково):
// 	•	На focus підсвічувати рамку поля синім
// 	•	На blur — повертати стандартну рамку

// const form = document.querySelector("#registerForm");

// const inputName = document.querySelector("#nameInput");
// const inputEmail = document.querySelector("#emailInput");
// const inputPass = document.querySelector("#passwordInput");

// const errorName = document.querySelector("#nameError");
// const errorEmail = document.querySelector("#emailError");
// const errorPass = document.querySelector("#passwordError");

// const formMessage = document.querySelector("#formMessage");

// inputName.addEventListener("blur", (event) => {
//   if (event.target.value.trim() === "") {
//     errorName.textContent = `Заповни поле ім’я`;
//     errorName.style.color = "red";
//   } else {
//     errorName.textContent = `correct`;
//     errorName.style.color = "green";
//   }
// });

// inputEmail.addEventListener("blur", (event) => {
//   if (event.target.value.trim() === "") {
//     errorEmail.textContent = `Заповни поле пошта`;
//     errorEmail.style.color = "red";
//   } else if (event.target.value.includes("@")) {
//     errorEmail.textContent = `Емейл Ok`;
//     errorEmail.style.color = "green";
//   } else {
//     errorEmail.textContent = `Помилка - напиши нормально`;
//     errorEmail.style.color = "red";
//   }
// });

// inputPass.addEventListener("blur", (event) => {
//   if (event.target.value.length < 6) {
//     errorPass.textContent = `Закороткий пароль`;
//     errorPass.style.color = "red";
//   } else {
//     errorPass.textContent = `Norm пароль`;
//     errorPass.style.color = "green";
//   }
// });

//? 	4.	Подія submit
// 	•	Заборонити стандартну поведінку (event.preventDefault())
// 	•	Якщо є хоча б одна помилка → під формою показати:
//  “Форма містить помилки”
// 	•	Якщо все валідно → під формою показати:
//  “Успіх! Дані відправлено.”

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   let hasError = false;

//   // Перевіряємо кожне поле на помилку
//   if (errorName.style.color === "red") {
//     hasError = true;
//   }
//   if (errorEmail.style.color === "red") {
//     hasError = true;
//   }
//   if (errorPass.style.color === "red") {
//     hasError = true;
//   }

//   // Виводимо повідомлення під формою
//   const formMessage = document.querySelector("#formMessage");

//   if (hasError) {
//     formMessage.textContent = "Форма містить помилки";
//     formMessage.style.color = "red";
//   } else {
//     formMessage.textContent = "Успіх! Дані відправлено.";
//     formMessage.style.color = "green";
//   }
// });

// !

// const formEl = document.querySelector("#simpleForm");

// const inputNameEl = document.querySelector("#nameInput");
// const messageName = document.querySelector("#nameError");

// const inputEmailEl = document.querySelector("#emailInput");
// const messageEmail = document.querySelector("#emailError");

// const messageGlobal = document.querySelector("#formMessage");

// inputNameEl.addEventListener("blur", (event) => {
//   if (event.target.value.trim() === "") {
//     messageName.textContent = `Пустий рядок`;
//     messageName.style.color = "red";
//   } else {
//     messageName.textContent = `Good`;
//     messageName.style.color = "green";
//   }
// });

// inputEmailEl.addEventListener("blur", (event) => {
//   if (event.target.value.trim() === "") {
//     messageEmail.textContent = `Пустий рядок`;
//     messageEmail.style.color = "red";
//   } else if (!event.target.value.includes("@")) {
//     messageEmail.textContent = `Не знайдено @`;
//     messageEmail.style.color = "red";
//   } else {
//     messageEmail.textContent = `Good`;
//     messageEmail.style.color = "green";
//   }
// });

// formEl.addEventListener("submit", (event) => {
//   event.preventDefault();

//   let hasError = false;

//   if (messageName.style.color === "red") {
//     hasError = true;
//   } else if (messageEmail.style.color === "red") {
//     hasError = true;
//   }

//   if (hasError) {
//     messageGlobal.textContent = `Є помилка`;
//     messageGlobal.style.color = "red";
//   } else {
//     messageGlobal.textContent = `Все добре`;
//     messageGlobal.style.color = "green";
//     formEl.reset();
//   }
// });

// !🟦 Задачі на змінні, типи даних

// // ? Створи змінну age. Якщо age < 18, виведи “Доступ заборонено”, інакше — “Ласкаво просимо”.
// const age = 17;
// if (age < 18) {
//   console.log("Доступ заборонено");
// } else {
//   console.log("“Ласкаво просимо”");
// }

// // ? Є число x. Перевір, чи є воно парним.
// function numChecker(num) {
//   if (num % 2 !== 0) {
//     return "Число не парне";
//   } else {
//     return "Парне";
//   }
// }
// console.log(numChecker(2));
// console.log(numChecker(1));

// // ? Дано рядок. Перевір, чи містить він слово "hello" (нечутливо до регістру).
// function wordChecker(word) {
//   if (word.toLowerCase().includes("hello")) {
//     return "Містить слово Хелоу";
//   } else {
//     return "Не містить слово Хелоу";
//   }
// }

// console.log(wordChecker("I am Dima"));
// console.log(wordChecker("Hello ,I am Dima"));

// // ? Напиши код, який перевіряє, чи є змінна value числом.
// function checker(numb) {
//   if (typeof numb === "number") {
//     return "Its Number";
//   } else {
//     return "NOT Number";
//   }
// }
// console.log(checker(10));
// console.log(checker("Hello!"));

// // ? Є масив чисел. Знайди мінімальне і максимальне число.
// const numberss = [0, 78, 23, 40, 12, 3, 8, 4, 44];

// const one = numberss.reduce((accu, el) => {
//   if (accu < el) {
//     return accu + el;
//   }
//   return accu;
// }, 0);
// console.log("🚀 ~ one:", one);

// const two = numberss.reduce((accu, el) => {
//   if (accu > el) {
//     return accu + el;
//   }
//   return accu;
// }, 0);
// console.log("🚀 ~ two:", two);

//! 🟩 Задачі на цикли та масиви
// // 	6.	Є масив. Виведи лише парні елементи.
// const massiv = [2, 3, 4, 0, 1, 2, 9, 7, 6];

// // prettier-ignore
// const look = massiv
//     .filter((el) => el % 2 === 0)
//     .toSorted((a, b) => a - b);
// console.log("🚀 ~ look:", look);

//! 	7.	Є масив рядків. Зроби з нього масив їх довжин.
// const word = ["Its my text"];
// const res = word.map((el) => el.length);
// console.log("🚀 ~ res:", res);

//! 	8.	Напиши цикл, який виведе всі числа від 100 до 0 з кроком -5.
// for (let i = 100; i >= 0; i -= 5) {
//   console.log(i);
// }

//! 	9.	Є масив чисел. Обчисли суму всіх елементів.
// const masiv = [8, 723, 434];

// const result = masiv.reduce((accu, el) => {
//   return accu + el;
// }, 0);
// console.log("🚀 ~ result:", result);

//! 	10.	Розверни масив без використання reverse().
// const word = ["Hello"];

// const result = word.join("").split("").toReversed().join("");
// console.log("🚀 ~ result:", result);

//! 🟧 Задачі на функції

//! 	11.	Функція приймає два числа. Поверни більше з них.
// function numberChecker(a, b) {
//   return Math.max(a, b);
// }
// console.log(numberChecker(4, 9));

// !	12.	Функція приймає рядок і повертає такий самий, але з великої літери.
// function textTransform(word) {
//   if (!word) return ""; // на випадок пустого рядка

//   return word[0].toUpperCase() + word.slice(1);
// }

// console.log(textTransform("hello")); // "Hello"
// console.log(textTransform("world")); // "World"

// 	!13.	Функція приймає масив і повертає новий масив без дублюючих значень.
// const masive = [1, 2, 3, 1, 2, 3];
// const organaizer = masive.reduce((accum, el) => {
//   if (!accum.includes(el)) {
//     return accum + el;
//   }
//   return accum;
// }, []);
// console.log("🚀 ~ organaizer:", organaizer);

// 	!15.	Функція приймає число — поверни суму цифр цього числа.
// function sum(num) {
//   let numbers = String(num).split("");

//   let result = numbers.reduce((acc, el) => {
//     return acc + Number(el);
//   }, 0);
//   return result;
// }

// console.log(sum(55));
// console.log(sum(543));
// console.log(sum(222));

//! 🟨 Задачі на події (DOM Events)
// 	16.	При натисканні на кнопку змінюй текст заголовка на “Натиснуто!”.
// btn.addEventListener("click", () => {
//   title.textContent = "“Натиснуто";
// });

//! ✅ Задача 1. Перевірка валідного JSON

// Умова:
// Напиши функцію, яка приймає рядок.
// Спробуй розпарсити його через JSON.parse().
// 	•	Якщо JSON валідний — поверни об’єкт.
// 	•	Якщо не валідний — поверни повідомлення: "Invalid JSON".

// function parseJSON(params) {
//   try {
//     return JSON.parse(params);
//   } catch (error) {
//     return `Error`;
//   }
// }

// console.log(parseJSON('{"name": "Dmytro"}'));
// console.log(parseJSON("{name: Dmytro}"));

// !✅ Задача 3. Додавання даних у JSON
// const ok = [
//   { title: "Phone", price: 500 },
//   { title: "Laptop", price: 1500 },
// ];

// Треба:
// 	1.	Розпарсити JSON.
// 	2.	Додати новий товар (назву і ціну передає користувач).
// 	3.	Повернути JSON назад у рядку.

// const toJSON = JSON.stringify(ok, null, 2);
// console.log("🚀 ~ toJSON:", toJSON);

// const toJs = JSON.parse(toJSON);
// console.log("🚀 ~ toJs:", toJs);

// const newTitle = "Tablet";
// const newPrice = 1999;

// toJs.push({ title: newTitle, price: newPrice });

// console.log("🚀 ~ toJs:", toJs);

// const toJSON2 = JSON.stringify(toJs, null, 2);
// console.log("🚀 ~ toJSON2:", toJSON2);

// ✅ Задача 1. Показати текст при кліку

// const item1 = document.querySelector("#showBtn");
// const item2 = document.querySelector("#text");

// item1.addEventListener("click", () => {
//   item2.style.display = "block";
//   item2.style.color = "blue";
// });

// ! Збільшувати число в <span> щоразу, коли натискають кнопку.
// const item1 = document.querySelector("#countBtn");
// const item2 = document.querySelector("#counter");

// let counter = 0;

// item1.addEventListener("click", () => {
//   ++counter;
//   item2.textContent = counter;
// });

//! ✅ Задача 3. Перевірка інпута при blur
// Коли користувач покинув поле (blur):
// 	•	якщо порожнє → показати "Поле не може бути порожнім"
// 	•	якщо не порожнє → очистити помилку

// const item1 = document.querySelector("#nameInput");
// const item2 = document.querySelector("#error");

// item1.addEventListener("blur", (event) => {
//   if (event.target.value.length === 0) {
//     item2.textContent = `Поле не може бути порожнім`;
//   } else {
//     item2.textContent = "";
//   }
// });

//! ✅ Задача 5. Жива валідація Email
// При введенні (input) перевірити:
// 	•	якщо містить @ → зелений текст: “OK”
// 	•	якщо ні → червоний текст: “Невірний email”

// const item1 = document.querySelector("#emailInput");
// const item2 = document.querySelector("#emailMsg");

// item1.addEventListener("input", (event) => {
//   if (event.target.value.includes("@")) {
//     item2.textContent = "OK";
//     item2.style.color = "green";
//   } else {
//     item2.textContent = "Невірний email";
//     item2.style.color = "red";
//   }
// });

//! ✅ Задача 6. Перемикач теми
// При кліку:
// 	•	якщо фон білий → зробити чорним, текст білим
// 	•	якщо чорний → змінити назад на білий

// const item1 = document.querySelector("#themeBtn");
// const item2 = document.querySelector("#content");

// item1.addEventListener("click", () => {
//   document.body.classList.toggle("dark");
// });

//! ✅ Задача 7. Відкрити/закрити меню
// const item1 = document.querySelector("#menuBtn");
// const item2 = document.querySelector("#menu");

// item1.addEventListener("click", () => {
//   item2.style.display = "block";
// });

//!  Задача 8. Блокування кнопки, поки не поставлено галочку
// const item1 = document.querySelector("#agree");
// const item2 = document.querySelector("#submitBtn");

// item1.addEventListener("click", () => {
//   if (item1.checked) {
//     item2.removeAttribute("disabled");
//   } else {
//     item2.setAttribute("disabled", true);
//   }
// });

//! 🔥 Задача 9. Підрахунок символів у textarea

// const item1 = document.querySelector("#textArea");
// const item2 = document.querySelector("#charCount");

// item1.addEventListener("input", (event) => {
//   const text = event.target.value.trim();

//   item2.textContent = text.length;
// });

//! 🔥 Задача 10. Активне поле виділяється рамкою
// const item1 = document.querySelectorAll(".field");

// item1.forEach((el) => {
//   el.addEventListener("focus", () => {
//     el.style.outline = "2px solid yellow";
//     el.style.border = "2px solid tomato";
//   });

//   el.addEventListener("blur", () => {
//     el.style.outline = "";
//     el.style.border = "";
//   });
// });

//! 🔥 Задача 11. Кнопка “Вгору” (scroll to top)
// 	1.	Коли сторінка прокручена більш ніж на 300px → показати кнопку
// 	2.	При натисканні → прокрутити сторінку догори (window.scrollTo з behavior smooth)

// const btnEl = document.querySelector("#topBtn");

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 300) {
//     btnEl.style.display = "block";
//   } else {
//     btnEl.style.display = "none";
//   }
// });

// btnEl.addEventListener("click", () => {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// });

//! 🔥 Задача 14. Калькулятор: автоматичне оновлення суми
// При зміні (input) будь-якого інпута:
// 	•	вирахувати A + B
// 	•	показати результат у span

// const item1 = document.querySelector("#a");
// const item2 = document.querySelector("#b");

// const inputEl = document.querySelectorAll("input");

// const item3 = document.querySelector("#result");

// inputEl.forEach((el) => {
//   el.addEventListener("input", (event) => {
//     let sum = Number(item1.value) + Number(item2.value);

//     item3.textContent = sum;
//   });
// });

//! 🔥 Задача 15. Перевірка пароля в реальному часі
// • Якщо менше 6 символів → текст червоний
// • Якщо 6+ → зелений та написати: "Добре!"

// const item1 = document.querySelector("#pass");
// const item2 = document.querySelector("#rule");

// item1.addEventListener("input", (event) => {
//   if (event.target.value.length > 6) {
//     item2.style.color = "green";
//     item2.textContent = "Добре!";
//   } else {
//     item2.style.color = "red";
//   }
// });

//! 🟢 1. Розпарсити JSON і отримати значення

// const jsonEl = '{ "name": "Tom", "age": 25, "city": "Kyiv" }';

// const toJS = JSON.parse(jsonEl);
// console.log("🚀 ~ toJS:", toJS);

// console.log(toJS.name);
// console.log(toJS.age);
// console.log(toJS.city);

//! 🟢 2. Додати нове поле у JSON-об’єкт
// Завдання: додай поле "isAdmin": true, а потім перетвори назад у JSON-рядок.

// const user = { name: "Anna", age: 30 };
// user.isAdmin = true;

// const toJSON = JSON.stringify(user, null, 2);
// console.log("🚀 ~ toJSON:", toJSON);

//! 🟢 3. Масив об’єктів → JSON
// Завдання: додай новий товар (назву й ціну), і поверни оновлений JSON.

// const products = [
//   { title: "Phone", price: 500 },
//   { title: "Laptop", price: 1500 },
// ];

// products.push({ title: "Tablet", price: 2000 });
// console.log("🚀 ~ products:", products);

// const toJSON = JSON.stringify(products, null, 4);
// console.log("🚀 ~ toJSON:", toJSON);

//! 🟡 4. Фільтрація JSON-масиву
// Завдання: залишити тільки товари з ціною менше 50.

// const item1 = `[
//   { "name": "Milk", "price": 30 },
//   { "name": "Bread", "price": 20 },
//   { "name": "Meat", "price": 150 }
// ]`;

// const toJS = JSON.parse(item1);
// console.log("🚀 ~ toJS:", toJS);

// const filtracia = toJS.filter((el) => {
//   if (el.price < 50) {
//     console.log(el);
//   } else {
//     console.log("Є ще товари але дорожчі за 50");
//   }
// });

//! 🟡 5. Порахувати суму всіх цін у JSON
// Є масив товарів у JSON (як вище).
// Завдання: порахуй загальну суму всіх цін.

// const sum = toJS.reduce((accum, el) => {
//   return accum + el.price;
// }, 0);
// console.log("🚀 ~ sum:", sum);

//! 1️⃣ Сума чисел
// Створи функцію, яка приймає два числа й повертає їхню суму.

// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(10, 20));

//! 2️⃣ Перевірка парності
// Напиши функцію, яка повертає "even" або "odd" залежно від числа.

// function result(num) {
//   if (num % 2 === 0) {
//     return `even`;
//   } else {
//     return `odd`;
//   }
// }
// console.log(result(6));

//! 3️⃣ Пошук найбільшого числа
// Є масив чисел.Поверни найбільше.
// const arr = [1, 5, 8, 3, 20];

// const result = arr.reduce((accum, el) => {
//   if (accum < el) {
//     return (accum = el);
//   }
//   return accum;
// }, 0);
// console.log("🚀 ~ result:", result);

// const max = Math.max(...arr);
// console.log("🚀 ~ max:", max);

// !5️⃣ Фільтрація масиву
// З масиву поверни лише числа більші за 10.
// const numbers = [1, 23, 9, 8, 73, 4, 234];

// const checker = numbers.filter((el) => el > 10);
// console.table("🚀 ~ checker:", checker);

//! 7️⃣ Унікальні елементи
// Поверни масив без дублікатів.
// const arr = [1, 2, 3, 3, 2, 5];

// const norm = arr.reduce((accum, num) => {
//   if (!accum.includes(num)) {
//     accum.push(num);
//   }
//   return accum;
// }, []);
// console.log("🚀 ~ norm:", norm);

//! 8️⃣ Об’єднання двох об’єктів
// Створи функцію, що об’єднує два об’єкти в один.

// function foo(obj1, obj2) {
//   return { ...obj1, ...obj2 };
// }

// console.log(foo({ name: "Dima" }));
// console.log(foo({ age: 33 }));

//! 9️⃣ Задача на JSON
// Є рядок:

// const data = `{"name":"Dmytro","age":22}`;
// const toJS = JSON.parse(data);
// toJS.sex = "male";
// console.log("🚀 ~ toJS:", toJS);
// const toJSN = JSON.stringify(toJS, null, 2);
// console.log("🚀 ~ toJSN:", toJSN);

// 	•	розпарси JSON
// 	•	додай нову властивість
// 	•	поверни назад у JSON-рядок

//! 🔟 Функція, що рахує суму цін
// Є масив продуктів:
// const goods = [
//   { title: "Phone", price: 500 },
//   { title: "Laptop", price: 1500 },
// ];
// // Поверни загальну суму цін.

// const sum = goods.reduce((accu, el) => {
//   return accu + el.price;
// }, 0);
// console.log("🚀 ~ sum:", sum);

// GROK
// Базовий рівень (основи синтаксису, змінні, умови, цикли)

//! Привітання — Запитай у користувача ім’я через prompt() і виведи «Привіт, [ім’я]!»
// const ask = prompt(`Your name?`);
// console.log(ask);

//! Парність числа — Користувач вводить число, ти кажеш, парне воно чи ні.
// function checker(num) {
//   if (num % 2 === 0) {
//     return `even`;
//   } else {
//     return `odd`;
//   }
// }
// console.log(checker(2));

//! Задача: витягнути name та country у змінні через деструктуризацію.

// const user = {
//   name: "Dmytro",
//   age: 22,
//   country: "UA",
// };

// const { name, country } = user;
// console.log(name);
// console.log(country);

// !Завдання 2: Деструктуризація вкладеного об’єкта
// const product = {
//   title: "Phone",
//   price: 300,
//   details: {
//     color: "black",
//     memory: "128GB",
//   },
// };
// Задача: деструктуризувати color і memory у окремі змінні.

// const {
//   details: { color, memory },
// } = product;

// console.log(color);
// console.log(memory);

// ! Завдання 3: Деструктуризація масиву
// Задача: взяти перший, третій та четвертий елемент окремими змінними.

// const numbers = [10, 20, 30, 40];
// const [first, , ...rest] = numbers;
// console.log(first);
// console.table(rest);

// !🟥 Завдання 4: Значення за замовчуванням
// Задача: деструктуризувати name та age, причому age має мати дефолтне значення 18.

// const user = {
//   name: "Anna",
// };

// const { name, age = 18 } = user;

// console.log(name);
// console.log(age);

// !🟪 Завдання 5: Переіменування змінних
// Задача: деструктуризувати model у змінну carModel.

// const car = {
//   model: "BMW",
//   year: 2020,
// };
// const carModel = [];
// function foo({ model }) {
//   return carModel.push(model);
// }
// console.log(foo(car));
// console.log(carModel);

//! 🟨 Завдання 6: Деструктуризація параметрів функції
// Задача: всередині функції деструктуризувати name і age прямо в параметрах.

// const user = { name: "Tom", age: 33 };

// function printUser({ name, age }) {
//   return `Name: ${name}, age: ${age}`;
// }

// console.log(printUser(user));

// !🟫 Завдання 7: Пропуск елементів масиву
// Задача: отримати лише другий та четвертий елемент.

// const coords = [100, 200, 300, 400];

// const [, second, , fouth] = coords;

// console.log(second);
// console.log(fouth);

// !🔵 Завдання 8: Деструктуризація + rest
// Задача: отримати перший елемент у змінну first, а решту в масив others.

// const items = ["a", "b", "c", "d", "e"];

// const [first, ...rest] = items;
// console.log(first);
// console.log(rest);

// !
// const normalaizer = items.toReversed().join("");
// console.log("🚀 ~ normalaizer:", normalaizer);

// ! Асинхрон
// console.log("First");

// setTimeout(() => {
//   console.log("Second");
// }, 2000);

// console.log("Third");

// ! SETTIMEOUT
// const btnEl = document.querySelector("#js-my-button");
// const spanEl = document.querySelector("#js-my-span");

// const btnCancelEl = document.querySelector("#js-my-button-cancel");

// btnEl.addEventListener("click", () => {
//   set = setTimeout(() => {
//     spanEl.textContent = `Повідомлення з затримкою`;
//     spanEl.style.color = "green";
//     spanEl.style.marginLeft = 40 + "px";
//   }, 2000);
// });

// btnCancelEl.addEventListener("click", () => {
//   can = clearTimeout(set);
// });

//! Promise

// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// console.log(promise); // Об'єкт промісу

// ! ✅ Задача 1: setTimeout
// Завдання:
// Виведи в консоль "Hello after 2 seconds" через 2 секунди.

// const timeOut = setTimeout(() => {
//   console.log("Hello after 2 seconds");
// }, 2000);

//! ✅ Задача 2: setInterval + clearInterval

// Завдання:
// Створи таймер, який кожну секунду виводить "tick".
// Після 5 разів зупини його.

// let count = 1;

// const timer = setInterval(() => {
//   console.log("tick");
//   console.log(count++);

//   if (count === 6) {
//     clearInterval(timer);
//   }
// }, 1000);

//! ✅ Задача 3: Promise basic

// Завдання:
// Створи Promise, який через 2 секунди виконується (resolve) зі значенням "done" і виведи результат.

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("done");
//   }, 2000);
// }).then((result) => {
//   console.log(result);
// });

//! Створи Promise, який через 3 секунди відхиляється (reject) зі значенням "timeout".
// Виведи помилку через .catch().

// const promis = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("All good");
//     reject("timeout");
//   }, 3000);
// })
//   //   .then((result) => {
//   //     console.log(result);
//   //   })
//   .catch((error) => {
//     console.log(error);
//   });

//! Створи Promise, який:
// з ймовірністю 70% через 1 секунду resolve("успіх")
// з ймовірністю 30% через 1 секунду reject("пощастило")
// (підказка: Math.random())

// const promise = new Promise((resolve, reject) => {
//   if (Math.random() >= 0.19) {
//     setTimeout(() => {
//       resolve("успіх");
//     }, 1000);
//   } else {
//     setTimeout(() => {
//       reject("пощастило");
//     }, 1500);
//   }
// })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("код виконано");
//   });

//! Зроби ланцюжок з 3-х Promise:
// перший через 1 сек resolve("крок 1")
// другий через 1.5 сек resolve("крок 2")
// третій через 0.5 сек resolve("крок 3")
// Виведи їх по черзі через .then().then().then()

// const prmise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("крок 1");
//   }, 1000);
// })
//   .then((result1) => {
//     console.log(result1);
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("крок 2");
//       }, 1500);
//     });
//   })
//   .then((result2) => {
//     console.log(result2);
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("крок 3");
//       }, 500);
//     });
//   })
//   .then((result3) => {
//     console.log(result3);
//   });

//! ✅ Задача 1: Простий Promise

// Створи Promise, який через 1 секунду викликає
// resolve("Success")
// і виведи результат через .then.

// const pro = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Success");
//   }, 1000);
// }).then((result) => {
//   console.log(result);
// });

//! ✅ Задача 2: Promise з помилкою

// Створи Promise, який через 1.5 секунди викличе
// reject("Something went wrong").
// Оброби помилку через .catch.

// const pro = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Something went wrong");
//   }, 1500);
// })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Код завершено");
//   });

//! ✅ Задача 3: Умовний resolve/reject
// Створи функцію:
// Яка повертає Promise:
// 	•	якщо num > 10, тоді resolve(“OK”)
// 	•	інакше reject(“Too small”)

// Використай .then і .catch.

// function checkNumber(num) {
//   const pro = new Promise((resolve, reject) => {
//     if (num > 10) {
//       resolve("OK");
//     } else {
//       reject("Too Small");
//     }
//   })
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((error) => {
//       console.log(error);
//     })
//     .finally(() => {
//       console.log("Code is done");
//     });
// }

// checkNumber(5);
// checkNumber(11);
// checkNumber(7);

//! ✅ Задача 4: Ланцюжок промісів (then chaining)
// Створи Promise, який через 1 сек повертає число 5.
// Потім у .then:
// 	1.	помнож число на 2
// 	2.	у наступному .then додай 10
// 	3.	у третьому .then виведи фінальний результат
// Очікувано: 20

// const pro = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(5);
//   }, 1000);
// })
//   .then((result) => {
//     return result * 2;
//   })
//   .then((result) => {
//     return result + 10;
//   })
//   .then((result) => {
//     console.log(result);
//   });

//! ✅ Задача 1: Ланцюжок з помилкою
// Створи Promise, який через 1 сек повертає число 10.

// Побудуй ланцюжок:
// 	1.	перший .then → поділи число на 2
// 	2.	другий .then → помнож на 3
// 	3.	третій .then → якщо результат > 10 → reject("Too big"), інакше resolve(result)
// 	4.	.catch має зловити помилку
// 	5.	.finally має вивести "Done"

// const pro = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 1000);
// })
//   .then((result) => {
//     return result / 2;
//   })
//   .then((result) => {
//     return result * 3;
//   })
//   .then((result) => {
//     return new Promise((resolve, reject) => {
//       if (result > 10) {
//         reject("Too big");
//       } else {
//         resolve(result);
//       }
//     });
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   });

//! ✅ Задача 2: Reject всередині then
// Створи Promise, який повертає "ok".
// У першому .then зроби:
// 	•	якщо значення === “ok” → виклич reject("bad value")

// Потім .catch має вивести "bad value".

// const pro = new Promise((resolve, reject) => {
//   resolve("ok");
// })
//   .then((result) => {
//     if (result === "ok") {
//       return Promise.reject("bad value");
//     }
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//! ✅ Задача 3: Умовний ланцюжок
// Створи Promise, який повертає число 7.

// У .then:
// 	•	якщо число парне → поверни "even"
// 	•	якщо непарне → поверни "odd"

// У наступному .then виведи результат ("odd").

// const pro = new Promise((resolve, reject) => {
//   resolve(3);
// })
//   .then((result) => {
//     if (result % 2 === 0) {
//       return "even";
//     } else {
//       return "odd";
//     }
//   })
//   .then((result) => {
//     console.log(result);
//   });

//! ✅ Задача 4: Імітація завантаження
// Створи функцію:
// Яка через 1 секунду повертає:
// "Loaded: " + name

// function loadFile(name) {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(`Loaded: ${name}`);
//     }, 1000);
//   });
// }

// loadFile("Bob");

//! ✅ Задача 5: Ланцюжок з setTimeout у середині
// Створи Promise, який повертає число 3.

// У наступному .then поверни новий Promise із setTimeout на 1 секунду, який повертає число * 4.

// Потім у наступному .then виведи результат: 12.

// const promise = new Promise((resolve, reject) => {
//   resolve(3);
// })
//   .then((num) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(num * 4);
//       }, 1000);
//     });
//   })
//   .then((result) => {
//     console.log(result);
//   });

//! Задачки для практики (починай з №1):

// Напиши функцію delay(ms), яка повертає проміс, що резолвиться через ms мілісекунд.
// Потім виклич її так:

// function delay(ms) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }

// delay(2000).then(() => console.log("пройшло 2 секунди"));

// ! Зроби так, щоб спочатку вивелося «1», через 1 секунду — «2», ще через 1 секунду — «3».
// Використовуй проміси + setTimeout (без async/await поки що).

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log(1);
//     resolve();
//   }, 1000);
// }).then(() => {
//   return new Promise.resolve(() => {
//     setTimeout(() => {
//       console.log(2);
//     }, 2000);
//   });
// });

// *******
// Promise.resolve()
//   .then(() => {
//     return new Promise((res) =>
//       setTimeout(() => {
//         console.log(1);
//         res();
//       }, 1000)
//     );
//   })
//   .then(() => {
//     return new Promise((res) =>
//       setTimeout(() => {
//         console.log(2);
//         res();
//       }, 2000)
//     );
//   });

// ! DOM
// const itemPlus = document.querySelector("#increment");
// const itemMinus = document.querySelector("#decrement");
// const resultShow = document.querySelector("#count");

// let count = 0;

// itemPlus.addEventListener("click", () => {
//   count++;
//   resultShow.textContent = count;
// });

// itemMinus.addEventListener("click", () => {
//   if (resultShow.textContent <= 0) {
//     resultShow.textContent = 0;
//   } else {
//     count--;
//     resultShow.textContent = count;
//   }
// });

//! Задача 2. Зміна кольору фону по кліку

// const item1 = document.querySelector("#colorBox");

// const btnEl = document.querySelector("#changeColor");

// btnEl.addEventListener("click", () => {
//   item1.style.background = "red";
// });

//! Задача 3. Список справ (додавання)

// const item1 = document.querySelector("#taskInput");
// const item2 = document.querySelector("#addTask");
// const item3 = document.querySelector("#taskList");

// !
// item2.addEventListener("click", () => {
//   item3.insertAdjacentHTML("beforeend", `<li>${item1.value}</li>`);
// });

// !

// item2.addEventListener("click", () => {
//   const newLi = document.createElement("li");
//   newLi.textContent = item1.value;
//   item3.append(newLi);
// });

//! Задача 4. Видалення елементів зі списку

// const removeButtons = document.querySelectorAll(".remove");

// removeButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     button.parentElement.remove();
//   });
// });

//! Завдання: клік по .title відкриває/закриває .content тільки цього блоку.
//! Відкриті блоки виділяти класом active.

// Додай простий CSS для .modal {display:none} і .modal.active {display:block}.
// Завдання: відкривати по кнопці, закривати по × і по кліку поза контентом.

// const item1 = document.querySelector("#modal");

// const item2 = document.querySelector("#openModal");

// const item3 = document.querySelector(".close");

// item2.addEventListener("click", () => {
//   item1.classList.add("active");
// });

// item3.addEventListener("click", () => {
//   item1.classList.remove("active");
// });

// !Завдання: при введенні тексту в інпут — показувати тільки ті
//!  , які містять цей текст (регістронезалежно).

// const item1 = document.querySelector("#search");

// const item2 = document.querySelectorAll("#list > *");
// console.log("🚀 ~ item2:", item2);

// item1.addEventListener("input", (event) => {
//   const toLower = event.target.value.toLowerCase().trim();

//   item2.forEach((item) => {
//     const itemText = item.textContent.toLowerCase();

//     if (itemText.includes(toLower)) {
//       item.style.display = ""; // показати (скинути стиль)
//     } else {
//       item.style.display = "none"; // сховати
//     }
//   });
// });

//! 🟢 Promise — базові
// 1️⃣ Створення Promise

// Створи Promise, який:
// 	•	через 2 секунди виконується (resolve)
// 	•	повертає рядок "Success"

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Succes");
//   }, 2000);
// });

// promise.then((result) => {
//   console.log(result);
// });

//! 2️⃣ Reject
// Створи Promise, який:
// 	•	через 1 секунду відхиляється (reject)
// 	•	повертає "Error occurred"
// 	•	оброби помилку через .catch()

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Error occurred");
//   }, 2000);
// });

// promise.catch((error) => {
//   console.log(error);
// });

//! 3️⃣ then → then

// Є Promise, що повертає число 5
// 	•	у першому .then() помнож його на 2
// 	•	у другому .then() додай 10
// 	•	виведи результат

// const promise = new Promise((resolve, reject) => {
//   resolve("5");
// })
//   .then((num) => {
//     return new Promise((resolve, reject) => {
//       resolve(num * 2);
//     });
//   })
//   .then((num) => {
//     return new Promise((resolve, reject) => {
//       resolve(num + 10);
//     });
//   });

// promise.then((result) => {
//   console.log(result);
// });

//! 🟡 Promise + умови
// 4️⃣ Успіх або помилка

// Створи функцію checkNumber(num):
// 	•	якщо num > 10 → resolve("OK")
// 	•	інакше → reject("Too small")

// function checkNumber(num) {
//   return new Promise((resolve, reject) => {
//     if (num > 10) {
//       resolve("OK");
//     } else {
//       reject("Too small");
//     }
//   });
// }

// checkNumber(15).then((resolve) => {
//   console.log(resolve);
// });

// checkNumber(2).catch((reject) => {
//   console.log(reject);
// });

// ⸻

//! 5️⃣ Симуляція API

// Функція :
// 	•	через 1.5 сек повертає обʼєкт { name: "Alex", age: 25 }
// 	•	виведи тільки name

// function fetchUser() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ name: "Alex", age: 25 });
//     }, 1500);
//   });
// }

// fetchUser().then((user) => {
//   console.log(user.name);
// });

// ⸻

//! 🔵 Promise chaining
// 6️⃣ Ланцюжок

// Є Promise, який повертає 1
// 	•	кожен .then() додає 1
// 	•	зроби 3 then
// 	•	виведи фінальне значення

// ⸻

// 7️⃣ Повернення Promise з then

// Функція delay(ms) повертає Promise
// 	•	зроби ланцюжок із 2 затримок
// 	•	виведи "Done" після другої

// ⸻

// 🔴 Promise combinators

// 8️⃣ Promise.all

// Є 3 Promise:
// 	•	повертають 1, 2, 3 з різною затримкою
// 	•	зведи їх через Promise.all
// 	•	порахуй суму

// ⸻

// 9️⃣ Promise.race

// Є 2 Promise:
// 	•	один виконується за 1с
// 	•	другий за 2с
// 	•	виведи результат того, хто перший

// ⸻

// 🔟 Promise.any

// Є 3 Promise:
// 	•	2 з них падають (reject)
// 	•	1 виконується (resolve)
// 	•	виведи успішний результат

// ⸻

// ⚫ Async / Await

// 1️⃣1️⃣ async function

// Перепиши задачу №5 з використанням async/await

// ⸻

// 1️⃣2️⃣ try / catch

// Створи async функцію:
// 	•	всередині Promise.reject("Fail")
// 	•	оброби помилку через try/catch

//! 🟢 1. Базові
// 1️⃣ Сума чисел

// Напиши функцію, яка приймає масив чисел і повертає їх суму.

// function sum(num) {
//   return num.reduce((accu, el) => {
//     return accu + el;
//   }, 0);
// }

// sum([1, 2, 3, 4]); // 10

// ! 2️⃣ Найбільше число

// Знайди найбільше число в масиві.

// const max = [3, 7, 2, 9]; // 9
// console.log(Math.max(...max));

// const search = max.reduce((accum, el) => {
//   if (el > accum) {
//     return el;
//   }
//   return accum;
// }, 0);
// console.log("🚀 ~ search:", search);

//! 3️⃣ Реверс рядка
// reverse("hello"); // "olleh"

// const word = "hello";

// const reversedWord = word.split("").toReversed().join("");
// console.log("🚀 ~ reversedWord:", reversedWord);

//! 🟡 2. Масиви та обʼєкти
// 4️⃣ Фільтрація
// Залиши тільки парні числа.

// function filterEven(numbers) {
//   return numbers.filter((el) => {
//     if (el % 2 === 0) {
//       return el;
//     }
//   });
// }

// // filterEven([1, 2, 3, 4, 5, 6]); // [2,4,6]

// console.log(filterEven([1, 2, 3, 4, 5, 6]));

//! 6️⃣ Обʼєкти з масиву

// const users = [
//   { name: "Alex", age: 20 },
//   { name: "Bob", age: 30 },
// ];
// // ["Alex", "Bob"]

// const serch = users.map(({ name }) => name);
// console.log(serch);

//! Завдання: Створити просту програму, яка бере текст із поля вводу і при натисканні на кнопку виводить його в іншому блоці, але великими літерами.

// const inputEl = document.querySelector("#userInput");

// const buttonEl = document.querySelector("#convertBtn");

// const resultEl = document.querySelector("#result");

// buttonEl.addEventListener("click", () => {
//   resultEl.textContent = inputEl.value;
//   inputEl.value = "";
// });

//! Завдання: Створити кнопку, яка при кожному натисканні змінює фоновий колір сторінки на випадковий. Також потрібно виводити код кольору на екран.

// const colorCode = document.querySelector("#colorCode");
// const button = document.querySelector("#changeColorBtn");

// const bodyEl = document.querySelector("body");

// button.addEventListener("click", () => {
//   const color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
//     Math.random() * 255
//   })`;

//   bodyEl.style.backgroundColor = color;
// });

//! Завдання: Створити список справ, де можна додавати нові пункти та видаляти їх при кліку на них.

// const inputEl = document.querySelector("#taskInput");
// const buttonEl = document.querySelector("#addTaskBtn");
// const listEl = document.querySelector("#taskList");

// buttonEl.addEventListener("click", () => {
//   const value = inputEl.value.trim();

//   if (value) {
//     const newLi = document.createElement("li");
//     listEl.append(newLi);
//     newLi.textContent = value;
//   } else {
//     return;
//   }

//   inputEl.value = "";
// });

//! Завдання: Створити простий лічильник із двома кнопками: одна збільшує число, інша — зменшує.

// const plus = document.querySelector("#increaseBtn");
// const minus = document.querySelector("#decreaseBtn");
// const res = document.querySelector("#counterValue");

// let count = 0;

// plus.addEventListener("click", () => {
//   count++;

//   res.textContent = count;
// });

// minus.addEventListener("click", () => {
//   count--;

//   res.textContent = count;
// });

//! Завдання: У тебе є JSON-рядок з даними користувача. Тобі потрібно розпарсити його і відобразити дані на сторінці.

// const nameEl = document.querySelector("#userName");
// const ageEl = document.querySelector("#userAge");
// const jobEl = document.querySelector("#userJob");

// const jsonString =
//   '{"name": "Олексій", "age": 28, "job": "Frontend Developer"}';

// const parseJson = JSON.parse(jsonString);

// try {
//   const { name, age, job } = parseJson;

//   nameEl.textContent = name;
//   ageEl.textContent = age;
//   jobEl.textContent = job;
// } catch (error) {
//   console.log(`Data error`);
// }

//! Завдання: У тебе є масив об'єктів (імітація бази даних товарів). Потрібно отримати лише назви товарів, ціна яких менша за 1000.

// const products = [
//   { name: "Phone", price: 1500 },
//   { name: "Headphones", price: 500 },
//   { name: "Mouse", price: 300 },
//   { name: "Monitor", price: 2000 },
// ];

// const finderPrice = products.filter((el) => el.price < 1000);

// const normalaizer = finderPrice.map((names) => names.name);
// console.log("🚀 ~ normalaizer:", normalaizer);

//! Завдання: Користувач додав товари в кошик.
//! Потрібно порахувати загальну суму замовлення, враховуючи кількість кожного товару.

// const cart = [
//   { title: "Apple", price: 40, quantity: 3 },
//   { title: "Banana", price: 20, quantity: 5 },
//   { title: "Milk", price: 35, quantity: 2 },
// ];

// const count = cart.reduce((accum, el) => {
//   accum = accum + el.price * el.quantity;
//   return accum;
// }, 0);
// console.log("🚀 ~ count:", count);

//! Завдання: Знайти користувача за його ID у списку, який прийшов у форматі JSON, і вивести його дані у зручному форматі.

// const usersJSON =
//   '[{"id": 1, "name": "Ivan"}, {"id": 2, "name": "Maria"}, {"id": 3, "name": "Oleg"}]';

// const searchId = 2;

// const fromJson = JSON.parse(usersJSON);

// const searchUser = fromJson.find((el) => {
//   if (el.id === searchId) {
//     console.log(`Hello: ${el.name}`);
//   }
// });

//! Що треба зробити в JS:
//! Повісити слухач події mousemove на блок #box.
// !В об'єкті події (event) знайти властивості offsetX та offsetY (або clientX/Y).
//! Записувати ці значення у відповідні span.

// const items = {
//   boxEl: document.querySelector("#box"),
//   poXEl: document.querySelector("#posX"),
//   poYEl: document.querySelector("#posY"),
// };

// items.boxEl.addEventListener("mousemove", (event) => {
//   items.poXEl.textContent = event.offsetX;
//   items.poYEl.textContent = event.offsetY;
// });

//! Завдання: Створити поле для введення пароля. Якщо пароль коротший за 8 символів — рамка інпуту має бути червоною, якщо 8 або більше — зеленою. Також динамічно виводити кількість введених символів.

// const items = {
//   inputEl: document.querySelector("#passwordInput"),
//   spanText: document.querySelector("#charCount"),
// };

// items.inputEl.addEventListener("input", (event) => {
//   const value = event.target.value.length;

//   items.spanText.textContent = value;

//   if (value < 8) {
//     items.spanText.style.color = "tomato";
//     items.inputEl.style.borderColor = "tomato";
//   } else {
//     items.spanText.style.color = "green";
//     items.inputEl.style.borderColor = "green";
//   }
// });

//! Завдання: Реалізувати модальне вікно, яке відкривається кнопкою, але закривається при натисканні на клавішу Escape.

// const openButton = document.querySelector("#openBtn");
// const divModal = document.querySelector("#modal");
// const closeButton = document.querySelector("#closeBtn");

// openButton.addEventListener("click", () => {
//   divModal.style.display = "block";
// });

// closeButton.addEventListener("click", () => {
//   divModal.style.display = "none";
// });

// window.addEventListener("keydown", (event) => {
//   if (event.key === "Escape") {
//     divModal.style.display = "none";
//   }
// });

//! Використай метод масиву .sort().
//! Усередині колбек-функції використай (a, b) => a.localeCompare(b).
// Виведи результат у консоль.
// Питання для роздумів: Чому звичайний .sort() (без параметрів) може поставити "Ігор" після "Ярослав", а localeCompare зробить це правильно?

// const names = ["Юрій", "Андрій", "Ігор", "Євген", "Богдан"];

// const normalaizerName = names.sort((a, b) => a.localeCompare(b));
// console.log("🚀 ~ normalaizerName:", normalaizerName);

//! Рівень "Новачок": "Запам'ятай моє ім'я"
// Завдання: Створити поле вводу, де користувач пише своє ім'я. При натисканні "Зберегти" ім'я записується в localStorage. При оновленні сторінки ім'я має автоматично з'являтися в заголовку.

// Що треба зробити в JS:
// При кліку на saveBtn брати значення з інпуту і зберігати в localStorage під ключем "userName".
// Одразу оновлювати текст у h1.
// Головне: При завантаженні скрипта (на самому початку) перевірити localStorage.getItem('userName'). Якщо там щось є — підставити це в заголовок.
// При кліку на clearBtn видаляти запис через .removeItem().

// const checker = localStorage.getItem("userName") || [];
// console.log("🚀 ~ checker:", checker);

// const items = {
//   titleEl: document.querySelector("#greeting"),
//   nameInputEl: document.querySelector("#nameInput"),
//   buttonSave: document.querySelector("#saveBtn"),
//   buttonDelete: document.querySelector("#clearBtn"),
// };

// items.buttonSave.addEventListener("click", () => {
//   const value = items.nameInputEl.value.trim();

//   const save = localStorage.setItem("userName", value);

//   items.titleEl.textContent = `Hello ${value}`;

//   localStorage.clear();
// });

//! FizzBuzz: Напиши цикл від 1 до 50. Якщо число ділиться на 3, виводь "Fizz", якщо на 5 — "Buzz", а якщо на обидва (і на 3, і на 5) — "FizzBuzz". В інших випадках виводь просто число.

// function foo() {
//   for (let i = 0; i < 50; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FIZZ BUZZ");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else {
//       console.log(i);
//     }
//   }
// }

// foo();

//! Пошук максимуму: Напиши функцію, яка приймає масив чисел і повертає найбільше з них (не використовуючи Math.max()).

// function checker(nums) {
//   return nums.reduce((accum, el) => {
//     if (el > accum) {
//       return el;
//     }
//     return accum;
//   }, nums[0]);
// }

// const numbers = [23, 4, 6, 78];
// console.log(checker(numbers));

// !Фільтрація та трансформація (Easy)
// У тебе є масив об'єктів, які представляють товари.
// Відфільтруй товари, ціна яких більша за 100.
// Створи новий масив, що містить лише назви цих товарів у верхньому регістрі (UPPERCASE).

// const products = [
//   { name: "apple", price: 50 },
//   { name: "laptop", price: 1200 },
//   { name: "phone", price: 500 },
//   { name: "pen", price: 10 },
// ];

// const filteredItems = products
//   .filter((el) => {
//     if (el.price > 100) {
//       return el;
//     }
//   })
//   .map((el) => el.name.toUpperCase());
// console.log("🚀 ~ filteredItems:", filteredItems);

//! Знайди першого користувача, якому менше 18 років
// Перевір, чи всі користувачі в масиві мають поле email.

// const users = [
//   { id: 1, name: "John", age: 25, email: "john@example.com" },
//   { id: 2, name: "Jane", age: 17, email: "jane@example.com" },
//   { id: 3, name: "Bob", age: 30 },
// ];

// const finder = users.find((el) => {
//   if (el.age < 18) {
//     return el;
//   }
// });
// console.log("🚀 ~ finder:", finder);

//! Напиши функцію, яка приймає рядок (наприклад, список тегів через кому) і:
//! Розбиває його на масив.
//! Видаляє зайві пробіли на початку та в кінці кожного слова.
//! Видаляє дублікати (якщо тег повторюється).

// const rawTags = "  js, react,  html, js, css , react  ";

// const normalaizer = rawTags.split(",").join(",");
// console.log("🚀 ~ normalaizer:", normalaizer);

//! Обчислення через reduce (Medium)
//! Потрібно порахувати загальну суму замовлення, враховуючи кількість кожного товару.
// const cart = [
//   { title: "Item 1", price: 10, quantity: 2 },
//   { title: "Item 2", price: 50, quantity: 1 },
//   { title: "Item 3", price: 20, quantity: 4 },
// ];

// const sum = cart.reduce((accum, el) => {
//   return accum + el.price * el.quantity;
// }, 0);
// console.log("🚀 ~ sum:", sum);

//! Фільтр списку (input → список)
// Умова:
// При введенні тексту в інпут показувати тільки ті елементи списку, які містять введений текст (без урахування регістру).

// const items = {
//   inputSearch: document.querySelector("#search"),
//   listEl: document.querySelectorAll("#list > *"),
// };

// items.inputSearch.addEventListener("input", (event) => {
//   const value = event.target.value.trim().toLowerCase();

//   items.listEl.forEach((el) => {
//     const text = el.textContent.toLowerCase();

//     if (text.includes(value)) {
//       el.style.display = "block";
//     } else {
//       el.style.display = "none";
//     }
//   });
// });

//! Лічильник кліків

// Умова:
// Кнопка збільшує число на 1 при кожному кліку.
// Додай кнопку Reset, яка обнуляє лічильник.

// const items = {
//   countText: document.querySelector("#count"),
//   buttonPlus: document.querySelector("#inc"),
//   buttonReset: document.querySelector("#reset"),
// };

// let count = 0;

// items.buttonPlus.addEventListener("click", () => {
//   count++;
//   items.countText.textContent = count;
// });

// items.buttonReset.addEventListener("click", () => {
//   count = 0;

//   items.countText.textContent = 0;
// });

//! Завдання: "Магазин гаджетів"
// Тобі потрібно створити три файли та налаштувати зв'язок між ними за допомогою Named Export та Default Export.

//! 1. Файл utils.js (Допоміжні функції)
// У цьому файлі ми будемо використовувати Named Export (іменований експорт), тому що функцій може бути багато.
// Створи функцію calculateDiscount(price, percent), яка повертає ціну зі знижкою.
// Створи константу CURRENCY, яка дорівнює рядку '$'.
// Експортуй їх обидва окремо.

//! 2. Файл Product.js (Основний компонент)
// У цьому файлі ми використаємо Default Export (експорт за замовчуванням), оскільки цей файл відповідає за один конкретний об'єкт.
// Створи клас або функцію-конструктор Product, яка приймає name та price.
// Експортуй цей клас як дефолтний.

//! 3. Файл main.js (Точка входу)
// Тут тобі потрібно зібрати все докупи:
// Імпортуй calculateDiscount та CURRENCY з файлу utils.js.
// Імпортуй Product з файлу Product.js (спробуй дати йому іншу назву при імпорті, наприклад Gadget).

//! Логіка:
// Створи екземпляр продукту (наприклад, iPhone за 1000).
// Вирахуй знижку 10% за допомогою імпортованої функції.
// Виведи в консоль повідомлення: "Товар: iPhone, Ціна зі знижкою: 900 $", використовуючи імпортовану константу валюти.

// import { calculateDiscount, CURRENCY } from "./utils.js";
// import { Product } from "./products.js";

// const productItem = new Product("Iphone", 1000);
// const { name, price } = productItem;
// let priceDisc = calculateDiscount(price, 10);

// console.log(
//   `Товар: iPhone, оригінальна ціна ${price}${CURRENCY} \nЦіна зі знижкою: ${priceDisc}${CURRENCY}`
// );

// console.log(productItem, calculateDiscount);

//! 1️⃣ Очистка рядка

// Напиши функцію, яка:
// 	•	приймає рядок
// 	•	прибирає пробіли з початку і кінця
// 	•	робить всі літери малими

// function cleanString(text) {
//   return text.trim().toLowerCase();
// }
// console.log(cleanString("  HeLLo WoRLD  "));

//! 2️⃣ Перевірка парного числа

// function isEven(numbers) {
//   if (numbers % 2 === 0) {
//     console.log("even");
//   } else {
//     console.log("odd");
//   }
// }

// isEven(4); // true
// isEven(7); // false

//! SUMARY
// const sum = [1, 2, 3, 4];

// const sumary = sum.reduce((acc, num) => {
//   return acc + num;
// },0 );
// console.log("🚀 ~ sumary:", sumary);

//! 6️⃣ Порахувати кількість слів

// function countWords(word) {
//   console.log(word.split(" ").length);
// }

// countWords("JS is awesome"); // 3

//! 7️⃣ Перевернути рядок

// const text = "hello";

// const text1 = text.split("").toReversed().join("");
// console.log("🚀 ~ text1:", text1);

//! 8️⃣ Фільтр чисел

// function filterPositive(num) {
//   num.filter((el) => {
//     if (el > 0) {
//       console.log(el);
//     } else {
//       return el;
//     }
//   });
// }

// filterPositive([-1, 3, -5, 7, 0]); // [3, 7]

//! 🟠 Рівень 3 — обʼєкти
// 9️⃣ Підрахунок середнього балу

// const grades = {
//   math: 90,
//   english: 80,
//   biology: 70,
// };

// const key = Object.values(grades);

// const result =
//   key.reduce((acc, el) => {
//     return acc + el;
//   }, 0) / key.length;
// console.log("🚀 ~ result:", result);

//! 🔟 Перетворити обʼєкт у масив

// function toArray(el) {
//   console.log(Object.entries(el));
// }

// toArray({ a: 1, b: 2 });
// // [["a", 1], ["b", 2]]

// 1️⃣1️⃣ FizzBuzz (але трохи складніше)

//! Виведи числа від 1 до 50:
// 	•	кратні 3 → "Fizz"
// 	•	кратні 5 → "Buzz"
// 	•	кратні 3 і 5 → "FizzBuzz"

// for (let i = 0; i < 50; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   }
// }

//! 1️⃣2️⃣ Паліндром

// function isPalindrome(word) {
//   const first = word.split("").reverse().join("");

//   if (word === first) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// }

// isPalindrome("level"); // true
// isPalindrome("hello"); // false

// ! 🟢 Рівень 1 — основи Promise

// 1️⃣ Створення Promise

// Створи функцію wait(ms), яка:
// 	•	повертає Promise
// 	•	резолвиться через ms мс
// 	•	нічого не повертає

// function wait(ms) {
//   return new Promise((resolve) => {
//     resolve();
//   });
// }

// wait(1000).then(() => console.log("done"));

//! Умови:
// 	•	якщо число > 0 → resolve(“ok”)
// 	•	інакше → reject(“error”)

// function checkNumber(num) {
//   return new Promise((resolve, reject) => {
//     if (resolve) {
//       resolve("OK");
//     } else {
//       reject("error");
//     }
//   });
// }

// checkNumber(5).then(console.log).catch(console.error);

// checkNumber(-1).catch(console.error);

// !
// new Promise((resolve) => {
//   // через 1 сек виведи "done"

//   setTimeout(() => {
//     console.log("done 1s");
//   }, 1000);
// });

// !

// new Promise((resolve, reject) => {
//   const num = -3;

//   // якщо num > 0 → resolve("ok")
//   // інакше → reject("error")

//   if (num > 0) {
//     resolve("ok");
//   } else {
//     reject("error");
//   }
// })
//   .then(console.log)
//   .catch(console.error);

// !
// new Promise((resolve) => {
//   resolve(5);
// })
//   .then((result) => {
//     return result * 2;
//   })
//   .then((result) => {
//     return result + 3;
//   })
//   .then((show) => {
//     console.log(show);
//   });

// помножити на 2
// додати 3
// вивести результат (має бути 13)

//! Створи Promise, який відразу резолвиться зі значенням 100
// Помнож його на 3
// Відніми 50
// Виведи результат (має бути 250)

// const prom = new Promise((resolve, reject) => {
//   resolve(100);
// })
//   .then((result) => {
//     return result * 3;
//   })
//   .then((result) => {
//     return result - 50;
//   })
//   .then((show) => {
//     console.log(show);
//   });

//! Створи Promise, який резолвиться через 1 секунду зі значенням "hello"
// Перетвори його на верхній регістр (uppercase)
// Додай до нього " world!"
// Виведи результат (має бути "HELLO world!")

// const prom = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("hello");
//   }, 1000);
// })
//   .then((up) => {
//     return up.toUpperCase();
//   })
//   .then((add) => {
//     return `${add} world`;
//   })
//   .then((show) => {
//     console.log(show);
//   });

//! Створи Promise, який резолвиться зі значенням 8
// Піднеси його до квадрата (8² = 64)
// Відніми від цього значення 4
// Помнож результат на 2
// Виведи результат (має бути 120)

// const prom = new Promise((resolve, reject) => {
//   resolve(8);
// })
//   .then((result) => {
//     return result ** 2;
//   })
//   .then((res) => {
//     return res - 4;
//   })
//   .then((res) => {
//     return res * 2;
//   })
//   .then((show) => {
//     console.log(show);
//   });

//! Створи Promise, який резолвиться зі значенням 10
// Поділи його на 2
// Відніми 3
// Помнож на 4
// Виведи результат

// const prom = new Promise((resolve, reject) => {
//   resolve(10);
// })
//   .then((res) => {
//     return res / 2;
//   })
//   .then((res) => {
//     return res - 3;
//   })
//   .then((res) => {
//     return res * 4;
//   })
//   .then((show) => {
//     console.log(show);
//   });

//! Створи Promise, який резолвиться через 2 секунди зі значенням "JS"
// Перетвори його на "I love JS"
// Додай до кінця " very much!"
// Виведи результат (має бути "I love JS very much!")

// const prom = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("JS");
//   }, 2000);
// })
//   .then((mod) => {
//     return `${mod} very much!`;
//   })
//   .then((show) => {
//     console.log(show);
//   });

//! Створи Promise, який резолвиться зі значенням 20
// Поділи на 4                    → має стати 5
// Помнож на 10                   → має стати 50
// Відніми 8                      → має стати 42
// Додай 100                      → має стати 142
// Виведи результат (142)

// const prom = new Promise((resolve, reject) => {
//   resolve("20");
// })
//   .then((res) => {
//     return res / 4;
//   })
//   .then((res) => {
//     return res * 10;
//   })
//   .then((res) => {
//     return res - 8;
//   })
//   .then((res) => {
//     return res + 100;
//   })
//   .then((show) => {
//     console.log(show);
//   });

//! Створи Promise, який резолвиться зі значенням "java"
// Додай до рядка "script"         → "javascript"
// Перетвори на верхній регістр    → "JAVASCRIPT"
// Додай на початок "I love "      → "I love JAVASCRIPT"
// Додай в кінець "!!!"            → "I love JAVASCRIPT!!!"
// Виведи результат

// const prom = new Promise((resolve, reject) => {
//   resolve("javascript");
// })
//   .then((res) => {
//     return res.toUpperCase();
//   })
//   .then((res) => {
//     return `I Love ${res}`;
//   })
//   .then((res) => {
//     return `${res}!!!`;
//   })
//   .then((show) => {
//     console.log(show);
//   });

//! Створи Promise, який резолвиться ЧЕРЕЗ 1.5 секунди зі значенням 7
// Помнож на 3                    → 21
// Додай 9                        → 30
// Поділи на 2                    → 15
// Виведи результат (15)
// (Підказка: тобі знадобиться setTimeout у конструкторі Promise)

// const prom = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(7);
//   }, 1500);
// })
//   .then((res) => {
//     return res * 3;
//   })
//   .then((res) => {
//     return res + 9;
//   })
//   .then((res) => {
//     return res / 2;
//   })
//   .then((show) => {
//     console.log(show);
//   });

//! Завдання 1 (просте)
// Напиши асинхронну функцію getNumber(), яка:

// Повертає Promise, що резолвиться зі значенням 42 через 1 секунду.
// У іншій async-функції виклич цю функцію в try.
// У catch виведи в консоль "Помилки не було, але catch спрацював для прикладу".
// Виведи отримане число.

// function getNumber() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(42);
//     }, 1000);
//   });
// }

// getNumber()
//   .then((number) => {
//     console.log("Отримано число:", number);
//   })
//   .catch((error) => {
//     console.log("Помилки не було, але catch спрацював для прикладу");
//   });

//! Завдання 3
// Напиши функцію getUserRole(userId), яка повертає Promise:

// Якщо userId === 1 → resolve("admin")
// Якщо userId === 2 → resolve("user")
// В іншому випадку → reject("Користувача не знайдено")

// Потім виклич її тричі:

// з 1 (має вивести "Роль: admin")
// з 2 (має вивести "Роль: user")
// з 999 (має вивести помилку через .catch())

// function getUserRole(userId) {
//   return new Promise((resolve, reject) => {
//     if (userId === 1) {
//       resolve("admin");
//     } else if (userId === 2) {
//       resolve("user");
//     } else {
//       reject("Користувача не знайдено");
//     }
//   });
// }

// getUserRole(1).then((res) => {
//   console.log(`Твоя роль: ${res}`);
// });

// getUserRole(2).then((res) => {
//   console.log(`Твоя роль: ${res}`);
// });

// getUserRole(4).catch((error) => {
//   console.log(`${error}`);
// });

//! Завдання 4
// Напиши функцію divideNumbers(a, b), яка повертає Promise:

// Якщо b === 0 → reject("Ділення на нуль заборонено!")
// Інакше → resolve(a / b)

// function divideNumbers(a, b) {
//   return new Promise((resolve, reject) => {
//     if (b === 0) {
//       reject("Ділення на нуль заборонено!");
//     } else {
//       resolve(a / b);
//     }
//   });
// }

// // Виклич її:
// divideNumbers(10, 2).then((res) => {
//   console.log(`Resutl: ${res}`);
// });

// divideNumbers(10, 0).catch((error) => {
//   console.log(`Result: ${error}`);
// });

//! Завдання 5
// Напиши функцію getWeather(city), яка повертає Promise:

// Якщо city === "Kyiv" → resolve("Сонячно, +5°C")
// Якщо city === "London" → resolve("Дощ, +10°C")
// Інакше → reject("Погоду для цього міста не знайдено")

// Виклич з "Kyiv" і з "Mars" — перевір обидва випадки.

// function getWeather(city) {
//   return new Promise((resolve, reject) => {
//     if (city === "Kyiv") {
//       resolve("Сонячно, +5°C");
//     } else if (city === "London") {
//       resolve("Дощ, +10°C");
//     } else {
//       reject("Погоду для цього міста не знайдено");
//     }
//   });
// }

// getWeather("Kyiv").then((res) => {
//   console.log(res);
// });

// getWeather("London").then((res) => {
//   console.log(res);
// });

// getWeather("Mars").catch((error) => {
//   console.log(error);
// });
