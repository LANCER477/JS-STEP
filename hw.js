let userName = prompt("Введите ваше имя:");
alert("Ку " + userName + " !");

const current_year = 2024;
let birthYear = prompt("Введите год рождения:");
let age = current_year - birthYear;
alert("Ваш возраст: " + age + " лет");

let sideLength = prompt("Введите длину стороны квадрата:");
let perimeter = 4 * sideLength;
alert("Периметр квадрата: " + perimeter);

let radius = prompt("Введите радиус окружности:");
alert(`Площадь: ${Math.PI * Math.pow(radius, 2)}`);

let distance = prompt("Введите расстояние между городами в километрах:");
let time = prompt("За сколько часов добраться?");
let speed = distance / time;
alert(`Вам нужно двигаться со скоростью: ${speed.toFixed(2)} км/ч`);

const USDtoHryvna = 41.82;
let dollars = prompt("Введите количество долларов для конвертации:");
let Hryvnas = dollars * USDtoHryvna;
alert(`${Hryvnas.toFixed(2)} гривен`)

let flashGB = prompt("Введите объем флешки в Гб:");
const fileSizeMB = 820;
let flashMB = flashGB * 1024;
let fileCount = Math.floor(flashMB / fileSizeMB);
alert(`На флешку объемом ${flashGB} Гб помещается ${fileCount} файлов размером 820 Мб.`);

let walletAmount = prompt("Введите сумму денег в вашем кошельке:");
   let chocolatePrice = prompt("Введите цену одной шоколадки:");
    let chocolateCount = Math.floor(walletAmount / chocolatePrice);
    let change = walletAmount - (chocolateCount * chocolatePrice);
    alert(`Вы можете купить ${chocolateCount} шоколадок. Ваша сдача ${change.toFixed(2)}.`);


    let number = parseInt(prompt("Введите трехзначное число:"));
   if (number >= 100 && number <= 999) {
    
    let ones = number % 10; 
    let tens = Math.floor((number % 100) / 10); 
    let hundreds = Math.floor(number / 100); 
     let reversedNumber = ones * 100 + tens * 10 + hundreds;

    alert("Число задом наперед: " + reversedNumber);
} else {
    alert("404");
}


let num = parseInt(prompt("Введите целое число:"));
let result = (num % 2 === 0) && "Чётное число" || "Нечётное число";
alert(result);
