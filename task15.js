let positives = 0, negatives = 0, zeros = 0, evens = 0, odds = 0;

for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt(`Введите число ${i + 1}:`));
    if (num > 0) positives++;
    else if (num < 0) negatives++;
    else zeros++;

    if (num % 2 === 0) evens++;
    else odds++;
}

console.log(`Положительных: ${positives}, Отрицательных: ${negatives}, Нулей: ${zeros}`);
console.log(`Четных: ${evens}, Нечетных: ${odds}`);
