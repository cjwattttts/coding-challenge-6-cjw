//TASK 1 - Business Profit Calculation
function calculateProfit(costPrice, sellingPrice, unitSold) { // declares function to calculate profit
    let profit = (sellingPrice - costPrice) * unitSold; // formula for profit calculation
    return "Profit Total: $" + profit;
}

console.log(calculateProfit(20, 30, 100)); // Expected output: "Total Profit: $1000"
console.log(calculateProfit(50, 70, 200)); // Expected output: "Total Profit: $4000"

//TASK 2 - Calculate Sales Tax
const calulcateSalesTax = function(amount,taxRate) { 
    let tax = amount * taxRate; // multiplies amount by tax rate
    return "Sales Tax: $" + tax; // returns tax calculation
};

console.log(calculateSalesTax(100, 0.07)); // Expected output: "Sales Tax: $7"
console.log(calculateSalesTax(500, 0.1)); // Expected output: "Sales Tax: $50"

//TASK 3 - Calculate Employee Bonus
const calculateBonus = (salary, perfomanceRating) => {
    let bonus; // declares bonus 
    if (perfomanceRating === "Excellent") { // checks if perfomance is excellent
        bonus = salary * 0.2; // 20 percent bonus
    } else if (perfomanceRating === "Good") { // checks if perfomance is good
        bonus = salary * 0.1; // 10 percent bonus
    } else if (perfomanceRating === "Average") { // checks if perfomance is avergae
        bonus = salary * 0.05; // 5 percent bonus
    } 
    return "Bonus: $" + bonus; // returns the bonus
};

console.log(calculateBonus(5000, "Excellent"));
console.log(calculateBonus(7000, "Good"));

//TASK 4 - Subscprition Pricing
function calculateSubscpritionCost(plan, months, discount = 0) { // defines the function
let pricePerMonth; // declares price per month variable
if (plan === "Basic") {
    pricePerMonth = 10; // sets price for basic plan
} else if (plan === "Premium") {
    pricePerMonth = 20; // sets price for premium plan
} else if (plan === "Enterprise") {
    pricePerMonth = 50; // sets price for enterprise plan
}
let totalCost = pricePerMonth * months; // calculates total cost
totalCost -= discount;
return "Total Cost: $" + totalCost;
}

console.log(calculateSubscriptionCost("Basic", 6, 10)) // Expected output: "Total Cost: $50"
console.log(calculateSubscriptionCost("Premium", 12, 0)); // Expected output: "Total Cost: $240"
