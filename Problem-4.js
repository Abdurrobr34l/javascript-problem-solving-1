//* PROBLEM 4: FIND THE MAXIMUM NUMBER
// Write a function that takes an array of numbers and returns the largest number.

// Example:
// Input: [5, 1, 9, 3]
// Output: 9


function findLargeNumber(numbersArray) {
  let initialNumber = numbersArray[0];

  for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] > initialNumber) {
      initialNumber = numbersArray[i];
    };
  };

  return initialNumber
}

console.log(findLargeNumber([5, 1, 3]));