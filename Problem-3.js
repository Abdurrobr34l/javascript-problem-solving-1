//* PROBLEM 3: CHECK FOR PALINDROME
// Write a function that checks if a string is a palindrome (reads the same forward and backward).

// Example:
// Input: "madam"
// Output: true
// Input: "hello"
// Output: false

function palindromeChecker(string) {
  let word = string.toLowerCase();
  let isItPalindrome = true;

  for (let i = 0; i < word.length; i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      isItPalindrome = false;
    }
  };

  return isItPalindrome;
}

console.log(palindromeChecker("madam"));
console.log(palindromeChecker("hello"));