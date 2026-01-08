//* PROBLEM 2: COUNT VOWELS IN A STRING
// Write a function that counts how many vowels (a, e, i, o, u) are in a given string.

// Example:
// Input: "programming"
// Output: 3

function vowelCounter(string) {
  let stringToLowerCase = string.toLowerCase();
  let countVowels = 0;

  for (let i = 0; i < stringToLowerCase.length; i++) {
    if (stringToLowerCase[i] === "a" || stringToLowerCase[i] === "e" || stringToLowerCase[i] === "i" || stringToLowerCase[i] === "o" || stringToLowerCase[i] === "u") {
      countVowels += 1;
    }
  }

  retur`n countVowels;`
}

console.log(vowelCounter("programming"));