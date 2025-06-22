// Creating an empty object using object literal syntax
const tinderUser = {}; // Equivalent to const tinderUser = new Object();

// Adding properties to the object
tinderUser.id = '123abc'; // Adds a property 'id' with value '123abc'
tinderUser.name = 'Sammy'; // Adds a property 'name' with value 'Sammy'
tinderUser.isLoggedIn = false; // Adds a property 'isLoggedIn' with a boolean value

// Logging the tinderUser object
// console.log(tinderUser);  // Logs the object with added properties

// Nested objects: A regular user object with a nested structure
const regularUser = {
  email: 'some@gmail.com', // A simple property
  fullname: {
    // Nested object for user's full name
    userfullname: {
      // Further nested object for first and last name
      firstname: 'john',
      lastname: 'choudhary'
    }
  }
};

// Accessing nested properties
// console.log(regularUser.fullname.userfullname.firstname);  // Logs 'john', accessing deeply nested properties

// Merging multiple objects using different methods

const obj1 = { 1: 'a', 2: 'b' }; // First object
const obj2 = { 3: 'a', 4: 'b' }; // Second object
const obj4 = { 5: 'a', 6: 'b' }; // Third object

// Merging objects using the spread operator (preferred for shallow merging)
const obj3 = { ...obj1, ...obj2 }; // Combines obj1 and obj2 into a new object
// console.log(obj3);  // Logs the merged object { 1: 'a', 2: 'b', 3: 'a', 4: 'b' }

// Accessing and modifying an element in an array of objects
const users = [
  { id: 1, email: 'h@gmail.com' }, // First user object
  { id: 1, email: 'h@gmail.com' }, // Second user object
  { id: 1, email: 'h@gmail.com' } // Third user object
];

// Accessing the email of the second user
users[1].email; // Logs the email of the second user: 'h@gmail.com'

// Object methods and property checking

// Logging the object tinderUser
// console.log(tinderUser);

// Object methods for inspecting an object's properties
console.log(Object.keys(tinderUser)); // Logs an array of keys: ['id', 'name', 'isLoggedIn']
console.log(Object.values(tinderUser)); // Logs an array of values: ['123abc', 'Sammy', false]
console.log(Object.entries(tinderUser)); // Logs an array of key-value pairs: [['id', '123abc'], ['name', 'Sammy'], ['isLoggedIn', false]]

// Checking if the object has a specific property (method returns boolean)
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // Logs true if 'isLoggedIn' exists in tinderUser

// Destructuring assignment for extracting specific values from an object
const course = {
  coursename: 'js in hindi', // Property: course name
  price: '999', // Property: price
  courseInstructor: 'john' // Property: instructor name
};

// Destructuring to assign specific properties to variables
const { courseInstructor: instructor } = course; // Extracts 'courseInstructor' and renames it to 'instructor'

// Logging the extracted value
// console.log(courseInstructor);  // Will cause an error as 'courseInstructor' is not directly accessible
console.log(instructor); // Logs 'john' because the variable 'instructor' was extracted from the object

// Creating an array of empty objects
[{}, {}, {}]; // An array containing three empty objects
