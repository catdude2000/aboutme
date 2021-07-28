'use strict';
console.log('app.js file is connected');


let username = prompt("Hi! You've reached Mike's page. What's your name?"); 
    alert('Welcome ' + username + '!');

alert('Please answer yes or no.');

let answer1 = prompt('Was I born in 1999?').toLowerCase();
console.log('user input', answer1);

if (answer1 === "yes") {
    alert('Nope.');
}
if (answer1 === "no") {
    alert('Whoop there it is!');
}

let answer2 = prompt('Did I work as a valet?').toLocaleLowerCase();
console.log('user input', answer2);

if (answer2 === "yes") {
    alert('Whoop yes I did!');
}
if (answer2 === "no") {
    alert("It's a no from me dawg.");
}

let answer3 = prompt('Did I go to school in Washington, Iowa?').toLowerCase();
console.log('user input', answer3);

if (answer3 === "yes") {
    alert('*sad trombone noises');
}
if (answer3 === "no") {
    alert("Correct! I went to Washington High in Cedar Rapids.");
}

let answer4 = prompt('Did I graduate from Kirkwood?').toLowerCase();
console.log('user input', answer4);

if (answer4 === "yes") {
    alert('Not quite!');
}
if (answer4 === "no") {
    alert("Jeez, get off my back about it... (=");
}

let answer5 = prompt('Did I run long distance in Track?').toLowerCase();
console.log('user input', answer5);

if (answer5 === "yes".toLowerCase) {
    alert('Nope, no no no no, nope.');
}
if (answer5 === "no") {
    alert("Survey says: You win!");
}
    alert('Nice job ' + username + '!');



// Array
// let emptyArray = [];
// console.log(emptyArray);

// let quizAnswers = ['b','c','c','a','e'];

// console.log('this is the first index position zero',quizAnswers[0]);