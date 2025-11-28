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
