//* PROBLEM 4: FIND THE MAXIMUM NUMBER
// Write a function that takes an array of numbers and returns the largest number.

// Example:
// Input: [5, 1, 9, 3]
// Output: 9


function findLargeNumber(numbersArray) {
  let bigNum = numbersArray[0];

  for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] > bigNum) {
      bigNum = numbersArray[i];
    };
  };

  return bigNum
}

console.log(findLargeNumber([5, 1, 9, 3]));