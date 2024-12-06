let purchaseAmount = parseFloat(prompt("Enter the purchase amount:"));
let discount = 0;

if (purchaseAmount >= 500) {
    discount = 7;
} else if (purchaseAmount >= 300) {
    discount = 5;
} else if (purchaseAmount >= 200) {
    discount = 3;
}

let finalAmount = purchaseAmount - (purchaseAmount * discount / 100);
console.log(`Final amount after discount: ${finalAmount}`);
