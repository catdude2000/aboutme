'use strict';
console.log('app.js file is connected');

// prompt user for info
alert('Please answer yes or no.')
let answer1 = prompt('Was I born in 1999?');
console.log('user input', answer1);
if (answer1 === "yes") {
    alert('Nope.');
}
if (answer1 === "no") {
    alert('Whoop there it is!')
}
let answer2 = prompt('Did I work as a valet?');
console.log('user input', answer2);

if (answer2 === "yes") {
    alert('Whoop yes I did!');
}
if (answer2 === "no") {
    alert("It's a no from me dawg.")
}

let answer3 = prompt('Did I go to school in Washington, Iowa?');
console.log('user input', answer3);

if (answer3 === "yes") {
    alert('*sad trombone noises');
}
if (answer3 === "no") {
    alert("Correct! I went to Washington High in Cedar Rapids.")
}

let answer4 = prompt('Did I graduate from Kirkwood?');
console.log('user input', answer4);

if (answer4 === "yes") {
    alert('Not quite!');
}
if (answer4 === "no") {
    alert("Jeez, get off my back about it... (=")
}

let answer5 = prompt('Did I run long distance in Track?');
console.log('user input', answer5);

if (answer5 === "yes") {
    alert('Nope, no no no no, nope.');
}
if (answer5 === "no") {
    alert("Survey says: You win!")
}



// greet the user
alert('hello ', + userName);

// validate
// let lowerCaseName = userName.toLowerCase();
// console.log(lowerCaseName);

// validate more user input
// if(lowerCaseName === 'craig'); 
// alert('Welcome back ' + lowerCaseName);

// Array
// let emptyArray = [];
// console.log(emptyArray);

// let quizAnswers = ['b','c','c','a','e'];

// console.log('this is the first index position zero',quizAnswers[0]);