let age = parseInt(prompt("Введите ваш возраст:"));
if (age >= 0 && age <= 2) {
    alert("Вы малыш");
} else if (age > 2 && age <= 12) {
    alert("Вы подросток");
} else if (age > 12 && age <= 18) {
    alert("Вы серьёзный парень");
} else if (age > 18 && age <= 60) {
    alert("Мужик");
} else if (age > 60) {
    alert("Пенсия");
} else {
    alert("Смерть");
}