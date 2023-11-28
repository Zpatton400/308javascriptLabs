//Part 1:  Math Problems

// Function to check if the four numbers meet the specified criteria
function checkNumbers(num1, num2, num3, num4) {
  // Check if all numbers are divisible by 5
  const isDivisibleBy5 = num1 % 5 === 0 && num2 % 5 === 0 && num3 % 5 === 0 && num4 % 5 === 0;
  console.log(`Are all numbers divisible by 5? ${isDivisibleBy5}`);

  // Check if the first number is larger than the last
  const isFirstLargerThanLast = num1 > num4;
  console.log(`Is the first number larger than the last? ${isFirstLargerThanLast}`);

  // Arithmetic chain
  const result = (num2 - num1) * num3 % num4;

  // Change the way that isOver25 calculates
  const isOver25 = result > 25;
  console.log(`Is the result over 25? ${isOver25}`);

  // Check if at least two numbers are odd
  const areAtLeastTwoOdd = [num1, num2, num3, num4].filter(num => num % 2 !== 0).length >= 2;
  console.log(`Are there at least two odd numbers? ${areAtLeastTwoOdd}`);

  // Check if no number is larger than 25 and each number is unique
  const isNumbersValid = num1 <= 25 && num2 <= 25 && num3 <= 25 && num4 <= 25 &&
    num1 !== num2 && num1 !== num3 && num1 !== num4 &&
    num2 !== num3 && num2 !== num4 &&
    num3 !== num4;
  console.log(`Are the numbers valid? ${isNumbersValid}`);

  // Return the overall result
  return isDivisibleBy5 && isFirstLargerThanLast && !isOver25 && areAtLeastTwoOdd && isNumbersValid;
}


//Part 2:  Practical Math

// Constants
const totalDistance = 1500; // Total distance of the road trip in miles
const fuelBudget = 175; // Budget for fuel in dollars
const costPerGallon = 3; // Average cost of fuel per gallon in dollars
const speeds = [55, 60, 75]; // Different travel speeds in miles per hour
const efficiencies = [30, 28, 23]; // Corresponding fuel efficiencies in miles per gallon

// Function to calculate fuel needed for a specific speed
function calculateFuel(speed) {
    const speedIndex = speeds.indexOf(speed);
    const efficiency = efficiencies[speedIndex];
    return totalDistance / efficiency;
}

// Function to calculate trip duration for a specific speed
function calculateTripDuration(speed) {
    return totalDistance / speed;
}

// Function to check if the budget is enough for the fuel expense at a specific speed
function isBudgetEnough(speed) {
    const fuelNeeded = calculateFuel(speed);
    const fuelExpense = fuelNeeded * costPerGallon;
    return fuelExpense <= fuelBudget;
}

// Loop through different speeds and log results
for (const speed of speeds) {
    const fuelNeeded = calculateFuel(speed);
    const tripDuration = calculateTripDuration(speed);
    const budgetEnough = isBudgetEnough(speed);

    // Log results using literals
    console.log(`At ${speed} mph:`);
    console.log(`  - Gallons of fuel needed: ${fuelNeeded.toFixed(2)}`);
    console.log(`  - Trip duration: ${tripDuration.toFixed(2)} hours`);
    console.log(`  - Budget enough? ${budgetEnough ? 'Yes' : 'No'}`);
    console.log(''); // Add a line break for better readability
}


//Part 3:  Future Exploration 
/*
Incorporating control flow by the findOptimalSpeed function which iterates through the given speeds and stops when it finds the first speed within the budget. The optimal speed is then used to calculate and log the corresponding results. If no optimal speed is found within the budget, a message is logged accordingly.
*/

// Constants
const totalDistance = 1500; // Total distance of the road trip in miles
const fuelBudget = 175; // Budget for fuel in dollars
const costPerGallon = 3; // Average cost of fuel per gallon in dollars
const speeds = [55, 60, 75]; // Different travel speeds in miles per hour
const efficiencies = [30, 28, 23]; // Corresponding fuel efficiencies in miles per gallon

// Function to calculate fuel needed for a specific speed
function calculateFuel(speed) {
    const speedIndex = speeds.indexOf(speed);
    const efficiency = efficiencies[speedIndex];
    return totalDistance / efficiency;
}

// Function to calculate trip duration for a specific speed
function calculateTripDuration(speed) {
    return totalDistance / speed;
}

// Function to check if the budget is enough for the fuel expense at a specific speed
function isBudgetEnough(speed) {
    const fuelNeeded = calculateFuel(speed);
    const fuelExpense = fuelNeeded * costPerGallon;
    return fuelExpense <= fuelBudget;
}

// Function to find the optimal speed within the given speeds
function findOptimalSpeed() {
    let optimalSpeed = null;

    for (const speed of speeds) {
        if (isBudgetEnough(speed)) {
            optimalSpeed = speed;
            break; // Exit the loop if the budget is enough for the current speed
        }
    }

    return optimalSpeed;
}

// Find the optimal speed
const optimalSpeed = findOptimalSpeed();

// Log results using template literals
if (optimalSpeed !== null) {
    const fuelNeeded = calculateFuel(optimalSpeed);
    const tripDuration = calculateTripDuration(optimalSpeed);

    console.log(`Optimal speed is ${optimalSpeed} mph:`);
    console.log(`  - Gallons of fuel needed: ${fuelNeeded.toFixed(2)}`);
    console.log(`  - Trip duration: ${tripDuration.toFixed(2)} hours`);
} else {
    console.log('No optimal speed found within the budget.');
}
