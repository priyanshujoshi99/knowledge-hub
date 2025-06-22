// Working with Dates in JavaScript

// Creating and displaying dates
let myDate = new Date();
// console.log(myDate.toString()); // Full date and time string
// console.log(myDate.toDateString()); // Date string (e.g., "Mon Jan 01 2023")
// console.log(myDate.toLocaleString()); // Locale-specific date and time
// console.log(typeof myDate); // Outputs: object

// Creating dates with specific values
// let myCreatedDate = new Date(2023, 0, 23); // Year, month (0-based), day
// let myCreatedDate = new Date(2023, 0, 23, 5, 3); // Adds hour and minute
// let myCreatedDate = new Date("2023-01-14"); // ISO format date
let myCreatedDate = new Date('01-14-2023'); // MM-DD-YYYY format
// console.log(myCreatedDate.toLocaleString());

// Working with timestamps
let myTimeStamp = Date.now(); // Current timestamp in milliseconds
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); // Timestamp of the created date
// console.log(Math.floor(Date.now() / 1000)); // Current timestamp in seconds

// Extracting parts of a date
let newDate = new Date();
console.log(newDate); // Full date object
console.log(newDate.getMonth() + 1); // Month (0-based, so add 1)
console.log(newDate.getDay()); // Day of the week (0 = Sunday, 6 = Saturday)

// Getting the weekday name
newDate.toLocaleString('default', {
  weekday: 'long'
});
