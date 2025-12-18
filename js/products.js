//! 2. Файл Product.js (Основний компонент)
// У цьому файлі ми використаємо Default Export (експорт за замовчуванням), оскільки цей файл відповідає за один конкретний об'єкт.
//! Створи клас або функцію-конструктор Product, яка приймає name та price.
// Експортуй цей клас як дефолтний.

export class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  addName(productName) {
    this.name = productName;
  }
  addPrice(productPrice) {
    this.price = productPrice;
  }
}

// const product = new Product("Kovbasa", 300);
