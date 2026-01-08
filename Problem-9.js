//* PROBLEM 9: FIND THE FACTORIAL OF A NUMBER
// Write a function that calculates the factorial of a number using a loop.

// Example:
// Input: 5
// Output: 120

function findFactorial(number) {
  // let arrayOfNum = [number];
  let num = 1;

  for (let i = 1; i <= number; i++) {
    num *= i;
  }

  return num;
}

console.log(findFactorial(5));