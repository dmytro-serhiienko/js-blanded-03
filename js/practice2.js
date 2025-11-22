//! 🟡 Задача 3 — Фільм
// Створи клас Movie, який має:
// 	•	title
// 	•	rating
// 	•	метод isGood() → повертає true, якщо рейтинг > 7

// class Movie {
//   constructor(title, rating) {
//     this.title = title;
//     this.rating = rating;
//   }

//   isGood() {
//     if (this.rating >= 7) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }

// const mov = new Movie("Kinkong", 9);
// console.log(mov.isGood());

//! 🟤 Задача 5 — Магазин

// Створи клас Store, який має:
// 	•	масив products
// 	•	метод addProduct(product)
// 	•	метод getTotalPrice() — повертає суму всіх цін

// (базова, але корисна)
// }

// class Store {
//   products = [];

//   constructor(products = []) {
//     this.products = products;
//   }

//   addProduct(product) {
//     this.products.push(product);
//   }

//   getTotalPrice() {
//     return this.products.reduce((accum, el) => accum + el.price, 0);
//   }
// }

// const ovochi = new Store();

// ovochi.addProduct({ name: "Помідори", price: 33 });
// ovochi.addProduct({ name: "Огірки", price: 20 });
// ovochi.addProduct({ name: "Картопля", price: 15 });

// console.log(ovochi.getTotalPrice());

// ! 🟠 Задача 6 — Книга

// Створи клас Book, який має:
// 	•	title
// 	•	author
// 	•	pages
// 	•	метод readPages(amount) зменшує кількість сторінок що залишились
// 	•	метод isFinished()

// class Book {
//   constructor(title, author, pages) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//   }

//   readPages(amount) {
//     this.pages = pages;
//   }

//   isFinished() {
//     return `Прочитано`;
//   }
// }

// const book1 = new Book();
// book1.pages = 100;
// console.log("🚀 ~ book1:", book1);

// console.log(book1.isFinished());

// ! 🔴 Задача 7 — User + Admin

// Створи клас User, а потім клас Admin, який наслідує User.

// User має:
// 	•	name
// 	•	email
// 	•	метод getInfo()

// Admin має:
// 	•	role
// 	•	метод isSuperAdmin() → true, якщо role === "super"

// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }

//   getInfo() {
//     return `Name: ${this.name}; Email: ${this.email};`;
//   }
// }

// class Admin extends User {
//   constructor(name, email, role) {
//     super(name, email);
//     this.role = role;
//   }

//   isSuperAdmin() {
//     if (this.role === "super") {
//       return true;
//     } else {
//       return false;
//     }
//     return;
//   }
// }

// const user1 = new User("Dima", "dima@gmail.com");

// console.log(user1.getInfo());

// const admin1 = new Admin("Lana", "lana@gmail.com", "super");
// console.log(admin1.getInfo());
// console.log(admin1.isSuperAdmin());
// console.log(admin1.getInfo() + admin1.isSuperAdmin());

// ! 🔶 Задача 8 — Студент

// Створи клас Student, який має:
// 	•	name
// 	•	grades (масив)
// 	•	метод addGrade()
// 	•	метод getAverage()
// 	•	метод hasPassed() → true, якщо середня > 60

// class Student {
//   constructor(name, grade) {
//     this.name = name;
//     this.grade = [];
//   }

//   addGrade(newGrade) {
//     this.grade.push(newGrade);
//   }

//   getAverage() {
//     const sum = this.grade.reduce((accum, el) => accum + el, 0);
//     return sum / this.grade.length;
//   }

//   hasPassed() {
//     if (this.getAverage() >= 60) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }

// const stud1 = new Student();
// stud1.addGrade(37);
// stud1.addGrade(69);
// stud1.addGrade(90);

// console.log(stud1.getAverage());

// console.log(stud1.hasPassed());

// ! 🟩 Задача 9 — Банківська картка

// Створи клас Card, який має:
// 	•	баланс (0)
// 	•	метод deposit(amount)
// 	•	метод withdraw(amount) (якщо не вистачає — вивести помилку)
// 	•	метод getBalance()

// class Card {
//   constructor(balance) {
//     this.balance = 0;
//   }

//   deposit(amount) {
//     this.balance = this.balance + amount;
//   }

//   withdraw(amount) {
//     this.balance = this.balance - amount;
//   }

//   getBalance() {
//     return this.balance;
//   }
// }

// const account1 = new Card();

// account1.deposit(5500);

// console.log(account1.getBalance());

// account1.withdraw(300);
// console.log(account1.getBalance());

//! Задача 1 — Подвоїти числа
// 	•	Метод: map
// 	•	Умова: Створи новий масив, де кожне число з numbers буде подвоєне.

// const numbers = [1, 2, 3, 4, 5];
// const double = numbers.map((el) => {
//   return el * 2;
// });
// console.log("🚀 ~ double:", double);

// Очікуваний результат: [2, 4, 6, 8, 10]

//! Задача 2 — Фільтр за віком
// 	•	Метод: filter
// 	•	Умова: Відфільтруй користувачів старше 18 років.

// const users = [
//   { name: "Oleg", age: 25 },
//   { name: "Ira", age: 17 },
//   { name: "Stepan", age: 30 },
// ];

// const checker = users.filter((age, ind) => {
//   return age.age >= 18;
// });
// console.table(checker);

// Очікуваний результат: [{name: "Oleg", age:25}, {name: "Stepan", age:30}]

// ! Задача 3 — Пошук користувача
// 	•	Метод: find
// 	•	Умова: Знайди користувача з id = 2.

// const users = [
//   { id: 1, name: "Oleg" },
//   { id: 2, name: "Ira" },
//   { id: 3, name: "Dmytro" },
// ];

// const checker = users.find((el) => {
//   return el.id === 2;
// });
// console.log("🚀 ~ checker:", checker);

// Очікуваний результат: {id:2, name:"Ira"}

// ! Задача 4 — Сума чисел
// 	•	Метод: reduce
// 	•	Умова: Порахуй суму всіх чисел у масиві.

// const numbers = [5, 10, 15, 20];

// const sum = numbers.reduce((accum, num) => {
//   return accum + num;
// }, 0);
// console.log("🚀 ~ sum:", sum);

// Очікуваний результат: 50

// ! Задача 5 — Перевірка наявності
// 	•	Методи: some, every
// 	•	Умова:
// 	1.	Перевір, чи є в масиві користувачів хоча б один віком < 18.
// 	2.	Перевір, чи всі користувачі старші 16.

// const users = [
//   { name: "Oleg", age: 25 },
//   { name: "Ira", age: 17 },
//   { name: "Stepan", age: 30 },
// ];

// const som = users.some((el) => {
//   return el.age >= 18;
// });
// console.log("🚀 ~ som:", som);

// const eve = users.every((el) => {
//   return el.age >= 16;
// });
// console.log("🚀 ~ eve:", eve);

// ! Задача 6 — Сортування
// 	•	Метод: sort
// 	•	Умова: Відсортуй масив користувачів за віком по зростанню.

// const users = [
//   { name: "Oleg", age: 25 },
//   { name: "Ira", age: 17 },
//   { name: "Stepan", age: 30 },
// ];

// const sor = users.sort((a, b) => a.age - b.age);
// console.table(users);

// Очікуваний результат: [{name:"Ira", age:17}, {name:"Oleg", age:25}, {name:"Stepan", age:30}]

// ! Задача 7 — Масив рядків у великі букви
// 	•	Метод: map
// 	•	Умова: Перетвори всі назви фруктів у верхній регістр.

// const fruits = ["apple", "banana", "kiwi"];

// const change = fruits.map((el) => el.toUpperCase());
// console.log("🚀 ~ change:", change);

// Очікуваний результат: ["APPLE", "BANANA", "KIWI"]

// ! Задача 8 — Унікальні значення
// 	•	Метод: filter або Set
// 	•	Умова: Створи масив лише з унікальними числами.

// const numbers = [1, 2, 2, 3, 4, 4, 5];

// const uniqNUmbers = numbers.reduce((accum, num) => {
//   if (!accum.includes(num)) {
//     accum.push(num);
//   }
//   return accum;
// }, []);
// console.log("🚀 ~ uniqNUmbers:", uniqNUmbers);

// Очікуваний результат: [1, 2, 3, 4, 5]

// ! 🔵 Задача 1 — Користувач

// Створи клас User, який має:
// 	•	name
// 	•	email
// 	•	метод getInfo() → "User: <name>, Email: <email>"

// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
//   getInfo() {
//     return `User: ${this.name}, Email: ${this.email}`;
//   }
// }

// const dima = new User("Dimitro", "dimitro@gmail.com");
// console.log("🚀 ~ dima:", dima);

// console.log(dima.getInfo());

// ! 🟣 Задача 4 — Магазин
// Створи клас Store, який має:
// 	•	масив products
// 	•	метод addProduct(product)
// 	•	метод getTotalPrice()

// class Store {
//   constructor() {
//     this.products = [];
//   }

//   addProduct(product) {
//     this.products.push(product);
//   }

//   getTotalPrice() {
//     return this.products.reduce((accum, num) => {
//       return accum + num.price * num.cantidad;
//     }, 0);
//   }
// }

// const store1 = new Store();
// store1.addProduct({ item: "Tomato", price: 20, cantidad: 2 });
// store1.addProduct({ item: "Totato", price: 30, cantidad: 3 });
// store1.addProduct({ item: "Onion", price: 40, cantidad: 4 });

// console.log(store1.getTotalPrice());

// ! ✅ Задача 2 — Зарплата працівника

// Створи клас Worker, де:
// 	•	приватне поле #salary
// 	•	гетер salary повертає зарплату
// 	•	сетер salary дозволяє ставити тільки число, інакше — помилка

// class Worker {
//   #salary = 0;

//   constructor(salary) {
//     this.#salary = salary;
//   }

//   set salary(value) {
//     if (typeof value !== "number") {
//       return "Salary must be a number";
//     }
//     this.#salary = value;
//   }

//   get salary() {
//     return this.#salary;
//   }
// }

// const w = new Worker(5000);
// w.salary = 6000;

// console.log(w.salary);

// ! Створи клас User, де:
// 	•	приватне поле #name
// 	•	сетер name приймає нове ім’я не коротше 3 символів
// 	•	гетер name повертає ім’я

// class User {
//   #name;

//   constructor(name) {
//     this.#name = name;
//   }

//   set addName(word) {
//     if (word.length < 3) {
//       throw new Error("Name must be at least 3 characters");
//     }
//     this.#name = word;
//   }

//   get showName() {
//     return this.#name;
//   }
// }

// const u = new User("Tim");
// // u.addName = "Al"; // ❌ помилка
// u.addName = "Alex"; // ✔️ ок

// console.log(u.showName);

// ! ✅ Задача 4 — Сховище товарів

// Створи клас Store, де:
// 	•	є масив products = []
// 	•	сетер newProduct приймає об’єкт { title, price }
// 	•	сетер повинен:
// 	•	перевіряти, що price — число
// 	•	додавати товар в масив

// class Store {
//   constructor() {
//     this.products = [];
//   }

//   set newProduct(item) {
//     if (typeof item.price === "number") {
//       this.products.push(item);
//     } else {
//       return `введи число`;
//     }
//   }

//   get showItems() {
//     return this.products;
//   }
// }

// const s = new Store();
// s.newProduct = { title: "Banana", price: 30 }; // ок
// s.newProduct = { title: "Orange", price: 40 }; // помилка
// s.newProduct = { title: "Tomato", price: 20 };

// console.table(s.showItems);

//! Для любителів редьюса задачка.Зробити з такого списку:

// const products = [
//   { name: "Laptop", category: "Electronics", price: 999 },
//   { name: "Phone", category: "Electronics", price: 699 },
//   { name: "Desk", category: "Furniture", price: 299 },
//   { name: "Chair", category: "Furniture", price: 150 },
//   { name: "Notebook", category: "Stationery", price: 5 },
//   { name: "Pen", category: "Stationery", price: 2 },
//   { name: "Monitor", category: "Electronics", price: 300 },
//   { name: "Bookshelf", category: "Furniture", price: 180 },
// ];

// const product2 = products.reduce((accum, el) => {
//   if (!accum[el.category]) {
//     accum[el.category] = [];
//   }
//   accum[el.category].push(el);
//   return accum;
// }, {});
// console.log(product2);

// ! Time and Date
// const data = Date.now();
// console.log("🚀 ~ data:", data);

// const now = new Date();

// const hours = now.getHours();
// const minutes = now.getMinutes();
// const seconds = now.getSeconds();
// const day = now.getDate();
// const month = now.getMonth() + 1; // місяці з 0
// const year = now.getFullYear();

// console.log(hours, minutes, seconds);
// console.log(`${day}.${month}.${year} ${hours}:${minutes}:${seconds}`);

// ! Задача: Є масив цін [100, 200, 300]. Створи новий масив, де кожна ціна збільшена на 20%.

// const num = [100, 200, 300];

// const checker = num.map((numb) => {
//   return numb * 1.2;
// });
// console.log("🚀 ~ checker:", checker);

// ! Задача: Є масив чисел. Поверни лише ті числа, що є парними.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// const num = numbers.filter((num) => {
//   return num % 2 === 0;
// });
// console.log("🚀 ~ num:", num);

// ! знайти користувача 18 років

// const users = [
//   { name: "Tom", age: 17 },
//   { name: "Anna", age: 18 },
//   { name: "Mark", age: 20 },
// ];

// const check = users.find((us) => {
//   return us.age === 18;
// });
// console.log("🚀 ~ check:", check);

// ! findIndex() — знайти індекс “kiwi”

// const fruits = ["apple", "banana", "kiwi", "orange"];

// const check = fruits.findIndex((i) => {
//   return i === "kiwi";
// });
// console.log("🚀 ~ check:", check);

// ! includes() — чи є число 25

// const nums = [10, 15, 25, 30, 40];

// const check = nums.includes(10);
// console.log("🚀 ~ check:", check);

// ! reduce() — сума всіх чисел
// const nums = [5, 10, 20, 40];

// const sum = nums.reduce((acc, num) => {
//   return acc + num;
// }, 0);
// console.log("🚀 ~ sum:", sum);

// * reduce() — групування по категоріях
// const products = [
//   { name: "Laptop", category: "Electronics" },
//   { name: "Phone", category: "Electronics" },
//   { name: "Apple", category: "Fruits" },
//   { name: "Orange", category: "Fruits" },
// ];

// const grouped = products.reduce((acc, item) => {
//   if (!acc[item.category]) {
//     acc[item.category] = [];
//   }

//   acc[item.category].push(item.name);

//   return acc;
// }, {});
// console.log("🚀 ~ grouped:", grouped);

// ! sort() — сортування по віку
// const people = [
//   { name: "Alex", age: 30 },
//   { name: "Maria", age: 25 },
//   { name: "Nina", age: 35 },
// ];

// const check = people.toSorted((a, b) => {
//   return a.age - b.age;
// });
// console.log("🚀 ~ check:", check);

// ! every() — чи всі додатні

// const nums = [10, 5, 8, 12, 20];

// const num = nums.every((el) => el >= 0);
// console.log("🚀 ~ num:", num);

// ! some() — чи є числа > 100
// const nums = [10, 50, 99, 101, 20];

// const num = nums.some((nu) => nu > 100);
// console.log("🚀 ~ num:", num);

// ! flat() — сплющити масив
// const arr = [[1, 2], [3, 4], [5]];

// const check = arr.flatMap((el) => {
//   return el;
// });
// console.log("🚀 ~ check:", check);

// ! flatMap() — отримати всі слова

// const phrases = ["hello world", "my name is JS"];

// const checker = phrases.flatMap((el) => el.split(" "));
// console.log("🚀 ~ checker:", checker);

// ! filter → map → reduce (податок + сума)

// const goods = [
//   { name: "Phone", price: 1000 },
//   { name: "Case", price: 20 },
//   { name: "Laptop", price: 2000 },
// ];

// const check = goods
//   .map((el) => {
//     return { name: el.name, priceWithTax: el.price * 1.1 };
//   })
//   .reduce((acc, el) => {
//     acc.push(`${el.name}: ${el.priceWithTax}`);
//     return acc;
//   }, []);

// console.log(check);

// ! Перетворити масив у об’єкт
// const arr = [
//   { id: 1, name: "Tom" },
//   { id: 2, name: "Ann" },
// ];

// const res = arr.reduce((accu, el) => {
//   accu[el.id] = el.name; // додаємо нове поле в об’єкт
//   return accu; // return акумулятор
// }, {});

// console.log("🚀 ~ res:", res);
// // Результат: { '1': 'Tom', '2': 'Ann' }

// ! Умова: Створи клас Person з полями name і age. Додай метод greet(), який виводить: "Hello, my name is NAME".

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     return `${this.name} ${this.age}`;
//   }
// }

// const person1 = new Person("Bob", 23);
// console.log(person1.greet());

// ! Клас з геттерами та сеттерами

// Умова: Створи клас User з приватним полем #name. Додай:
// 	•	сеттер setName(name) (мінімум 3 символи)
// 	•	геттер getName()

// class User {
//   #name;

//   constructor(name) {
//     this.#name = name;
//   }

//   set nombre(value) {
//     this.#name = value;
//   }

//   get getnombre() {
//     return this.#name;
//   }
// }

// const pers1 = new User();
// pers1.nombre = "Bob";

// console.log(pers1.getnombre);

// ! Клас з методами для масиву

// Умова: Створи клас Store, який має:
// 	•	поле products (масив)
// 	•	метод addProduct(product) для додавання товару
// 	•	метод showProducts() для виводу товарів

// class Store {
//   constructor(parameters) {
//     this.products = [];
//   }

//   set addProduct(product) {
//     this.products.push(product);
//   }

//   get showProducts() {
//     return this.products;
//   }
// }

// const stor1 = new Store();
// stor1.addProduct = "Hat";
// stor1.addProduct = "Bomber";
// stor1.addProduct = "Shoes";

// console.log(stor1.showProducts);

// ! Клас з дефолтними значеннями
// Умова: Створи клас Car з полями make, model, year.

// class Car {
//   constructor(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }

//   set add(values) {
//     this.make = values;
//     this.model = values;
//     this.year = year;
//   }

//   get show() {
//     return `Марка: ${this.make}, Модель: ${this.model}, Рік: ${this.year}`;
//   }
// }

// const stor1 = new Car("Toyota", "Camry", 2024);
// console.log(stor1.show);

// ! Клас з перевіркою типу
// Умова: Створи клас Product з полями name і price. Додай метод setPrice(price):
// 	•	перевіряє, що price число
// 	•	якщо ні — виводить помилку

// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }

//   setName(name) {
//     this.name = name;
//   }

//   setPrice(price) {
//     if (typeof price === "number") {
//       return (this.price = price);
//     } else {
//       return false;
//     }
//   }

//   getInfo() {
//     return `${this.name} ${this.price}`;
//   }
// }

// const check = new Product();

// check.setName("Bob");
// check.setPrice(3000);

// console.log(check.getInfo());

// ! Умова: Створи клас BankAccount:
// 	•	приватне поле #balance
// 	•	метод deposit(amount)
// 	•	метод withdraw(amount) (якщо більше балансу — виводить помилку)
// 	•	метод getBalance()

// class BankAccount {
//   #balance;

//   constructor(balance) {
//     this.#balance = balance;
//   }

//   deposit(amount) {
//     this.#balance = this.#balance + amount;
//   }

//   withdraw(amount) {
//     if (this.#balance >= amount) {
//       this.#balance -= amount;
//       return `Success`;
//     }
//     return `No money`;
//   }

//   getBalance() {
//     return `Your balance = ${this.#balance}`;
//   }
// }

// const acc1 = new BankAccount(100);
// acc1.deposit(1000);
// acc1.deposit(500);
// acc1.deposit(100);

// console.log(acc1.getBalance());

// ! Клас-нащадок (наслідування)

// Умова:
// 	•	Створи клас Animal з методом speak(), який виводить "I am an animal"
// 	•	Створи клас Dog, який наслідує Animal і перевизначає speak(), виводить "Woof!"

// class Animal {
//   constructor(text) {
//     this.text = text;
//   }

//   showani() {
//     return `I am an animal`;
//   }
// }

// class Dog extends Animal {
//   constructor(dog, text) {
//     super(text);
//     this.dog = dog;
//   }

//   showdog() {
//     return `Woof!`;
//   }
// }

// const ani1 = new Animal();

// // console.log(ani1.showani());

// const dogg = new Dog();
// console.log(dogg.showani());
// console.log(dogg.showdog());

//  !  DOM

// const item = document.querySelector(".container h1").textContent;
// console.log(item);

// const desc = document.querySelector(".description");
// desc.textContent = "Updated description";
// console.log(desc.textContent);

// ! За допомогою querySelectorAll отримати всі <li> і вивести їхній текст у консоль.
// !Змінити текст кожного елемента <li> на "Fruit".

// const item = document.querySelectorAll(".fruits li");

// item.forEach((el) => {
//   el.textContent = "Fruit";
// });

// console.log(item);

// ! Вибрати першу карту і змінити її заголовок <h2> на "Updated Title".
// ! Вивести текст другого абзацу <p> другої карти.

// const item = document.querySelector(".card h2");
// item.textContent = "Updated Title";
// console.log(item.textContent);

// const second = document.querySelectorAll(".card .info")[1];
// console.log(second.textContent);

//! Завдання:
//! Знайти елемент, який має клас item і active, і змінити його текст на "Homepage".
//! Вивести всі елементи з класом item, окрім активного, у консоль.

// const item = document.querySelector(".item.active");
// item.textContent = "Homepage";
// console.log(item.textContent);

// const check = document.querySelectorAll(".item");
// check.forEach((it) => it[1] === "item" && it[2] === "item");

// console.log(check);

// const check = document.querySelectorAll(".item:not(active)");

// check.forEach((el) => console.log(el.textContent));

// const items = document.querySelectorAll(".item:not(.active)");
// // console.log("🚀 ~ items:", items);
// items.forEach((el) => console.log(el));

// !
// const item = document.querySelector(".title");
// item.textContent = "New title";

// console.log(item.textContent);

// ! Додати HTML-вміст
// const add = document.querySelector(".box");
// add.innerHTML = "<p>Hello from JS</p>";

// console.log("🚀 ~ add:", add);

// ! Задача: Дзеркальне відображення тексту
// Під час набору тексту в полі input — виводити той самий текст ВЕЛИКИМИ літерами у <span id="result">.
// Приклад:
// Ввів: hello → результат: HELLO.

// const item = document.querySelector("#text");
// const res = document.querySelector("#result");

// item.addEventListener("input", (event) => {
//   res.textContent = event.target.value.toUpperCase();
// });

// ! Умова:
// Є <input id="msg"> і <span id="count"></span>.
// Під час набору тексту показуй кількість реальних символів (без пробілів на початку та в кінці, тобто використай trim()).
// Приклад:
// 	•	Ввів "   hi  " → count = 2
// 	•	Ввів "hello" → count = 5

// const item = document.querySelector("#msg");
// const item2 = document.querySelector("#count");

// item.addEventListener("input", (event) => {
//   item2.textContent = event.target.value.trim().length;
// });

//! Умова:
// Є <input id="login"> і <p id="status"></p>.
// Під час набору тексту перевіряй:
// 	•	Якщо введено менше 5 символів (без пробілів на початку та в кінці) → показуй "Закоротко"
// 	•	Інакше → показуй "OK"

// const item1 = document.querySelector("#login");
// const item2 = document.querySelector("#status");

// item1.addEventListener("input", (event) => {
//   if (event.target.value.length >= 5) {
//     item2.textContent = "ok";
//   } else {
//     item2.textContent = "Закоротко";
//   }
// });

// ! Умова:
// Є <input id="sentence"> і <span id="out"></span>.
// Під час набору тексту в <input> потрібно виводити у <span>:
// 	1.	Текст без пробілів на початку та в кінці (trim())
// 	2.	Перша літера велика, інші залишаються як введено

// Приклад:
// 	•	Введено: "   hello world" → виводимо: "Hello world"
// 	•	Введено: "javascript" → виводимо: "Javascript"

// const nabir = document.querySelector("#sentence");
// const pokaz = document.querySelector("#out");

// nabir.addEventListener("input", (event) => {
//   let text = event.target.value.trim();

//   if (text.length > 0) {
//     pokaz.textContent = text[0].toUpperCase() + text.slice[1];
//   } else {
//     pokaz.textContent = "";
//   }
// });

//! Умова:
// Є <input id="username"> і <span id="num-status"></span>.
// Під час набору тексту потрібно показувати у спані:
// 	•	"Цифри заборонені" — якщо в тексті є хоча б одна цифра
// 	•	"OK" — якщо цифр немає

// const inn = document.querySelector("#username");
// const out = document.querySelector("#num-status");

// inn.addEventListener("input", (event) => {
//   if (/\d/.test(event.target.value)) {
//     out.textContent = "Цифри заборонені";
//   } else {
//     out.textContent = "OK";
//   }
// });

//! Умова:
// Є <input id="pass"> і <p id="preview"></p>.
// Під час набору тексту в інпуті потрібно живе прев’ю:
// 	•	В <p> відображається те, що ввів користувач
// 	•	Реальний текст користувача видно одразу

// const inn = document.querySelector("#pass");
// const out = document.querySelector("#preview");

// inn.addEventListener("input", (event) => {
//   out.textContent = event.target.value;
// });

// ! Умова:
// Є <input id="filter"> і <span id="filter-result"></span>.
// 	•	Під час набору тексту потрібно фільтрувати заборонені слова.
// 	•	Заборонені слова можна зберегти у масиві, наприклад:

// 	•	Якщо у тексті є заборонене слово, його замінюємо на ***.
// 	•	Результат відображаємо у <span>.

// Приклад:
// 	•	Введено: "Він дурень і лінивий" → виводимо: "Він *** і ***"

// const forbidden = ["дурак", "лінивий", "дурень"];

// const item1 = document.querySelector("#filter");
// const item2 = document.querySelector("#filter-result");

// item1.addEventListener("input", (event) => {
//   if (event.target.value) {
//     item2.textContent = event.target.value;
//   }
// });

// ! Умова:

// HTML-структура:
// Створіть HTML-сторінку з такими елементами:

// Кнопка з класом change-color
// Елемент <span> з класом color для відображення коду кольору

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// const btn = document.querySelector(".change-color");
// const res = document.querySelector(".color");

// btn.addEventListener("click", () => {
//   const colorResult = getRandomHexColor();

//   document.body.style.backgroundColor = colorResult;

//   res.textContent = colorResult;
// });

// ! Знайди перший <p> всередині .container через querySelector.
// •	Зміни його текст на "Перший абзац змінено".
// •	Зміни колір тексту на червоний.

// const first = document.querySelector(".container p");

// first.textContent = "Новий перший абзац";
// first.style.color = "red";

// console.log("🚀 ~ first:", first);

// ! Зміни всі елементи списку

// •	Знайди всі <li> всередині .fruits.
// •	Зроби так, щоб текст усіх <li> став жирним (font-weight: bold).

// const find = document.querySelectorAll(".fruits li");

// find.forEach((text) => (text.style.fontWeight = "bold"));

// ! 	1.	Спочатку додай у .box текст “Привіт!” через textContent.
// 	2.	Потім всередину того ж елемента додай кнопку <button>Натисни мене</button> через innerHTML.

// Тобі треба спробувати поетапно, спочатку текст, потім кнопка.

// const find1 = document.querySelector(".box");
// find1.innerHTML = "Privit! <button>Натисни мене</button>";

//! Зроби колір тексту синім.
// •	Змініть розмір шрифту на 36px.
// •	Додай фон жовтого кольору.

// const find1 = document.querySelector(".title");
// find1.style.fontSize = "36px";
// find1.style.color = "blue";
// find1.style.backgroundColor = "yellow";

//! 1.	Додай клас active до .card.
// 2.	Потім перевір, чи клас active є, і видали його.
// 3.	Заміни клас card на card-highlight.

// const find = document.querySelector(".card");
// find.classList.add("active");
// console.log("🚀 ~ find:", find);

// console.log(find.classList.contains("active"));

// find.classList.remove("active");
// console.log(find.classList.contains("active"));

// find.classList.replace("card", "card-highlight");
// console.log(find.classList.contains("card-highlight"));

// ! Умова JS:
// 	•	При натисканні на кнопку .switch треба додати або видалити клас on у блоці .light.
// 	•	Якщо клас on вже є — він видаляється, якщо немає — додається.

// const btn = document.querySelector(".switch");
// const divTheme = document.querySelector(".light");

// btn.addEventListener("click", (event) => {
//   divTheme.classList.toggle("on");
// });

// ! задача
// const item1 = document.querySelector(".todo-input");
// const item2 = document.querySelector(".sp");

// item1.addEventListener("input", (event) => {
//   // item2.textContent = event.target.value.trim();

//   if (/\d/.test(item1.value)) {
//     item2.textContent = `Error - numbers on input`;
//   } else {
//     item2.textContent = event.target.value.trim();
//   }
// });

//!  Потрібно додати в нього один <li> з текстом "Hello".
// const item1 = document.querySelector(".list");
//*  var 1
// item1.innerHTML = `
// <li class="list-item">
// <p class="list-text">Це мій текст</p>
// </li>
// `;
// console.log("🚀 ~ item1:", item1);

// * var2
// const newItem = document.createElement("li");
// newItem.textContent = "New Text";

// item1.append(newItem);

// console.log(item1.innerHTML);

//! ⭐ Задача №2: додати 3 елементи в список через цикл
// Є <ul class="list"></ul>.
// Треба додати три li:
// 	•	“Item 1”
// 	•	“Item 2”
// 	•	“Item 3”

// Використай цикл for.

// const item1 = document.querySelector(".list");

// for (let index = 0; index < 3; index++) {
//   const element = document.createElement("li");

//   element.textContent = `Item ${index + 1}`;

//   item1.append(element);
// }

//! ⭐ Задача №3: додати масив текстів у список
// Завдання:

// Є масив:

// const fruits = ["Apple", "Banana", "Cherry"];

// 1.	За допомогою масиву створити по одному <li> для кожного елемента.
// 2.	Записати текст з масиву в textContent.
// 3.	Додати все в список.

// const item1 = document.querySelector(".list");

// // * var1
// fruits.map((el) => {
//   const newLi = document.createElement("li");

//   newLi.textContent = el;

//   item1.append(newLi);
// });

// // * var 2
// fruits.forEach((el) => {
//   const newLi = document.createElement("li");

//   newLi.textContent = el;

//   item1.append(newLi);
// });

// ! Завдання:
// 	1.	Є масив об’єктів з картинками:

// const photos = [
//   { url: "https://picsum.photos/200/150?1", alt: "Photo 1" },
//   { url: "https://picsum.photos/200/150?2", alt: "Photo 2" },
//   { url: "https://picsum.photos/200/150?3", alt: "Photo 3" },
// ];

// 2.	Є <ul class="photo-list"></ul> у HTML.
// 3.	Для кожного об’єкта потрібно:
// •	Створити <li>
// •	Всередину <li> створити <img> з src і alt з об’єкта
// •	Додати <li> у список
// 4.	Використовуй forEach.

// const item1 = document.querySelector(".photo-list");

// photos.forEach(({ url, alt }) => {
//   const newLi = document.createElement("li");
//   const newImg = document.createElement("img");

//   newImg.src = url;
//   newImg.alt = alt;

//   newLi.append(newImg);
//   item1.append(newLi);
// });

//! Умова:

// Є масив об’єктів:
// const books = [
//   { title: "Harry Potter", author: "J.K. Rowling" },
//   { title: "The Hobbit", author: "J.R.R. Tolkien" },
//   { title: "1984", author: "George Orwell" },
// ];

// Назва книги — Автор

// 	1.	Для кожного об’єкта створити <li>
//   2.	Вставити у < li > текст у форматі:
// 3.	Додати < li > у DOM(в < ul class= "book-list" >).

// 1.	Беремо масив → перебираємо (forEach)
// 2.	Створюємо <li>
// 3.	Вставляємо текст з даних масиву
// 4.	Додаємо <li> у список

// const item1 = document.querySelector(".book-list");

// books.forEach(({ title, author }) => {
//   const newLi = document.createElement("li");
//   const newPar = document.createElement("p");

//   newPar.textContent = `${title}, - ${author}`;

//   newLi.append(newPar);
//   item1.append(newLi);
// });

// ! ⭐ Задача: список користувачів з емейлами

// const users = [
//   { name: "Alice", email: "alice@example.com" },
//   { name: "Bob", email: "bob@example.com" },
//   { name: "Charlie", email: "charlie@example.com" },
// ];

// 	1.	Для кожного об’єкта створити <li>
//   2.	Вставити у < li > текст у форматі:
//   	3.	Додати <li> у DOM (<ul class="user-list">)

// 🔑 Логіка:
// 	1.	Беремо масив → перебираємо (forEach)
// 	2.	Створюємо <li>
// 	3.	Вставляємо текст з об’єкта (name і email)
// 	4.	Додаємо <li> у список

// const item1 = document.querySelector(".user-list");

// users.forEach(({ name, email }) => {
//   const NewLi = document.createElement("li");
//   const NewContent = document.createElement("p");

//   NewContent.textContent = `${name} (${email})`;

//   NewLi.append(NewContent);
//   item1.append(NewLi);
// });

// ! Тепер (map + шаблонні рядки + insertAdjacentHTML)

// 	•	Перебираєш масив
// 	•	Для кожного об’єкта формуєш рядок HTML (<li><p>...</p></li>)
// 	•	Об’єднуєш усі рядки в один великий рядок через .join("")
// 	•	Вставляєш у DOM одним викликом

// ⸻

// 🔑 Логіка одна і та сама:
// масив → перебір → створення контенту → додавання в DOM
// Просто другий спосіб ефективніший, бо DOM оновлюється один раз, а не багато разів у циклі.

// const item1 = document.querySelector(".user-list");

// const markup = users
//   .map((user) => `<li><p>${user.name} (${user.email})</p></li>`)
//   .join("");

// item1.insertAdjacentHTML("beforeend", markup);

// ! Задача: список продуктів

// const products = [
//   { name: "Milk", price: 15 },
//   { name: "Bread", price: 8 },
//   { name: "Eggs", price: 25 },
// ];

// 1.	Для кожного об’єкта створити < li > у форматі:
// Назва: Milk — Ціна: 15
//   	2.	Використовуй шаблонні рядки та map, щоб згенерувати HTML
// 	3.	Встав усі елементи у DOM одним викликом (insertAdjacentHTML)

// •	Масив → map → рядки HTML → join → insertAdjacentHTML

// const item1 = document.querySelector(".product-list");

// const perebor = products
//   .map((el) => `<li>Назва: ${el.name} — Ціна: ${el.price}</li>`)
//   .join(", ");

// item1.insertAdjacentHTML("beforeend", perebor);

// ! Умова:

// Є масив об’єктів з картинками:

// const gallery = [
//   { url: "https://picsum.photos/200/150?1", alt: "Photo 1" },
//   { url: "https://picsum.photos/200/150?2", alt: "Photo 2" },
//   { url: "https://picsum.photos/200/150?3", alt: "Photo 3" },
// ];

// 1.	Для кожного об’єкта створити <li>
// 2.	Всередині <li> створити <img> з src і alt з об’єкта
// 3.	Використати map + join + insertAdjacentHTML, щоб вставити усі елементи в DOM одним викликом

// const item = document.querySelector(".gallery-list");

// const perebor = gallery
//   .map((el) => `<li><img src="${el.url}" alt="${el.alt}"></li>`)
//   .join("");
// console.log("🚀 ~ perebor:", perebor);

// item.insertAdjacentHTML("beforeend", perebor);

// ! Умова:

// Є масив об’єктів:
// const products = [
//   { name: "Milk", price: 15, img: "https://picsum.photos/100/100?1" },
//   { name: "Bread", price: 8, img: "https://picsum.photos/100/100?2" },
//   { name: "Eggs", price: 25, img: "https://picsum.photos/100/100?3" },
// ];

// 1.	Для кожного об’єкта створити <li>
// 2.	Всередині <li> вставити картинку (<img>), назву та ціну
// 3.	Використати map + join + insertAdjacentHTML, щоб вставити всі елементи за один виклик

{
  /* <li>
  <img src="https://picsum.photos/100/100?1" alt="Milk">
  <p>Milk — 15 грн</p>
</li> */
}

// const item1 = document.querySelector(".product-gallery");

// const newEl = products
//   .map(
//     (el) => `<li>
//   <img src="${el.img}" alt="${el.name}">
//   <p>${el.name} — ${el.price} грн</p>
// </li>`
//   )
//   .join("");
// console.log("🚀 ~ newEl:", newEl);

// item1.insertAdjacentHTML("beforeend", newEl);

// ! Умова

// const products = [
//   { name: "Milk", price: 25, img: "milk.jpg" },
//   { name: "Bread", price: 15, img: "bread.jpg" },
//   { name: "Apples", price: 30, img: "apples.jpg" },
// ];

// Твоє завдання:
// 	1.	Створити <li> для кожного товару
// 	2.	Додати всередину:
// 	•	<img>
// 	•	<h3>
// 	•	<p>
// 	•	кнопку <button>
// 	3.	Вставити всі <li> в один <ul class="shop-list">
// 	4.	Усе — через map → join → insertAdjacentHTML

// const item1 = document.querySelector(".product-gallery");

// const newList = products
//   .map(
//     (el) =>
//       `<li>
//       <img src="${el.img}">
//       <h3>${el.name}</h3>
//       <p>${el.price} грн.</p>
//       <button>Замовити</button>
//       </li>
//     `
//   )
//   .join("");
// console.log("🚀 ~ newList:", newList);

// item1.insertAdjacentHTML("beforeend", newList);

// ! Умова

const products = [
  { name: "Milk", price: 25, img: "milk.jpg" },
  { name: "Bread", price: 15, img: "bread.jpg" },
  { name: "Apples", price: 30, img: "apples.jpg" },
];

// Завдання:
// 	1.	Створити <li> для кожного продукту з <img>, <h3>, <p> і <button>Замовити</button>
// 	2.	Вставити всі <li> одним викликом у DOM через map + join + insertAdjacentHTML
// 	3.	Додати обробник на всі кнопки “Замовити”:
// 	•	При натисканні збільшувати лічильник замовлень на 1
// 	•	Відображати значення у <span class="order-count"></span>

const item1 = document.querySelector(".product-gallery");

// prettier-ignore
const perebor = products
  .map(
    (el) => `
  <li>
  <img src="${el.img}">
  <h3>${el.name}</h3>
  <p>${el.price}</p>
  <button class="btn-order">Замовити</button>
  </li>`
  )
  .join("");

item1.insertAdjacentHTML("beforeend", perebor);

const podiya = document.querySelectorAll(".btn-order");
const spanilo = document.querySelector(".order-count");
let count = 0;

// podiya.addEventListener(
//   "click",
//   (event) => (spanilo.textContent = event.target)

podiya.forEach((el) => {
  el.addEventListener("click", () => {
    count++;
    spanilo.textContent = count;
  });
});
