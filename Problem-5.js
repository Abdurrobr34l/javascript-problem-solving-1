//* PROBLEM 5: REMOVE DUPLICATES FROM AN ARRAY
// Write a function that removes all duplicate numbers from an array.

// Example:
// Input: [1, 2, 2, 3, 4, 4]
// Output: [1, 2, 3, 4]

function removeDuplicateNumber(numberArray) {
  let newNumberArray = [];

  for (let i = 0; i < numberArray.length; i++) {
    let isDuplicate = false;

    for (let ii = 0; ii < newNumberArray.length; ii++) {
      if (numberArray[i] === newNumberArray[ii]) {
        isDuplicate = true;
        break;
      }

    }

    if (!isDuplicate) {
      newNumberArray.push(numberArray[i]);
    }
  }
  
  return newNumberArray;

}

console.log(removeDuplicateNumber([1, 2, 2, 3, 4, 4]));