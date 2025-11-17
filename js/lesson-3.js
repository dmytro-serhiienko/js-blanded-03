//?Завдання 1:
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5];

//* Variant 1
// const quad = numbers.reduce((accum, num) => {
//   accum.push(num * num);
//   return accum;
// }, []);
// console.log("🚀 ~ quad:", quad);

//* Variant 2
// const quad = numbers.map((num) => {
//   return num * num;
// });
// console.log("🚀 ~ quad:", quad);

//? Завдання 2:
// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];

//* Variant 1
// const addValues = data.reduce((accum, num) => {
//   accum.push(...num.values);
//   return accum;
// }, []);
// console.log("🚀 ~ addValues:", addValues);

//* Variant 2
// function newValues() {
//   const result = [];

//   for (const element of data) {
//     if (!result.includes(element.values)) {
//       result.push(...element.values);
//     }
//   }
//   return result;
// }
// console.log(newValues());

//? Завдання 3:
// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

// const people = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

//* Variant 1
// const checker = people.some((age) => age.age <= 20);
// console.log("🚀 ~ checker:", checker);

//* Variant 2
// function checker() {
//   for (const element of people) {
//     if (element.age < 20) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(checker());

//? Завдання 4:
// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним.
// Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

//* Variant 1
// const checker = numbers.every((num) => num % 2 === 0);
// console.log("🚀 ~ checker:", checker);

//* Variant 2
// function checker() {
//   for (const el of numbers) {
//     if (el % 2 === 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }
// console.log("🚀 ~ checker ~ checker:", checker(numbers));

//? Завдання 5:
// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];

//* Variant 1
// const checker = numbers.find((num) => num % 2 !== 0);
// console.log("🚀 ~ checker:", checker);

//* Variant 2 всі не парні
// const checker = numbers.filter((num) => num % 2 !== 0);
// console.log("🚀 ~ checker:", checker);

//* Variant 2
// function checker() {
//   for (const el of numbers) {
//     if (el % 2 !== 0) {
//       return el;
//     }
//   }
// }
// console.log("🚀 ~ checker ~ checker:", checker(numbers));

//? Завдання 6:
// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];

//* Variant 1
// const normalize = numbersArray.toSorted((a, b) => a - b);
// console.log("🚀 ~ normalize:", normalize);

//* Variant 2
// const normalize = numbersArray.sort((a, b) => a - b);
// console.log("🚀 ~ normalize:", normalize);
// console.log("🚀 ~ numbersArray:", numbersArray);

// ?Завдання 7:
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ["banana", "orange", "apple", "pear"];

//* Variant 1
// const normalaizer = stringArray.toSorted((a, b) => a.localeCompare(b));
// console.log("🚀 ~ normalaizer:", normalaizer);

// ?Завдання 8:

//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

//* Variant 1
// const normalaizerAge = users.toSorted((a, b) => a.age - b.age);
// console.log("🚀 ~ normalaizerAge:", normalaizerAge);

//* Variant 2
// const normalaizerAge = users.sort((a, b) => a.age - b.age);
// console.log("🚀 ~ normalaizerAge:", normalaizerAge);
// console.log("🚀 ~ users:", users);

// ?Завдання 9:
// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

//* Variant 1
// const newArray = user.reduce((accum, el) => {
//   if (el.age > 20) {
//     accum.push(el);
//   }
//   return accum;
// }, []);
// console.log("🚀 ~ newArray:", newArray);

//* Variant 2
// const newArray = user.filter((age) => age.age > 20);
// console.log("🚀 ~ newArray:", newArray);

//* Variant 3
// function newArray() {
//   const resultArray = [];

//   for (const el of user) {
//     if (el.age > 20) {
//       resultArray.push(el);
//     }
//   }
//   return resultArray;
// }
// console.log("🚀 ~ newArray ~ newArray:", newArray());

// ?Завдання 10:
// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

const numbers = [1, 2, 3, 4, 5];

//* Variant 1
// const total = numbers.reduce((accum, num) => {
//   return accum + num;
// });
// console.log("🚀 ~ total:", total);

//* Variant 2
// function total() {
//   let result = 0;

//   for (const number of numbers) {
//     result = result + number;
//   }
//   return result;
// }
// console.log("🚀 ~ total ~ total:", total(numbers));

// ?Завдання 11:
// Розроби клас Calculator, який дозволяє виконувати арифметичні
//  операції над числом за допомогою методів класу, підтримуючи
// ланцюжковий виклик (method chaining).
//
// Вимоги до класу Calculator
// - Метод number(value)
// Встановлює початкове значення для наступних обчислень.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод getResult, Повертає поточний результат усіх операцій.
// Не змінює значення, просто повертає його.

// - метод add - Додає value до поточного значення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод substruct - Віднімає value від поточного значення. Повертає this.

// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод multiply -Множить поточне значення на value. Повертає this.

// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка

// class Calculator {
//   number(value) {
//     this.value = value;
//     return this;
//   }

//   add(num) {
//     this.value += num;
//     return this;
//   }

//   substract(num) {
//     this.value -= num;
//     return this;
//   }

//   multiply(num) {
//     this.value *= num;
//     return this;
//   }

//   divide(num) {
//     this.value /= num;
//     return this;
//   }

//   getResult() {
//     return this.value;
//   }
// }

// // Приклад використання:
// const calc = new Calculator();

// const result = calc
//   .number(10) // Встановлюємо початкове значення 10
//   .add(5) // Додаємо 5 (10 + 5 = 15)
//   .substract(3) // Віднімаємо 3 (15 - 3 = 12)
//   .multiply(4) // Множимо на 4 (12 * 4 = 48)
//   .divide(2) // Ділимо на 2 (48 / 2 = 24)
//   .getResult(); // Отримуємо результат: 24

// console.log(result); // 24

//? Завдання 12:
// Напиши клас Client який створює об'єкт з властивостями login email.
// Оголоси приватні властивості #login #email, доступ до яких зроби
// через геттер та сеттер login email

// class Client {
//   #login;
//   #email;

//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }

//   set login(value) {
//     this.#login = value;
//   }

//   set email(value) {
//     this.#email = value;
//   }

//   get getInfo() {
//     return `Login: ${this.#login}, email: ${this.#email}`;
//   }
// }

// const client1 = new Client("Dmytro", "dima@mail.com");
// // console.log("🚀 ~ client1:", client1);
// console.log(client1.getInfo);

// const client2 = new Client("Petro", "petro@mail.com");
// // console.log("🚀 ~ client2:", client2);
// console.log(client2.getInfo);
// *
// class Worker {
//   #name;
//   #surname;
//   #age;

//   constructor(name, surname, age, position, department) {
//     this.#name = name;
//     this.#surname = surname;
//     this.#age = age;
//     this.position = position;
//     this.department = department;
//   }

//   set name(newName) {
//     this.#name = newName;
//   }

//   set surnname(newSurname) {
//     this.#surname = newSurname;
//   }

//   set age(newAge) {
//     this.#age = newAge;
//   }

//   get nameSurname() {
//     return `Name:${this.#name}, Surname:${this.#surname}`;
//   }

//   get workPosition() {
//     return `Position:${this.position}, Departament:${this.department}`;
//   }

//   get allInfo() {
//     return `Name: ${this.#name}; Surname: ${this.#surname}; Age: ${
//       this.#age
//     }; Position: ${this.position}; Departament: ${this.department};`;
//   }
// }

// const worker = new Worker("Bob", "Maquin", 31);
// console.log("🚀 ~ worker:", worker);

// worker.position = "Sales Manager";
// worker.department = "Electronic";
// console.log("🚀 ~ worker:", worker);

// console.log(worker.allInfo);

// console.log(worker.workPosition);

// // сеттер тільки для приватних ?
// // порядок виводу інфо

// ?Завдання 13:
//  Наслідування у класах!
// Cтворіть клас `Person`, який містить наступні властивості:
//  - `name` - ім'я людини;
//  - `age`- вік людини;
//  - `gender` - стать людини;
//  - `email`- електронна пошта людини.

// Крім того, клас `Person` має мати метод `getDetails()`,
// який повертає об'єкт з ім'ям, віком, статтю
//та електронною поштою людини.

//
// Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
//  - salary - зарплата співробітника;
//  - department - відділ, в якому працює співробітник.
// Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.

// class Person {
//   constructor(name, age, gender, email) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.email = email;
//   }

//   getDetails() {
//     return `Name: ${this.name}; Age: ${this.age}; Gender: ${this.gender}; Email: ${this.email};`;
//   }
// }

// class Employee extends Person {
//   constructor(name, age, gender, email, salary, department) {
//     super(name, age, gender, email);
//     this.salary = salary;
//     this.department = department;
//   }

//   getEmployeeDetails() {
//     return `Salary: ${this.salary}$; Department: ${this.department};`;
//   }
// }

// const person1 = new Person("John", 31, "male", "john@mail.com");
// // console.log("🚀 ~ person1:", person1);
// // console.log(person1.getDetails());

// // prettier-ignore
// const employee = new Employee("Bob", 41, "male", "bob@gmail.com", 5500, "Director");
// console.log(employee.getDetails());
// console.log(employee.getEmployeeDetails());

// console.log(employee.getDetails() + employee.getEmployeeDetails());
