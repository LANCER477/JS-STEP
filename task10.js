let  day = parseInt(prompt("Enter the day:"));
let  month = parseInt(prompt("Enter the month:"));
let  year = parseInt(prompt("Enter the year:"));

const  daysInMonth = [31, (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

if (day < daysInMonth[month - 1]) {
    day++;
} else

 {
    day = 1;
    if (month === 12) {
        month = 1;
        year++;
    } else
     {
        month++;
    }
}

console.log(`Next date: ${day}.${month}.${year}`);
