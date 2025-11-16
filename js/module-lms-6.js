//! Створи клас BankAccount (банківський рахунок)
// Що потрібно реалізувати:

//? Властивості:
// owner (власник) - ім'я власника рахунку
// balance (баланс) - поточний баланс (початково 0)

//? Методи:
// deposit(amount) - поповнити рахунок на суму amount
// withdraw(amount) - зняти гроші (якщо достатньо коштів)
// getBalance() - показати поточний баланс

//? Додаткові умови:
// Не можна зняти більше грошей, ніж є на рахунку
// Виводь повідомлення при кожній операції (наприклад: "Поповнено на 100 грн. Баланс: 100")

// class BankAccount {
//   owner;
//   balance;

//   constructor(owner) {
//     this.owner = owner;
//     this.balance = 0;
//   }

//   deposit(amount) {
//     this.balance = this.balance + amount;
//     console.log(`Поповнено на ${amount}. Баланс: ${this.balance}`);
//   }

//   withdraw(amount) {
//     if (this.balance >= amount) {
//       this.balance = this.balance - amount;
//       console.log(`Знято з рахунку: ${amount}. Баланс: ${this.balance}`);
//     } else {
//       console.log(`Недостатньо коштів на рахунку`);
//     }
//   }

//   getBalance() {
//     console.log(`Ваш поточний рахунок: ${this.balance}`);
//   }
// }

// const myAccount = new BankAccount("Дмитро");
// myAccount.deposit(1000);
// myAccount.withdraw(300);
// myAccount.getBalance();

// !!!!!!!!!!!!!!!!!!!

// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   constructor(params) {
//     // Виклик конструктора батьківського класу User
//     super(params.email);

//     this.posts = params.posts;
//   }
// }

// const editor = new ContentEditor({
//   email: "mango@mail.com",
//   posts: [],
// });
// console.log(editor); // { #email: "mango@mail.com", posts: [] }
// console.log(editor.email); // "mango@mail.com"

//* ========== ЗАДАЧА 1: Метод об'єкта ==========
// Додай метод introduce, який виводить "Привіт, мене звати [ім'я]"
// const person = {
//   name: "Олександр",

//   introduce: function () {
//     return `Привіт, мене звати ${this.name}`;
//   },
// };
// console.log("🚀 ~ person.introduce:", person.introduce());
// // Очікується: "Привіт, мене звати Олександр"

//* ========== ЗАДАЧА 2: Калькулятор ==========
// Додай методи для роботи з числами
// const calculator = {
//   value: 0,
//   add: function (num) {
//     this.value += num;
//   },
//   subtract: function (num) {
//     this.value -= num;
//   },
//   getValue: function () {
//     return this.value;
//   },
// };

// // Тест:
// calculator.add(10);
// calculator.subtract(3);
// console.log(calculator.getValue()); // Очікується: 7

//* ========== ЗАДАЧА 3: Інформація про користувача ==========
// Створи метод getInfo, який повертає рядок з інформацією
// const user = {
//   name: "Марія",
//   age: 25,
//   city: "Київ",
//   getInfo: function () {
//     return `${this.name}, ${this.age}, ${this.city}`;
//   },
// };

// // Тест:
// console.log(user.getInfo()); // Очікується: "Марія, 25 років, з міста Київ"

//* ========== ЗАДАЧА 4: Лічильник ==========
// Створи об'єкт counter з методами
// const counter = {
//   count: 0,
//   increment: function () {
//     this.count++;

//     // Збільш count на 1
//   },
//   decrement: function () {
//     // Зменш count на 1
//     this.count--;
//   },
//   reset: function () {
//     // Скинь count до 0
//     this.count = 0;
//   },
//   getCount: function () {
//     // Поверни поточне значення count
//     return this.count;
//   },
// };

// // Тест:
// counter.increment();
// counter.increment();
// counter.increment();
// counter.decrement();
// console.log(counter.getCount()); // Очікується: 2
// counter.reset();
// console.log(counter.getCount()); // Очікується: 0

//* ========== ЗАДАЧА 5: Використання call ==========
// Використай метод introduce з person для іншого об'єкта
// const person1 = {
//   name: "Іван",
// };

// const person2 = {
//   name: "Петро",
// };

// function sayHello() {
//   console.log(`Привіт, я ${this.name}`);
// }

// sayHello.call(person1);
// sayHello.call(person2);

// Тест:
// Викличи sayHello для person1 використовуючи call
// Викличи sayHello для person2 використовуючи call

//* ========== ЗАДАЧА 6: Використання apply ==========
// Створи функцію, яка додає числа до масиву
// const numbers = {
//   values: [1, 2, 3],
//   addNumbers: function (a, b, c) {
//     this.values.push(a, b, c);
//   },
// };

// const moreNumbers = {
//   values: [10, 20],
// };

// numbers.addNumbers.apply(moreNumbers, [30, 40, 50]);

// console.log(moreNumbers.values); // [10, 20, 30, 40, 50]
// // Тест:
// // Використай apply, щоб викликати addNumbers для moreNumbers
// // з аргументами [30, 40, 50]

// ========== ЗАДАЧА 7: Використання bind ==========
// Зберігаємо метод у змінну
// const car = {
//   brand: 'Tesla',
//   model: 'Model 3',
//   getInfo: function() {
//     return `${this.brand} ${this.model}`;
//   }
// };

// // Проблема: якщо зберегти метод у змінну, this загубиться
// const carInfo = car.getInfo;
// // console.log(carInfo()); // Помилка!

// // Твій код тут:
// // Використай bind, щоб зберегти правильний this
// const boundCarInfo = // твій код

// // Тест:
// console.log(boundCarInfo()); // Очікується: "Tesla Model 3"

// // ========== ЗАДАЧА 8: Об'єкт з callback ==========
// // Виправ код, щоб callback зберігав this
// const timer = {
//   seconds: 0,
//   start: function() {
//     // Проблема: this у setTimeout втрачається
//     setTimeout(function() {
//       this.seconds++;
//       console.log(this.seconds);
//     }, 1000);
//   }
// };

// // Виправ метод start, щоб він правильно працював
// // Підказка: можеш використати стрілочну функцію або bind

// // ========== ЗАДАЧА 9: Масив об'єктів ==========
// // Додай метод increasePrice до кожного товару
// const products = [
//   { name: 'Телефон', price: 10000 },
//   { name: 'Ноутбук', price: 20000 },
//   { name: 'Планшет', price: 15000 }
// ];

// function increasePrice(percent) {
//   // Збільш this.price на percent відсотків
//   // Наприклад, якщо price = 100 і percent = 10, то новий price = 110
// }

// // Тест:
// // Використай call або apply, щоб збільшити ціну кожного товару на 10%
// // Підказка: використай цикл

// // ========== ЗАДАЧА 10: Прив'язка контексту ==========
// // Створи кнопку з обробником подій
// const button = {
//   text: 'Натисни мене',
//   clicks: 0,
//   handleClick: function() {
//     this.clicks++;
//     console.log(`Кнопка "${this.text}" натиснута ${this.clicks} разів`);
//   }
// };

// // Проблема: якщо передати handleClick як callback, this загубиться
// // const handler = button.handleClick;
// // handler(); // Помилка!

// // Твій код:
// // Створи boundHandler використовуючи bind
// const boundHandler = // твій код

// // Тест:
// boundHandler(); // Очікується: "Кнопка "Натисни мене" натиснута 1 разів"
// boundHandler(); // Очікується: "Кнопка "Натисни мене" натиснута 2 разів"

//! 🧩 Завдання Банк

// class Bank {
//   balance = 0;

//   constructor(initialBalance) {
//     this.balance = initialBalance;
//   }

//   withdraw(amount) {
//     this.balance -= amount;
//   }

//   add(amount) {
//     this.balance += amount;
//   }
// }

// const account = new Bank(1000);
// console.log("🚀 ~ account:", account);

// account.add(500);
// console.log("🚀 ~ account:", account.balance);

// account.add(700);
// console.log("🚀 ~ account:", account.balance);

// account.withdraw(300);
// console.log("🚀 ~ account:", account.balance);

// console.log("🚀 ~ account:", account);

//! ========== ЗАДАЧА 1: Калькулятор ==========
// Створи клас Calculator з методами для базових операцій
// class Calculator {
//   result = 0;

//   constructor(number) {
//     this.number = number;
//   }

//   // Метод add(number) - додати число до result
//   add(number) {
//     this.result += number;
//   }
//   // Метод subtract(number) - відняти число від result
//   subtract(number) {
//     this.result -= number;
//   }
//   // Метод multiply(number) - помножити result на число
//   multiply(number) {
//     this.result *= number;
//   }
//   // Метод divide(number) - поділити result на число
//   divide(number) {
//     this.result /= number;
//   }
//   // Метод reset() - скинути result до 0
//   reset() {
//     this.result = 0;
//   }
//   // Метод getResult() - повернути поточне значення result
//   getResult() {
//     return this.result;
//   }
// }

// // Тести:
// const calc = new Calculator();
// calc.add(10);
// calc.multiply(2);
// console.log(calc.getResult()); // 20

//* ========== ЗАДАЧА 2: Студент ==========
// Створи клас Student з оцінками
// class Student {
//   constructor(name) {
//     this.name = name;
//     this.grades = [];
//   }

//   // Метод addGrade(grade) - додати оцінку
//   addGrade(grade) {
//     this.grades.push(grade);
//   }
//   // Метод getAverage() - обчислити середній бал
//   getAverage() {
//     const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
//     return sum / this.grades.length;
//   }
//   // Метод getInfo() - повернути "Студент: [ім'я], Середній бал: [бал]"
//   getInfo() {
//     return `Студент: ${this.name}, Середній бал: ${this.getAverage()}`;
//   }
// }

// Тести:
// const student = new Student("Іван");
// student.addGrade(90);
// student.addGrade(85);
// student.addGrade(95);
// console.log(student.getAverage()); // 90
// console.log(student.getInfo());

//* Завдання 1 (просте)

// Створи об’єкт user з такими властивостями:
// 	•	name — рядок (ім’я користувача)
// 	•	age — число (вік користувача)

// Привіт, мене звати <name> і мені <age> років

// const user = {
//   name: "Дмитро",
//   age: 33,

//   greet() {
//     console.log(`Привіт, мене звати ${this.name} і мені ${this.age} років`);
//   },
// };

// user.greet();

// ! 🧩 Завдання 2

//* Створи клас User, який має:
//* 	1.	Властивості:
//* 	•	name — ім’я користувача (передається в конструкторі);
//* 	•	age — вік користувача (також передається в конструкторі).
//* 	2.	Метод greet(), який повертає рядок:
//* Привіт, мене звати < name > і мені < age > років
// 	3.	Створи екземпляр цього класу (наприклад, const user1 = new User("Дмитро", 33)).
// 	4.	Виклич метод greet() для цього екземпляра.

// class User {
//   name = "";
//   age = 0;

//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     return `Привіт, мене звати ${this.name} і мені ${this.age} років`;
//   }
// }

// const user1 = new User("Дмитро", 33);
// console.log("🚀 ~ user1:", user1.greet());

// class Admin extends User {
//   constructor(name, age, accessLevel) {
//     super(name, age); // виклик конструктора батьківського класу
//     this.accessLevel = accessLevel; // додаткова властивість Admin
//   }

//   showAccess() {
//     return `Рівень доступу: ${this.accessLevel}`;
//   }
// }

// const admin1 = new Admin("Dmytro", 33, "premium");
// console.log("🚀 ~ admin1:", admin1);

// 🧩 Завдання 3 (наслідування)
//* 	1.	Є клас User з властивостями name і age, і методом greet() (вже зроблено).
//* 	2.	Створи клас Admin, який успадковує User.
// 	3.	У класі Admin додай:
// 	•	властивість accessLevel (рівень доступу), що передається в конструкторі
// 	•	метод showAccess(), який повертає рядок:
// Рівень доступу: <accessLevel>
// 	4.	Створи екземпляр Admin і виклич:
// 	•	метод greet() (успадкований від User)
// 	•	метод showAccess()

//* 🧩 Завдання 4 (середній рівень)
// 	1.	Створи клас User з властивостями:
// 	•	name
// 	•	age
// і методом greet(), який повертає рядок:
// Привіт, мене звати < name > і мені < age > років

// 	2.	Створи клас Admin, який успадковує User і має:
// 	•	додаткову властивість permissions — масив рядків (наприклад: ["read", "write"])
// 	•	метод showPermissions(), який повертає рядок:
//   Доступи: <permissions через кому></permissions>

//   	3.	Додаткове завдання:
// 	•	Створи масив користувачів, який містить як звичайних користувачів (User), так і адміністраторів (Admin).
// 	•	Перебери цей масив і для кожного об’єкта виведи:
// 	•	greet()
// 	•	якщо це Admin — також showPermissions()

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     return `Привіт, мене звати ${this.name} і мені ${this.age} років`;
//   }
// }

// class Admin extends User {
//   constructor(name, age, permissions) {
//     super(name, age);
//     this.permissions = permissions;
//   }

//   showPermissions() {
//     return `Доступи: ${this.permissions}`;
//   }
// }

// const admin1 = new Admin("Дмитро", 22, "Pro");
// console.log("🚀 ~ admin1:", admin1);

// console.log(admin1.showPermissions());

//! Завдання 5 (середній/трохи складний рівень)
// 	1.	Створи клас User з властивостями:
// 	•	name
// 	•	age
// і методом greet(), який повертає:
// Привіт, мене звати < name > і мені < age > років
//? 	2.	Створи клас Admin, який успадковує User, і має:
// 	•	додаткову властивість permissions (масив рядків, наприклад: ["read", "write"])
// 	•	метод showPermissions(), який повертає рядок:
//   Доступи: <permissions через кому></permissions>

//   	3.	Створи клас Guest, який успадковує User, і має:
// 	•	додаткову властивість expires — дата закінчення доступу
// 	•	метод showExpiry(), який повертає рядок:
//   Доступ дійсний до: <expires></expires>

//   	4.	Створи масив користувачів, який містить і User, і Admin, і Guest.
// 	5.	Перебери масив і для кожного користувача:
// 	•	виведи результат greet()
// 	•	якщо це Admin — додатково виведи showPermissions()
// 	•	якщо це Guest — додатково виведи showExpiry()

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     return `Привіт, мене звати ${this.name} і мені ${this.age} років`;
//   }
// }

// class Admin extends User {
//   constructor(name, age, permissions) {
//     super(name, age);
//     this.permissions = permissions;
//   }

//   showPermissions() {
//     return `Доступи: ${this.permissions}`;
//   }
// }

// class Guest extends User {
//   constructor(name, age, expires) {
//     super(name, age);
//     this.expires = expires;
//   }

//   showExpiry() {
//     return `Доступ дійсний до: ${this.expires}`;
//   }
// }

// //! Виклик Юзера
// // const user1 = new User("Dmytro", 33);
// // console.log("🚀 ~ user1:", user1);
// // console.log(user1.greet());

// //! Виклик Адміна
// const admin1 = new Admin("Lana", 32, "Pro");
// console.log("🚀 ~ admin1:", admin1);
// console.log(admin1.greet());
// console.log(admin1.permissions);

// //! Виклик Гостя
// const guest1 = new Guest("Gordii", 5, "Premium", "Безстроковий");
// console.log("🚀 ~ guest1:", guest1);
// console.log(guest1.greet());
// console.log(guest1.expires);

//!  Завдання 6 (середній/трохи складний рівень)
// 	1.	Створи клас User з властивостями:
// 	•	name
// 	•	age
// і методом greet(), який повертає:
// Привіт, мене звати < name > і мені < age > років
// 	2.	Створи клас Admin, який успадковує User, і має:
// 	•	додаткову властивість permissions (масив рядків, наприклад: ["read", "write"])
// 	•	метод showPermissions(), який повертає рядок:
//   Доступи: <permissions через кому></permissions>
//   	3.	Створи клас Guest, який успадковує User, і має:
// 	•	властивість permissions (масив рядків)
// 	•	властивість expires — дата закінчення доступу
// 	•	метод showExpiry()
// 	4.	Створи клас SuperAdmin, який успадковує Admin, і має:
// 	•	додаткову властивість superPower (рядок, наприклад "all-access")
// 	•	метод showSuperPower(), який повертає рядок:
//   Суперсила: <superPower></superPower>
//   	5.	Створи масив користувачів, який містить різних User, Admin, Guest і SuperAdmin.
// 	6.	Перебери масив і для кожного користувача:
// 	•	виклич greet()
// 	•	якщо це Admin або SuperAdmin — виклич showPermissions()
// 	•	якщо це Guest — виклич showExpiry()
// 	•	якщо це SuperAdmin — ще й виклич showSuperPower()

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     return `Привіт, мене звати ${this.name} і мені ${this.age} років`;
//   }
// }

// class Admin extends User {
//   constructor(name, age, permissions) {
//     super(name, age);
//     this.permissions = permissions;
//   }

//   showPermissions() {
//     return this.permissions;
//   }
// }

// class Guest extends User {
//   constructor(name, age, permissions, expires) {
//     super(name, age);
//     this.permissions = permissions;
//     this.expires = expires;
//   }

//   showExpiry() {
//     return `Доступ до: ${this.expires}`;
//   }
// }

// class SuperAdmin extends Admin {
//   constructor(name, age, permissions, superPower) {
//     super(name, age);
//     this.permissions = permissions;
//     this.superPower = superPower;
//   }

//   showSuperPower() {
//     return `Супер-сила: ${this.superPower}`;
//   }
// }

// //! USER
// const user1 = new User("Dmytro", 33);
// console.log("🚀 ~ user1:", user1);
// console.log(user1.greet());

// //! ADMIN
// const admin1 = new Admin("Lana", 32, "Premium");
// console.log("🚀 ~ admin1:", admin1);
// console.log(admin1.greet());
// console.log(admin1.permissions);

// //! GUEST
// const guest1 = new Guest("Gordii", 5, "Pro", "Довічно");
// console.log("🚀 ~ guest1:", guest1);
// console.log(guest1.greet());
// console.log(guest1.expires);

// //! SUPERADMIN
// const supAdmin = new SuperAdmin("Bobik", 9, "Premium", "Безсмертний");
// console.log("🚀 ~ supAdmin:", supAdmin);
// console.log(supAdmin.greet());
// console.log(supAdmin.superPower);

//! ✅ Задача

// Створи клас Product, який:
// 	1.	У конструкторі приймає два параметри:
// 	•	name (назва товару)
// 	•	price (ціна)
// 	2.	Має метод getInfo(), який повертає рядок:
// "Товар: {name}, ціна: {price} грн"
// 	3.	Створи два екземпляри цього класу та виведи результат роботи getInfo() у консоль.

// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }

//   getInfo() {
//     return `Товар: ${this.name}, ціна: ${this.price} грн`;
//   }
// }

// const user1 = new Product("Каптопля", 43);
// console.log("🚀 ~ user1:", user1);

// console.log(user1.getInfo());

//! ✅ Задача 2 — Класи + успадкування

// Створи два класи:

// 1. Клас User
// 	•	приймає name та email
// 	•	має метод getInfo(), який повертає:
// "Користувач: {name}, Email: {email}"

// 2. Клас Admin, який успадковується від User
// 	•	у конструкторі приймає:
// name, email, accessLevel
// 	•	має додаткову властивість accessLevel
// 	•	має метод isSuperAdmin(), який повертає:
// 	•	true, якщо accessLevel === "super"
// 	•	false — в інших випадках

// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }

//   getInfo() {
//     return `Користувач: ${this.name}, Email: ${this.email}`;
//   }
// }

// class Admin extends User {
//   constructor(name, email, accessLevel) {
//     super(name, email);
//     this.accessLevel = accessLevel;
//   }

//   isSuperAdmin() {
//     return this.accessLevel === "super";
//   }
// }

// const user1 = new User("Dima", "dima@gmail.com");
// console.log("🚀 ~ user1:", user1);
// console.log(user1.getInfo());

// const admin1 = new Admin("Lana", "lana@gmail.com", "super");
// console.log("🚀 ~ admin1:", admin1);

// console.log(admin1.isSuperAdmin());

// ! ✅ Задача 3 — Приватні поля та геттери/сеттери

// Створи клас BankAccount, який:

// 1. Має приватне поле
// 	•	#balance — число (початково 0)

// 2. Має методи
// 	•	deposit(amount)
// додає гроші на рахунок (якщо amount > 0)
// 	•	withdraw(amount)
// знімає гроші, але лише якщо достатньо грошей на рахунку
// 	•	getBalance()
// повертає поточний баланс

// class BankAccount {
//   #balance = 0;

//   deposit(amount) {
//     this.#balance = this.#balance + amount;
//     return this.#balance;
//   }

//   withdraw(amount) {
//     if (this.#balance >= amount) {
//       this.#balance = this.#balance - amount;
//     } else {
//       console.log(
//         `Недостатньо коштів на рахунку. На рахунку: ${this.#balance}`
//       );
//     }
//     return this.#balance;
//   }

//   getBalance() {
//     return this.#balance;
//   }
// }

// const accaunt = new BankAccount();

// console.log(accaunt.deposit(1000));

// console.log(accaunt.withdraw(200));

// console.log(accaunt.getBalance());

// !  ✅ Задача 4 — Магазин

// Створи клас Store, який:

// 1. Має властивість
// 	•	products — масив товарів (спочатку порожній)

// 2. Має методи
// 	•	addProduct(product) — додає товар у масив
// (товар — це об’єкт {name, price})
// 	•	getProducts() — повертає масив товарів
// 	•	getTotalPrice() — повертає суму цін усіх товарів у магазині

// class Store {
//   constructor(products) {
//     this.products = [];
//   }

//   addProduct(product) {
//     return this.products.push(product);
//   }

//   getProducts() {
//     return this.products;
//   }

//   getTotalPrice() {
//     return this.products.reduce((accum, num) => {
//       return accum + num.price;
//     }, 0);
//   }
// }

// const prod = new Store();

// prod.addProduct({ name: "Картопля", price: 50 });
// console.log(prod.getProducts());

// prod.addProduct({ name: "Помідори", price: 60 });
// prod.addProduct({ name: "Гречка", price: 40 });
// console.log(prod.getProducts());

// console.log(prod.getTotalPrice());

// ! ✅ Задача 5 — Клас “Кошик” з товарами

// Створи клас Cart, який:

// 1️⃣ Має приватне поле
// 	•	#items — масив об’єктів {name, price, quantity}

// 2️⃣ Методи
// 	•	addItem(name, price, quantity) — додає товар у кошик
// 	•	getItems() — повертає всі товари у кошику
// 	•	getTotalPrice() — повертає загальну суму всіх товарів, враховуючи кількість (price * quantity)
// 	•	getTotalQuantity() — повертає загальну кількість всіх товарів

// class Cart {
//   #items = [];

//   addItem(name, price, quantity) {
//     this.#items.push({ name, price, quantity });
//   }

//   getItems() {
//     return this.#items;
//   }

//   getTotalPrice() {
//     return this.#items.reduce((accum, num) => {
//       return accum + num.price * num.quantity;
//     }, 0);
//   }

//   getTotalQuantity() {
//     return this.#items.reduce((accum, num) => {
//       return accum + num.quantity;
//     }, 0);
//   }
// }

// const cart1 = new Cart();

// cart1.addItem("Картопля", 50, 4);
// console.table(cart1.getItems());

// cart1.addItem("Помідори", 10, 5);
// cart1.addItem("Цибуля", 10, 2);
// console.table(cart1.getItems());

// console.log(cart1.getTotalPrice());

// console.log(cart1.getTotalQuantity());

//!  ✅ Задача 6 — Магазин з фільтром і знижками
// Створи клас DiscountStore, який:

// 1️⃣ Має приватне поле
// 	•	#products — масив об’єктів {name, price, category}

// 2️⃣ Методи
// 	•	addProduct(name, price, category) — додає товар у магазин
// 	•	getProducts() — повертає всі товари

// 	•	getProductsByCategory(category) — повертає тільки товари з певної категорії

// 	•	getTotalPrice(discount = 0) — повертає суму всіх товарів, з урахуванням знижки (у %), якщо передали discount

// 	•	Наприклад, якщо discount = 10 → знижка 10% на всю суму

// 	•	getAveragePrice() — повертає середню ціну товару

// class DiscountStore {
//   #products = [];

//   addProduct(name, price, category) {
//     return this.#products.push({ name, price, category });
//   }

//   getProducts() {
//     return this.#products;
//   }

//   getProductsByCategory(category) {
//     return this.#products.filter((el) => {
//       return el.category === category;
//     });
//   }

//   getTotalPrice(discount = 0) {
//     return this.#products.reduce((accum, num) => {
//       return accum + num.price;
//     }, 0);
//   }

//   getAveragePrice() {
//     return (
//       this.#products.reduce((accum, num) => {
//         return accum + num.price;
//       }, 0) / this.#products.length
//     );
//   }
// }

// const store1 = new DiscountStore();

// store1.addProduct("Кросівки", 400, "Взуття");
// store1.addProduct("Сандалі", 200, "Взуття");
// store1.addProduct("Куртка", 500, "Верхній одяг");
// store1.addProduct("Кепка", 200, "Головні убори");

// console.table(store1.getProducts());

// console.table(store1.getProductsByCategory("Взуття"));

// console.log(store1.getAveragePrice());

//! 🟦 Задача — Студент і оцінки
// 	1.	Створи клас Student із властивостями: ім’я та масив оцінок.
// 	2.	Додай методи, щоб:
// 	•	додавати нову оцінку,
// 	•	обчислювати середню оцінку.
// 	3.	Створи звичайний об’єкт із ім’ям та масивом оцінок (не через клас).
// 	4.	Використовуй механізми call, apply або bind, щоб запустити методи класу для звичайного об’єкта і отримати його середню оцінку.

// class Student {
//   constructor(name, grade) {
//     this.name = name;
//     this.grade = grade;
//   }

//   addName(name) {
//     return this.name;
//   }

//   addGrade(grade) {
//     return this.grade;
//   }
// }

// const dima = new Student("Дмитро", 22);
// console.log("🚀 ~ dima:", dima);
// console.log(dima.addName());

// const lana = new Student("Лана", 33);
// console.log("🚀 ~ lana:", lana);
// console.log(lana.addName());

// class Teacher extends Student {
//   constructor(name, clas) {
//     super(name);
//     this.clas = clas;
//   }

//   addName(name) {
//     return this.name;
//   }

//   addClas(clas) {
//     return this.clas;
//   }
// }

// const hord = new Teacher("Гордій", "Математика");
// console.log("🚀 ~ hord:", hord);
// console.log(hord.addClas());

// console.log(dima.addName.call(dima));

//! Задача 2 — Клас User

// Умова:
// Створи клас User, який має:
// 	•	Конструктор з name та email
// 	•	Метод getInfo() — повертає рядок у форматі: "User: <name>, Email: <email>"

// Вхідні дані:
// const name = "Dmytro";
// const email = "dmytro@example.com";

// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }

//   getInfo() {
//     return `User: ${this.name}, Email: ${this.email}`;
//   }
// }

// const dima = new User("Dmytro", "ment@.com");
// console.log("🚀 ~ dima:", dima);

// console.log(dima.getInfo());

// ! Задача 1 — Product

// Створи клас Product з властивостями: name та price.
// Додай метод getPriceWithTax(taxPercent), який повертає ціну з врахованим податком.

// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }

//   getPriceWithTax(taxPercent) {
//     return this.price + this.price * (taxPercent / 100);
//   }
// }

// const tomato = new Product("Tomato", 50);

// console.log(tomato.getPriceWithTax(10));

// ! Задача 2 — Store

// Створи клас Store, який зберігає продукти у масиві.
// Методи:
// 	•	addProduct(product) — додає продукт у масив
// 	•	getTotalPrice() — повертає суму цін всіх продуктів

// class Store {
//   constructor() {
//     this.storage = [];
//   }

//   addProduct(product) {
//     this.storage.push(product);
//   }

//   getTotalPrice() {
//     return this.storage.reduce((sum, product) => sum + product.price, 0);
//   }
// }

// // Використання
// const store = new Store();
// store.addProduct({ name: "Milk", price: 30 });
// store.addProduct({ name: "Bread", price: 20 });

// console.log(store.getTotalPrice()); // 50
