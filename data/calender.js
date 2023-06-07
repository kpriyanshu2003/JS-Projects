//  Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

const input = parseInt(prompt("Enter a year "));

if (input % 400 == 0) console.log("Leap Year");
else if (input % 100 == 0) console.log("Not a leap year");
else if (input % 4 == 0) console.log("Leap Year");
else console.log("Not a leap year");
