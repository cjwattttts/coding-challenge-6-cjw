//TASK 1 - Business Profit Calculation
function calculateProfit(costPrice, sellingPrice, unitSold) { // declares function to calculate profit
    let profit = (sellingPrice - costPrice) * unitSold; // formula for profit calculation
    return "Profit Total: $" + profit;
}

console.log(calculateProfit(20, 30, 100)); // Expected output: "Total Profit: $1000"
console.log(calculateProfit(50, 70, 200)); // Expected output: "Total Profit: $4000"

//TASK 2 - Calculate Sales Tax
const calulcateSalesTax = function(amount,taxRate) {
    let tax = amount * taxRate;
    return "Sales Tax: $" + tax;
};

console.log(calculateSalesTax(100, 0.07)); // Expected output: "Sales Tax: $7"
console.log(calculateSalesTax(500, 0.1)); // Expected output: "Sales Tax: $50"