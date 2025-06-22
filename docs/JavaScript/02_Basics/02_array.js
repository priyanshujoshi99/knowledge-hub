// Arrays of Marvel and DC heroes
const marvel_heros = ['thor', 'Ironman', 'spiderman']; // Marvel superheroes
const dc_heros = ['superman', 'flash', 'batman']; // DC superheroes

// Pushing the entire DC heroes array into marvel_heros
// marvel_heros.push(dc_heros);  // This will add the entire dc_heros array as a single element to marvel_heros

// Logging the array after push operation
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);  // Accessing the second element of the dc_heros array inside marvel_heros

// Using concat() to merge two arrays into one, creating a new array
const allHeros = marvel_heros.concat(dc_heros); // Combines marvel_heros and dc_heros into a new array
console.log(allHeros); // Logs the merged array of heroes

// Using the spread operator to merge arrays (alternative to concat)
const all_new_heros = [...marvel_heros, ...dc_heros]; // Merges marvel_heros and dc_heros into a new array
console.log(all_new_heros); // Logs the merged array

// Working with nested arrays
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]; // An array with nested arrays

// Flattening the nested array using flat() with Infinity to remove all levels of nesting
const real_another_array = another_array.flat(Infinity); // Flattens the array to a single level
console.log(real_another_array); // Logs the flattened array

// Checking if a variable is an array
console.log(Array.isArray('john')); // Returns false, 'john' is a string, not an array

// Converting a string to an array of its characters
console.log(Array.from('john')); // Converts the string 'john' into an array ['j', 'o', 'h', 'n']

// Converting an object to an array (object needs to have iterable properties)
console.log(Array.from({ name: 'john' })); // Returns an empty array, because objects are not directly iterable like arrays

// Using Array.of() to create a new array with the specified elements
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); // Creates a new array [100, 200, 300] from the provided values
