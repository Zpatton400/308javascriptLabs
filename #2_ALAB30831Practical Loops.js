// Loop Activity #2: Prime Time

// Function to check if a number is prime
function isPrime(num) {
  // 1 and numbers less than 1 are not prime
  if (num <= 1) {
    return false;
  }

  // Check for divisibility from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  // If no divisors are found, the number is prime
  return true;
}

// Function to find the next prime number greater than or equal to n
function findNextPrime(n) {
  // Ensure n is a positive integer
  n = Math.max(2, Math.floor(n));

  // Start a while loop to search for the next prime number
  while (true) {
    if (isPrime(n)) {
      console.log(n); // Log the prime number
      break; // Exit the loop once a prime number is found
    }
    n++; // Increment n to check the next number
  }
}

// Test the function with different values of n
findNextPrime(4); // Should log 5
findNextPrime(5); // Should log 7
findNextPrime(9); // Should log 11
