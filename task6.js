let  rate;
switch (currency) {
    case "EUR":
        rate = 0.93;
        break;
    case "UAN":
        rate = 36.92;
        break;
    case "AZN":
        rate = 1.7;
        break;
    default:
        alert("Некорректная валюта");
        rate = null;
}
if (rate) {
    alert(`Сумма в ${currency}: ${(usdAmount * rate).toFixed(2)}`);
}
