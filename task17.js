let number = prompt("Введите число:");
let shift = parseInt(prompt("На сколько цифр сдвинуть?"));

shift %= number.length; 
let shiftedNumber = number.slice(shift) + number.slice(0, shift);

console.log(`Результат сдвига: ${shiftedNumber}`);
