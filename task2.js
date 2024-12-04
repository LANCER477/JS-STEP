let digit = prompt("Введите число от 0 до 9:");
let symbol = 
    digit === "0" ? ")" :
    digit === "1" ? "!" :
    digit === "2" ? "@" :
    digit === "3" ? "#" :
    digit === "4" ? "$" :
    digit === "5" ? "%" :
    digit === "6" ? "^" :
    digit === "7" ? "&" :
    digit === "8" ? "*" :
    digit === "9" ? "(" :
    "404";
alert(symbol);