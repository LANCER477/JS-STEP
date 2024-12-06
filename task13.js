let number = parseInt(prompt("Введите число:"));
console.log(`Делители числа ${number}:`);

for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        console.log(i);
    }
}
