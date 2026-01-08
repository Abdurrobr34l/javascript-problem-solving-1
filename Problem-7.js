//* PROBLEM 7: FIND EVEN NUMBERS IN AN ARRAY
// Write a function that returns all even numbers from a given array.

// Example:
// Input: [1, 2, 3, 4, 5, 6]
// Output: [2, 4, 6]

function findEvenNum(numberArray) {
  let evenNumber = [];

  for (let i=0; i < numberArray[i]; i++) {
    if (numberArray[i] % 2 == 0) {
      evenNumber.push(numberArray[i]);
    };
  };

  return evenNumber
};

console.log(findEvenNum([1, 2, 3, 4, 5, 6]));