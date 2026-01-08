//* PROBLEM 6: SUM OF ALL NUMBERS IN AN ARRAY
// Write a function that returns the sum of all numbers in an array.

// Example:
// Input: [1, 2, 3, 4]
// Output: 10

function sumOfNumber(numberArray) {
  let totalSum = 0;

  for (let i = 0; i < numberArray.length; i++) {
    totalSum += numberArray[i];
  };

  return totalSum;
}

console.log(sumOfNumber([1, 2, 3, 4]));