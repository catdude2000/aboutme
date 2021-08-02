'use strict';
console.log('app.js file is connected');

let points = 0;

let username = prompt("Hi! You've reached Mike's page. What's your name?"); 
    alert('Welcome ' + username + '!');

alert('Please answer yes or no.');

function questionOne(){
    let answer1 = prompt('Was I born in 1999?').toLowerCase();
    console.log('1. user input', answer1);

    if (answer1 === "yes") {
        alert('Nope.');
        console.log(username + 'still has ' + points + ' points');
    }
    if (answer1 === "no") {
        alert('Whoop there it is!');
        points += 1;
        console.log(username + ' now has ' + points + ' points');
    }
}

questionOne();

function questionTwo(){
    let answer2 = prompt('Did I work as a valet?').toLocaleLowerCase();
    console.log('2. user input', answer2);

    if (answer2 === "yes") {
        alert('Whoop yes I did!');
        points += 1;
        console.log(username + ' now has ' + points + ' points');
}
    if (answer2 === "no") {
        alert("It's a no from me dawg.");
        console.log(username + 'still has ' + points + ' points');
    }
}

questionTwo();

function questionTres(){
    let answer3 = prompt('Did I go to school in Washington, Iowa?').toLowerCase();
    console.log('3. user input', answer3);

    if (answer3 === "yes") {
        alert('*sad trombone noises');
        console.log(username + 'still has ' + points + ' points');
    }
    if (answer3 === "no") {
        alert("Correct! I went to Washington High in Cedar Rapids.");
        points += 1;
        console.log(username + ' now has ' + points + ' points');
    }

}

questionTres();

function questionFour(){
    let answer4 = prompt('Did I graduate from Kirkwood?').toLowerCase();
    console.log('4. user input', answer4);

    if (answer4 === "yes") {
        alert('Not quite!');
        console.log(username + 'still has ' + points + ' points');
    }
    if (answer4 === "no") {
        alert("Jeez, get off my back about it... (=");
        points += 1;
        console.log(username + ' now has ' + points + ' points');
    }
}

questionFour();

function questionFive(){
    let answer5 = prompt('Did I run long distance in Track?').toLowerCase();
    console.log('5. user input', answer5);

    if (answer5 === "yes"){
        alert('Nope, no no no no, nope.');
        console.log(username + ' still has ' + points + ' points');
    }
    if (answer5 === "no") {
        alert("Survey says: You win!");
        points += 1;
        console.log(username + ' now has ' + points + ' points');
    }
}

questionFive();

function questionSix(){
    let answer6 = prompt('Guess which number between 1 and 10 is in my head.');
    console.log('6. user input', answer6);

    let tries = 0;
        while(answer6 < '5' && tries < 3) {
            tries = tries + 1;
            answer6 = prompt('Too low!');
        } 
        while(answer6 > '5' && tries < 3) {
            tries = tries + 1;
            answer6 = prompt('Too high!');
        }
        while(answer6 < '5' && tries < 3) {
            tries = tries + 1;
            answer6 = prompt('Too low!');
        }
        while(answer6 > '5' && tries < 3) {
            tries = tries + 1;
            answer6 = prompt('Too high!');
        }
        while(answer6 < '5' && tries < 3) {
            tries = tries + 1;
            answer6 = prompt('Too low!');
        }
        while(answer6 > '5' && tries < 3) {
            tries = tries + 1;
            answer6 = prompt('Too high!');
        }
        while(answer6 = '5' && tries <= 2) {
            alert('Nice guess!');
            points += 1;
            console.log(username + ' now has ' + points + ' points');

            break;
        }
        while(tries === 3) {
            alert("The answer was 5.");
            console.log(username + ' still has ' + points + ' points');
            break;
        }
            console.log('tries', tries);
}
   
questionSix();

function questionSev(){
    let answer7 = prompt('What is one of my three favorite video game franchises?').toLowerCase();
    console.log('user input', answer7);

    let tries2 = 0;
    let answers ='final fantasy' || 'halo' || 'legend of zelda';
        while(answer7 !== answers && tries2 < 5) {
            tries2 = tries2 + 1;
            answer7 = prompt("That's a good one but no.");
    }
    while (answer7 === answers) {
            alert('You knew one!');
            points += 1;
            break;
    }
    while (tries2 === 5) {
            alert("Your choices were Halo, Final Fantasy, or Legend of Zelda");
            break;
        }
        console.log('tries2', tries2);
}
    
questionSev();

alert('You scored ' + points + ' out of 7');
    
alert('Nice effort ' + username + '!');