
function PerfectNum(num) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum === num;
}

function findPerfectNum(min, max) {
    let result = [];
    for (let i = min; i <= max; i++) {
        if (PerfectNum(i)) { 
            result.push(i);
        }
    }
    return result;
}
alert(findPerfectNum(1, 10000));