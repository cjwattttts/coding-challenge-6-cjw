//TASK 1 - Business Profit Calculation
function calculateProfit(costPrice, sellingPrice, unitSold) { // declares function to calculate profit
    let profit = (sellingPrice - costPrice) * unitSold; // formula for profit calculation
    return "Profit Total: $" + profit;
}

console.log(calculateProfit(20, 30, 100)); // Expected output: "Total Profit: $1000"
console.log(calculateProfit(50, 70, 200)); // Expected output: "Total Profit: $4000"

//TASK 2 - Calculate Sales Tax
const calculateSalesTax = function(amount,taxRate) { 
    let tax = amount * taxRate; // multiplies amount by tax rate
    return "Sales Tax: $" + tax; // returns tax calculation
};

console.log(calculateSalesTax(100, 0.07)); // Expected output: "Sales Tax: $7"
console.log(calculateSalesTax(500, 0.1)); // Expected output: "Sales Tax: $50"

//TASK 3 - Calculate Employee Bonus
const calculateBonus = (salary, performanceRating) => {
    let bonus; // declares bonus 
    if (performanceRating === "Excellent") { // checks if perfomance is excellent
        bonus = salary * 0.2; // 20 percent bonus
    } else if (performanceRating === "Good") { // checks if perfomance is good
        bonus = salary * 0.1; // 10 percent bonus
    } else if (performanceRating === "Average") { // checks if perfomance is avergae
        bonus = salary * 0.05; // 5 percent bonus
    } 
    return "Bonus: $" + bonus; // returns the bonus
};

console.log(calculateBonus(5000, "Excellent"));
console.log(calculateBonus(7000, "Good"));

//TASK 4 - Subscprition Pricing
function calculateSubscriptionCost(plan, months, discount = 0) { // defines the function
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

//TASK 5 - Currency Conversion
function convertCurrency(amount,exchangeRate) { // defines function for currency conversion
    let convertedAmount = amount * exchangeRate;
    return "Converted Amount: $" + convertedAmount.toFixed(2); // returns converted amount
}

console.log(convertCurrency(100, 1.1)); // Expected output: "Converted Amount: $110.00"
console.log(convertCurrency(250, 0.85)); // Expected output: "Converted Amount: $212.50"

//TASK 6 - Higher Order Functrion for Bulk Orders
function applyBulkDiscount(orders, discountFunction) {
    return orders.map(discountFunction);
}

let orders = [200, 600, 1200, 450, 800];
applyBulkDiscount(orders, amount => amount > 500 ? amount * 0.9 : amount);
// Expected output: [200, 540, 1080, 450, 720]

//TASK 7 - Business Expense Tracker
function createExpenseTracker() { // defines function to create an expense tracker
    let totalExpenses = 0; // initial total expense value

    return function(expense) {
        totalExpenses += expense; // adds expense to total
        return "Total Expenses: $" + totalExpenses;
    };
}

let tracker = createExpenseTracker();
console.log(tracker(200)); // Expected output: "Total Expenses: $200"
console.log(tracker(150)); // Expected output: "Total Expenses: $350"

//TASK 8 - Recursion in Employee Promotion Evaluation
function calculateYearsToPromotion(employeeLevel) { // define function to calculate yearts to promotion
    if (employeeLevel >= 10) {
        return "Years to Reach Level 10: 0"; // return zero yearts if at level 10
    }
    return 1 + calculateYearsToPromotion(employeeLevel + 1);
}
console.log(calculateYearsToPromotion(7)); // Expected output: "Years to Level 10: 6"
console.log(calculateYearsToPromotion(5)); // Expected output: "Years to Level 10: 10"