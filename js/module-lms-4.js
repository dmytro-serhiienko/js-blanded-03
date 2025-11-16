// Ось 5 задач на використання spread і rest операторів у JavaScript, від найлегших до складніших:
//? Задача 1 (Дуже легка): Копіювання масиву
// Створи функцію, яка приймає масив чисел і повертає його копію, використовуючи spread оператор.
// javascript// Приклад:
// copyArray([1, 2, 3]); // [1, 2, 3]

// const num = [1, 2, 3];

// function dublicat(nb) {
//   return [...nb];
// }
// console.log("🚀 ~ dublicat ~ dublicat:", dublicat(num));

//? Задача 2 (Легка): Об'єднання масивів
// Напиши функцію, яка приймає два масиви і об'єднує їх в один, використовуючи spread.
// javascript// Приклад:
// mergeArrays([1, 2], [3, 4]); // [1, 2, 3, 4]

// const firstArr = [1, 2];
// console.log("🚀 ~ firstArr:", firstArr);
// const secondArr = [3, 4];
// console.log("🚀 ~ secondArr:", secondArr);

// // const junto = firstArr.concat(secondArr);
// // console.log("🚀 ~ junto:", junto);

// function arrayKley(par) {
//   return [...firstArr, ...secondArr];
// }
// console.log("🚀 ~ arrayKley ~ arrayKley:", arrayKley());

// Задача 4 (Середня): Перший і решта
// Напиши функцію, яка приймає масив і повертає об'єкт з двома властивостями: first (перший елемент) і rest (решта елементів).
// javascript// Приклад:
// splitArray([1, 2, 3, 4]); // { first: 1, rest: [2, 3, 4] }
// Задача 5 (Середня): Оновлення об'єкта
// Створи функцію, яка приймає об'єкт і нові властивості, і повертає новий об'єкт з оновленими/доданими властивостями, використовуючи spread.
// javascript// Приклад:
// updateUser({ name: 'Іван', age: 25 }, { age: 26, city: 'Київ' });
// // { name: 'Іван', age: 26, city: 'Київ' }

// ! Створи новий масив, де кожна ціна збільшена на 20%.

// const prices = [100, 200, 300];

// const plus = prices.map((el, ind) => {
//   return el * 1.2;
// });
// console.log("🚀 ~ plus:", plus);

//! Зроби першу букву великою.

// const names = ["ivan", "petro", "olena"];

// const normal = [];
// console.log("🚀 ~ normal:", normal);

// const small = names.map((el) => {
//   const first = el.slice(0, 1).toUpperCase();
//   //   console.log("🚀 ~ first:", first);

//   const rest = el.slice(1);
//   //   console.log("🚀 ~ rest:", rest);

//   const result = first + rest;
//   //   console.log("🚀 ~ result:", result);
//   return normal.push(result);
// });

// // ! 3. filter

// //! Залиш у масиві лише парні числа:

// const nums = [1, 2, 3, 4, 5, 6];

// const par = nums.filter((num) => {
//   return num % 2 === 0;
// });
// console.log("🚀 ~ par:", par);

// // ! Фільтр за довжиною рядків: Залиш тільки рядки довжиною > 3.

// const words = ["sun", "banana", "cat", "javascript"];

// const word = words.filter((el) => {
//   return el.length > 3;
// });
// console.log("🚀 ~ word:", word);

// ! find

// Знайди перший елемент > 50:

// const arr = [10, 20, 55, 60];

// const findEl = arr.find((num) => {
//   return num > 50;
// });
// console.log("🚀 ~ findEl:", findEl);

//! Знайди користувача з email:
// Знайди де email = "ira@mail.com".

// const users = [
//   { name: "Oleg", email: "o@gmail.com" },
//   { name: "Ira", email: "ira@mail.com" },
// ];

// const findUser = users.find((user) => {
//   return user.email === "ira@mail.com";
// });
// console.log("🚀 ~ findUser:", findUser);

// ! 5. some / every
// Перевір, чи є в масиві хоча б одне число > 100:

// const nums = [5, 20, 50, 99];

// const num = nums.some((value) => value > 100);
// console.log("🚀 ~ num:", num);

// // Перевір, чи всі числа парні:
// const numbers = [2, 4, 6, 7];

// const proverka = numbers.every((num) => num % 2 === 0);
// console.log("🚀 ~ proverka:", proverka);

//! sort

// Відсортуй числа за зростанням:

// const n = [15, 2, 300, 7];

// const num = n.toSorted((a, b) => {
//   return a - b;
// });
// console.log("🚀 ~ num:", num);

// const langs = ["php", "python", "c++", "javascript"];

// const sortWord = langs.toSorted((a, b) => {
//   return a.localeCompare(b);
// });
// console.log("🚀 ~ sortWord:", sortWord);

//! reduce;

// // Порахуй суму:
// const arr = [1, 2, 3, 4];

// const result = arr.reduce((accum, num) => {
//   return accum + num;
// }, 0);
// console.log("🚀 ~ result:", result);

// // Порахуй, скільки разів зустрічається кожне слово:
// const words = ["apple", "banana", "apple", "orange", "banana", "apple"];

// const res = words.reduce((accum, word) => {
//   if (accum[word]) {
//     accum[word] = accum[word] + 1;
//   } else {
//     accum[word] = 1;
//   }
//   return accum;
// }, {});
// console.log("🚀 ~ res:", res);

// { apple: 3, banana: 2, orange: 1 }

//!! 1.	Використай reduce для підрахунку загальної суми балів кожного студента.
// 2.	Результат має бути об’єктом, де ключ — ім’я студента, а значення — сума балів.

// const students = [
//   { name: "Oleg", score: 80 },
//   { name: "Ira", score: 90 },
//   { name: "Oleg", score: 70 },
//   { name: "Stepan", score: 85 },
//   { name: "Ira", score: 95 },
// ];

// const result = students.reduce((accum, el) => {
//   if (accum[el.name]) {
//     accum[el.name] = accum[el.name] + el.score;
//   } else {
//     accum[el.name] = el.score;
//   }
//   return accum;
// }, {});
// console.log("🚀 ~ result:", result);

// { Oleg: 150, Ira: 185, Stepan: 85 }

// ! Є масив покупок у магазині:
// const purchases = [
//   { item: "apple", quantity: 2, price: 10 },
//   { item: "banana", quantity: 3, price: 5 },
//   { item: "apple", quantity: 1, price: 10 },
//   { item: "orange", quantity: 5, price: 7 },
//   { item: "banana", quantity: 2, price: 5 },
// ];

// const result = purchases.reduce((accum, el) => {
//   if (accum[el.item]) {
//     accum[el.item] = accum[el.item] + el.quantity;
//   } else {
//     accum[el.item] = el.quantity;
//   }
//   return accum;
// }, {});
// console.log("🚀 ~ result:", result);

// Завдання:
// 	1.	Використати reduce, щоб порахувати загальну кількість кожного товару.
// 	2.	Результат повинен бути об’єктом, де ключ — назва товару, а значення — сума кількості.

//     { apple: 3, banana: 5, orange: 5 }

// !!!!!!!
// const purchases = [
//   { item: "apple", quantity: 2, price: 10 },
//   { item: "banana", quantity: 3, price: 5 },
//   { item: "apple", quantity: 1, price: 10 },
//   { item: "orange", quantity: 5, price: 7 },
//   { item: "banana", quantity: 2, price: 5 },
// ];

// const result = purchases.reduce((accum, el) => {
//   if (accum[el.item]) {
//     accum[el.item] = accum[el.item] + el.quantity * el.price;
//   } else {
//     accum[el.item] = el.quantity * el.price;
//   }
//   return accum;
// }, {});
// console.log("🚀 ~ result:", result);

// Завдання:
// 	1.	Використати reduce для підрахунку загальної вартості кожного товару.
// 	2.	Результат має бути об’єктом, де ключ — назва товару, а значення — сума вартості(quantity × price).

//     { apple: 30, banana: 25, orange: 35 }

// !

// const purchases = [
//   { item: "apple", quantity: 2, price: 10 },
//   { item: "banana", quantity: 3, price: 5 },
//   { item: "apple", quantity: 1, price: 10 },
//   { item: "orange", quantity: 5, price: 7 },
//   { item: "banana", quantity: 2, price: 5 },
// ];

// const filterItem = purchases.filter((el) => {
//   return el.price > 5;
// });
// console.table("🚀 ~ filterItem:", filterItem);

// const sum = filterItem.reduce((accum, el) => {
//   if (accum[el.item]) {
//     accum[el.item] = accum[el.item] + el.price * el.quantity;
//   } else {
//     accum[el.item] = el.price * el.quantity;
//   }
//   return accum;
// }, {});
// console.log("🚀 ~ sum:", sum);

// Завдання:
// 	1.	Спочатку відфільтрувати товари, де price > 5.
// 	2.	Потім використати reduce, щоб підрахувати загальну вартість кожного товару (quantity × price).
// 	3.	Результат повинен бути об’єктом: ключ — назва товару, значення — сума вартості.
// { apple: 30, orange: 35 }

// !  Задача 1: Підрахунок букв у словах

// const words = ["apple", "banana", "orange", "apple", "kiwi"];

// const word = words.reduce((accum, word, i) => {
//   if (accum[word]) {
//     accum[word] = accum[word] + 1;
//   } else {
//     accum[word] = 1;
//   }
//   return accum;
// }, {});
// console.log("🚀 ~ word:", word);

// Завдання:
// 	1.	Використати reduce, щоб порахувати, скільки разів зустрічається кожне слово.
// 	2.	Результат — об’єкт, де ключ — слово, значення — кількість.

//! Задача 2: Знайти перший товар з великою кількістю

// const purchases = [
//   { item: "apple", quantity: 2 },
//   { item: "banana", quantity: 3 },
//   { item: "orange", quantity: 6 },
//   { item: "kiwi", quantity: 1 },
// ];

// const result = purchases.find((el) => {
//   return el.quantity > 5;
// });
// console.log("🚀 ~ result:", result);

// •	Використати find, щоб знайти перший товар, у якого quantity > 5.

// ! Задача 3: Перевірка всіх оцінок
// const scores = [80, 90, 100, 75, 60];

// const result = scores.every((el) => {
//   return el >= 60;
// });
// console.log("🚀 ~ result:", result);

// const result2 = scores.some((el) => {
//   return el === 100;
// });
// console.log("🚀 ~ result2:", result2);
// Завдання:
// 	•	Використати every, щоб перевірити, чи всі оцінки >= 60.
// 	•	Використати some, щоб перевірити, чи є хоча б одна оцінка = 100.

// ! Задача 4: Сортування користувачів

// const users = [
//   { name: "Oleg", age: 25 },
//   { name: "Ira", age: 22 },
//   { name: "Stepan", age: 30 },
// ];

// const result = users.toSorted((a, b) => {
//   return a.age - b.age;
// });
// console.log("🚀 ~ result:", result);

// const result2 = users.toSorted((a, b) => {
//   return a.name.localeCompare(b.name);
// });
// console.log("🚀 ~ result2:", result2);

// Завдання:
// 	•	Відсортувати користувачів за віком від молодшого до старшого.
// 	•	Потім відсортувати за ім’ям в алфавітному порядку.

//! Задача 5: Загальна вартість товарів

// const purchases = [
//   { item: "apple", quantity: 2, price: 10 },
//   { item: "banana", quantity: 3, price: 5 },
//   { item: "orange", quantity: 5, price: 7 },
// ];

// const result = purchases.reduce((accum, el) => {
//   return accum + el.quantity * el.price;
// }, 0);
// console.log("🚀 ~ result:", result);

// Використати reduce, щоб порахувати загальну вартість всіх товарів разом (quantity × price).

// ! Завдання 1 (аналог styles + logItems)

// Створіть масив colors з елементами "red", "green".
// 	1.	Додайте в початок масиву елемент "blue".
// 	2.	Знайдіть елемент "green" та замініть його на "lime".
// 	3.	Напишіть функцію printItems(array), яка виводить кожен елемент у форматі:
// "Елемент <номер>: <значення>"
// (нумерація з 1).

// const colors = ["red", "green"];
// colors.unshift("blue");
// console.log("🚀 ~ colors:", colors);

// const index = colors.indexOf("green");
// console.log("🚀 ~ index:", index);

// if (index !== -1) {
//   colors[index] = "lime";
// }
// console.log(colors);

// Задачки для практики JavaScript
//! Рівень: Початківець

// Парні числа
// Напиши функцію, яка приймає масив чисел і повертає новий масив тільки з парними числами.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const par = numbers.filter((el) => {
//   return el % 2 === 0;
// });
// console.log("🚀 ~ par:", par);

//! Реверс рядка
// Створи функцію, яка перевертає рядок задом наперед без використання методу reverse().

// const word = "Hello my name is Dmytro";

// const wordToArr = word.split("").toReversed();
// console.log("🚀 ~ wordToArr:", wordToArr);

// const word1 = wordToArr.join("");
// console.log("🚀 ~ word1:", word1);

//!!!!!!!!!!!!!!!!! Підрахунок голосних
// Напиши функцію, яка підраховує кількість голосних літер (a, e, i, o, u) у рядку.

// const word = ["rrr"];

// const wordCut = word.join(" ");
// console.log("🚀 ~ wordCut:", wordCut);

// const asd = wordCut.split("");
// console.log("🚀 ~ asd:", asd);

// const checker = asd.filter((el) => {
//   if ((el === "a", "e", "i", "o", "u")) {
//     console.log(`знайшов голосну`);
//   } else {
//     console.log(`Шукай далі`);
//   }
// });

// Факторіал
// Реалізуй функцію для обчислення факторіалу числа (наприклад, 5! = 5×4×3×2×1).

// Паліндром
// Створи функцію, яка перевіряє, чи є слово паліндромом (читається однаково в обох напрямках).

// const word = "olo";

// const word1 = word.split("").toReversed().join("");
// console.log("🚀 ~ word1:", word1);

// if (word === word1) {
//   console.log(`Norm palindrom`);
// } else {
//   console.log(`Esche ischi`);
// }

//! Легкі задачі

// 1. Перевірка логіна

const logins = ["Mango", "Ajax", "Poly", "Dmytro"];

// const checker = logins.includes("Poly") ? true : false;
// console.log("🚀 ~ checker:", checker);

// function checker(arr) {
//   for (const login of arr) {
//     if (login === "Poly") {
//       return "Login its ok";
//     }
//   }

//   return "Not find";
// }

// console.log(checker(logins));

//! 2. Підрахунок слів
// const sentence = "Hello my name is Dmytro";

// const wordCut = sentence.split(" ").length;
// console.log("🚀 ~ wordCut:", wordCut);

// ! 3. Перевертання слова
// const word = "Hello";

// const reverse = word.split("").toReversed().join("");
// console.log("🚀 ~ reverse:", reverse);

// ! 4. Мінімальне число

const numbers = [5, 2, 17, 1, -3, 8];

//? Variant 1
// const minNumber = Math.min(...numbers);
// console.log("🚀 ~ minNumber:", minNumber);

//? Variant 2
// console.log(Math.min(...numbers));

//? Variant 3
// const minNumber = numbers.reduce((accum, num) => {
//   if (accum > num) {
//     return accum + num;
//   } else {
//     return accum;
//   }
// }, 0);
// console.log("🚀 ~ minNumber:", minNumber);

//! 5. Форматування імені
// const rawName = "dMyTrO";

// // prettier-ignore
// const little = rawName
//     .split("")
//     .slice(1)
//     .join("")
//     .toLowerCase();
// console.log("🚀 ~ little:", little);

// // prettier-ignore
// const big = rawName
//     .split("")
//     .slice(0, 1)
//     .join("")
//     .toUpperCase()
// console.log("🚀 ~ big:", big);

// const result = big.concat(little);
// console.log("🚀 ~ result:", result);

//!  6. Фільтр за віком
// const users = [
//   { name: "Oleg", age: 25 },
//   { name: "Ira", age: 17 },
//   { name: "Stepan", age: 30 },
//   { name: "Nazar", age: 12 },
// ];

//? variant 1
// const age = users.filter((age) => {
//   return age.age >= 18;
// });
// console.log("🚀 ~ age:", age);

//? variant 2
// function checker(el) {
//   for (const element of users) {
//     if (element.age > 18) {
//       console.log(`Це: ${element.name}, йому: ${element.age} років.`);
//     }
//   }
// }

// checker(users);

//! 7. Унікальні значення
// const nums = [1, 2, 2, 3, 5, 1, 7, 7, 9];

// const unicNumber = nums.reduce((accum, el, ind, arr) => {
//   if (!accum.includes(el)) {
//     accum.push(el);
//   }
//   return accum;
// }, []);
// console.log("🚀 ~ unicNumber:", unicNumber);

//! 8. Підрахунок букв
// const stringToCount = "javascript is awesome";

// const letters = stringToCount.split("").length;
// console.log("🚀 ~ letters:", letters);

//! 9. Сума цін
// const products = [
//   { name: "Milk", price: 30 },
//   { name: "Bread", price: 20 },
//   { name: "Juice", price: 50 },
// ];

// const sum = products.reduce((accum, el) => {
//   return accum + el.price;
// }, 0);
// console.log("🚀 ~ sum:", sum);

//! 10. Розворот масиву вручну

// const arr = [10, 20, 30, 40, 50];

// const reverse = arr.toReversed();
// console.log("🚀 ~ reverse:", reverse);

//! 12. Пошук користувача за id

// const userList = [
//   { id: 1, name: "Oleg" },
//   { id: 2, name: "Ira" },
//   { id: 3, name: "Dmytro" },
// ];

//? варіант 1
// const finder = userList.find((el) => {
//   return el.id === 3;
// });
// console.log("🚀 ~ finder:", finder);

//? варіант 2
// function findUserById(id) {
//   return userList.find((user) => user.id === id);
// }

// console.log(findUserById(3));

//! 14. Групування за віком
// const people = [
//   { name: "Oleg", age: 25 },
//   { name: "Ira", age: 22 },
//   { name: "Taras", age: 25 },
//   { name: "Anna", age: 22 },
// ];

// const age = people.toSorted((a, b) => {
//   return a.age - b.age;
// });
// console.log("🚀 ~ age:", age);

// const name = people.toSorted((a, b) => {
//   return a.name.localeCompare(b.name);
// });
// console.log("🚀 ~ name:", name);
