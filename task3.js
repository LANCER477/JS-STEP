let number = prompt("Введите трехзначное число:");
if (number.length === 3) {
    let first = number[0];
    let second = number[1];
    let third = number[2];
    let result = (first === second || first === third || second === third) 
        ? "Есть одинаковые цифры" 
        : "Все цифры разные";
    alert(result);
} else {
    alert("404");
}
