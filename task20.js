let min = 0;
let max = 100;
let guessed = false;

alert("Загадайте число от 0 до 100");

while (!guessed) {
    let mid = Math.floor((min + max) / 2);
    let answer = prompt(`Число число > ${mid}, < ${mid} или == ${mid}? (Введите '>', '<' или '==')`);

    if (answer === ">") {
        min = mid + 1; 
    } else if (answer === "<") {
        max = mid - 1; 
    } else if (answer === "==") {
        alert(` Я угадал  число: ${mid}`);
        guessed = true; 
    } else {
        alert("404");
    }
}
