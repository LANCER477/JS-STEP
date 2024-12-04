let year = parseInt(prompt("Введите год:"));
let LeapYear = (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0))
    ? "Год високосный"
    : "Год не високосный";
alert(LeapYear);
