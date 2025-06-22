// Working with strings in JavaScript

// Template literals
const name = 'priyanshu';
const repoCount = 50;
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// String object creation
const gameName = new String('priyanshu-pj-com');

// Accessing characters and properties
console.log(gameName.charAt(2)); // Outputs: 'i' (character at index 2)
console.log(gameName.indexOf('n')); // Outputs: 5 (first occurrence of 'n')

// Substring and slicing
const newString = gameName.substring(0, 4); // Extracts from index 0 to 4 (excluding 4)
console.log(newString); // Outputs: 'priy'

const anotherString = gameName.slice(-8, 4); // Negative start index counts from end; end index ignored
console.log(anotherString); // Outputs: '' (invalid range)

// Trimming spaces
const newStringOne = '   priyanshu    ';
console.log(newStringOne.trim()); // Outputs: 'priyanshu' (removes leading and trailing spaces)

// Replacing and checking substrings
const url = 'https://priyanshu.com/priyanshu%20joshi';
console.log(url.replace('%20', '-')); // Replaces '%20' with '-'

console.log(url.includes('sundar')); // Checks if 'sundar' exists in the string; Outputs: false

// Splitting strings
console.log(gameName.split('-')); // Splits the string into an array by '-'; Outputs: ['priyanshu', 'pj', 'com']
