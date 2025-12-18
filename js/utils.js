//! 1. Файл utils.js (Допоміжні функції)
// У цьому файлі ми будемо використовувати Named Export (іменований експорт), тому що функцій може бути багато.
// Створи функцію calculateDiscount(price, percent), яка повертає ціну зі знижкою.
// Створи константу CURRENCY, яка дорівнює рядку '$'.
// Експортуй їх обидва окремо.

export const CURRENCY = "$";

export function calculateDiscount(price, percent) {
  return price - (percent * price) / 100;
}

// console.log(calculateDiscount(500, 10) + CURRENCY);
