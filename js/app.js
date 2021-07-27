'use strict';
console.log('app.js file is connected');

// prompt user for info
let userName = prompt('what is your name?');
console.log('user input', userName);


// greet the user
alert('hello ', + userName);

// validate
let lowerCaseName = userName.toLowerCase();
console.log(lowerCaseName);

// validate more user input
if(lowerCaseName === 'craig'); 
alert('Welcome back ' + lowerCaseName);

// Array
let emptyArray = [];
console.log(emptyArray);

let quizAnswers = ['b','c','c','a','e'];

console.log('this is the first index position zero',quizAnswers[0]);