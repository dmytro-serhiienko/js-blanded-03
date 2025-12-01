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

const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
];

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

const plus = document.querySelector("#increaseBtn");
const minus = document.querySelector("#decreaseBtn");

const monitor = document.querySelector("#counter");

let counter = 0;

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

const team = [
  { name: "Bob", age: 22 },
  { name: "Tesla", age: 33 },
  { name: "Rebeca", age: 24 },
  { name: "Latina", age: 26 },
];

const toJson = JSON.stringify(team, null, 1);
// console.log("🚀 ~ toJson:", toJson);

try {
  const toJs = JSON.parse(toJson);
} catch (error) {
  console.log("⚠ JSON is not valid!");
  console.log(error.name);
}
