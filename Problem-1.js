//* PROBLEM 1: REVERSE A STRING
// Write a function that takes a string and returns it reversed.

// Example:
// Input: "hello"
// Output: "olleh"

function reverseString(string) {
  let reversedString = "";

  for (let i= string.length - 1; i>=0; i--) {
    reversedString += string[i];
  }

  return reversedString;
}

console.log(reverseString("hello"));
