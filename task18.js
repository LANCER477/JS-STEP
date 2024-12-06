const daysOfWeek = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
let currentDay = 0;

do {
    console.log(`День недели: ${daysOfWeek[currentDay]}`);
    currentDay = (currentDay + 1) % daysOfWeek.length; 
} while (confirm(" Увидеть следующий день?"));
