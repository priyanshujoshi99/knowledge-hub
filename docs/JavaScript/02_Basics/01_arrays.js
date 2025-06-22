// Array declaration and initialization
const myArr = [0, 1, 2, 3, 4, 5]; // A simple array with elements 0-5
const myHeros = ['shaktiman', 'naagraj']; // An array with hero names

// Shallow copy vs Deep copy explanation:
// Shallow copy: A copy of the array but with the same memory reference for nested objects.
// Deep copy: A completely new copy of the array with a different memory reference (especially useful for nested objects).
const myArr2 = new Array(1, 2, 3, 4); // Creates a new array with elements 1-4

// Array Methods:

// Adding and removing elements from the array
// myArr.push(6);  // Adds 6 to the end of the array
// myArr.push(7);  // Adds 7 to the end of the array
// myArr.pop();    // Removes the last element (7) from the array

// myArr.unshift(9);  // Adds 9 at the beginning of the array
// myArr.shift();     // Removes the first element (9) from the array

// Checking for an element's presence
// console.log(myArr.includes(9));  // Checks if 9 is in the array (returns true/false)
// console.log(myArr.indexOf(3));  // Finds the index of 3 in the array (returns index or -1 if not found)

// Joining array elements into a string
// const newArr = myArr.join();  // Converts array elements to a string, default separator is ','

// console.log(myArr);
// console.log(newArr);

// Slice and Splice methods

console.log('A ', myArr); // Logs the original array before operations

// Slice: Extracts a shallow copy of a portion of the array without modifying the original array
const myn1 = myArr.slice(1, 3); // Extracts elements from index 1 to index 3 (not including 3)
console.log(myn1); // Logs the sliced array [1, 2]
console.log('B ', myArr); // Logs the original array, which remains unchanged

// Splice: Modifies the array by removing or adding elements at specific positions
const myn2 = myArr.splice(1, 3); // Removes 3 elements starting from index 1
console.log('C ', myArr); // Logs the array after splice, which is modified
console.log(myn2); // Logs the removed elements [1, 2, 3]
