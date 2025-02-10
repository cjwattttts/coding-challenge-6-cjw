//TASK 1 - Business Profit Calculation
function calculateProfit(costPrice, sellingPrice, unitSold) { // declares function to calculate profit
    let profit = (sellingPrice - costPrice) * unitSold; // formula for profit calculation
    return "Profit Total: $" + profit;
}
console.log(calculateProfit(20, 30, 100)); // Expected output: "Total Profit: $1000"
console.log(calculateProfit(50, 70, 200)); // Expected output: "Total Profit: $4000"

