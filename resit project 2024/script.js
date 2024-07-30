// header element by Id
const header = document.getElementById('header');

// Button element by Id
const button = document.getElementById('changeTextButton');


button.addEventListener('click', function() {
    // changes text when button is licked
    header.textContent = 'Text Changed!';
});
//learnt how to make it from Quora  https://www.quora.com/How-do-you-make-a-dice-roll-program-in-Java 
//no form due to lack of time
function rollDice() {

    const playerDice1 = Math.floor(Math.random() * 6) + 1;

    const playerDice2 = Math.floor(Math.random() * 6) + 1;

    const computerDice1 = Math.floor(Math.random() * 6) + 1;

    const computerDice2 = Math.floor(Math.random() * 6) + 1;
 
    const playerTotal = playerDice1 + playerDice2; // adds up your dice and gives a final number 

    const computerTotal = computerDice1 + computerDice2; // adds up computers dice and gives final number
 
    let result = `You rolled ${playerDice1} and ${playerDice2} (Total: ${playerTotal}).\n`; //shows what you got

    result += `Computer rolled ${computerDice1} and ${computerDice2} (Total: ${computerTotal}).\n`; //shows what computer got
 
    if (playerTotal > computerTotal) { //if you have more you win 

        result += 'You win!';

    } else if (playerTotal < computerTotal) { //if you have a lower score you lose

        result += 'You lose!';

    } else {

        result += 'It\'s a tie!'; 

    }
 
    document.getElementById('result').textContent = result;

}

 