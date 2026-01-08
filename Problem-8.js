//* PROBLEM 8: CAPITALIZE FIRST LETTER OF EACH WORD
// Write a function that capitalizes the first letter of each word in a string.

// Example:
// Input: "hello world"
// Output: "Hello World"

function capitalizeFirstLetter(sentence) {
  let words = sentence.split(" ");

  for (let i = 0; i < words.length; i++) {
     words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  }

  let capitalized = words.join(" ");
  return capitalized
}

console.log(capitalizeFirstLetter("hello world letter"));