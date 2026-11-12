/* ==========================================
// ASSIGNMENT 1: SMART PROFILE & BIRTH YEAR CALCULATOR
// ==========================================

// Step 1: Take user inputs via prompt
var name = prompt("Enter your name:");
var currentAge = Number(prompt("Enter your current age:"));
var currentYear = Number(prompt("Enter the current year:"));

// Step 2: Calculate birth year using math subtraction
var birthYear = currentYear - currentAge;

// Step 3: Output the friendly message to console and alert box
console.log("Hello " + name + ", your birth year is " + birthYear + "!");
alert("Hello " + name + ", your birth year is " + birthYear + "!");

// ==========================================
// ASSIGNMENT 2: SMART SUPERMARKET BILL SPLITTER
// ==========================================

// Step 1: Input prices for 3 separate items
var item1 = Number(prompt("Enter price of item 1:"));
var item2 = Number(prompt("Enter price of item 2:"));
var item3 = Number(prompt("Enter price of item 3:"));

// Step 2: Calculate the total bill
var totalBill = item1 + item2 + item3;

// Step 3: Input total family members
var familyMembers = Number(prompt("Enter total number of family members:"));

// Step 4: Calculate the per-person share
var perPersonShare = totalBill / familyMembers;

// Step 5: Display results on screen and console
console.log("Total Bill: " + totalBill);
console.log("Per-Person Share: " + perPersonShare);
alert("Total Bill: " + totalBill + "\nPer-Person Share: " + perPersonShare);

// ==========================================
// ASSIGNMENT 3: INTERACTIVE CLI CALCULATOR
// ==========================================

// Step 1: Input numbers and operator from the user
var num1 = Number(prompt("Enter first number:"));
var num2 = Number(prompt("Enter second number:"));
var operator = prompt("Enter operator (+, -, *, /):");

var result;

// Step 2: Check selected operator using conditional statements
if (operator === "+") {
    // Addition
    result = num1 + num2;
} else if (operator === "-") {
    // Subtraction
    result = num1 - num2;
} else if (operator === "*") {
    // Multiplication
    result = num1 * num2;
} else if (operator === "/") {
    // Division with validation for zero division
    if (num2 !== 0) {
        result = num1 / num2;
    } else {
        result = "Error! Division by zero.";
    }
} else {
    // Fallback for invalid operators
    result = "Invalid operator selected!";
}

// Step 3: Show the final calculation result
console.log("Result: " + result);
alert("Result: " + result);

// ==========================================
// ASSIGNMENT 4: MOVIE TICKET DISCOUNT & VIP PASS SYSTEM
// ==========================================

// Step 1: Input user profile data
var age = Number(prompt("Enter your age:"));
var isStudent = prompt("Are you a student? (yes/no)").toLowerCase();
var promoCode = prompt("Enter promo code (if any):");

var ticketPrice = 1000; // Base standard ticket price

// Step 2: Apply conditions based on age or student status
if (age < 12) {
    ticketPrice = 300; // Special kids price
    console.log("Child ticket price applied.");
} else if (isStudent === "yes") {
    ticketPrice = ticketPrice - (ticketPrice * 0.20); // 20% discount for students
    console.log("Student discount applied.");
}

// Step 3: Check for special promo code perks using nested logic
if (promoCode === "VIPBACKSTAGE") {
    console.log("Congratulations! You have been granted a VIP backstage pass.");
}

// Step 4: Display the final ticket price
console.log("Final Ticket Price: " + ticketPrice);
alert("Final Ticket Price: " + ticketPrice);*/