const prompt = require('prompt-sync')();
const username = prompt('What is your name? ');
console.log(`Your name is ${username}`);
let choice = prompt(`${username}, are you ready to throw stones? (yes/no)`);


let messageA = `Come back when you are ready!`;
let messageIntro = `Lets throw stones! Your objective is to eliminate your opponent, Achillies, with a single stone`;
let messageHeadShot = `The stone bounced off Achillies helmet, try again!`
let messageBodyShot = `Achillies deflected the stone with his sword, try again!`;
let messageFootShot = `The stone has crippled Achillies, you win!`;


if (choice === `yes`) {
    console.log(messageIntro);
    let bodypart = prompt(`${username}, choose a bodypart to aim for. (headshot/bodyshot/footshot) `);
  
    if (bodypart === `headshot`) {
        console.log(messageHeadShot);
    } else if (bodypart === `bodyshot`) {
        console.log(messageBodyShot);
    } else if (bodypart === `footshot`) {
        console.log(messageFootShot);
    } else {
        console.log("invalid entry, try again!");
    }
} else if (choice === `no`) {
    console.log(messageA);
} else {
    console.log("Invalid entry. Please start again");
}

