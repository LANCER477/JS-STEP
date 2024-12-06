do {
    let num1 = parseFloat(prompt("Введите первое число:"));
    let num2 = parseFloat(prompt("Введите второе число:"));
    let operator = prompt("Введите знак (+, -, *, /):");

    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : "Ошибка: деление на ноль";
            break;
        default:
            result = "Неверный знак";
    }

    console.log(`Результат: ${result}`);
} while (confirm("Решить еще один пример?"));
