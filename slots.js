// Declaring variables for the 'spin()' function
let stopValue = [0, 0, 0];
let newValue = [];
const reel = ['melon', 'seven', 'cherry', 'passionfruit', 'bell', 'cherries', 'orange', 'roulette', 'lemon'];
let stopPosition = ['???', '???', '???'];

// Declaring variables for 'credit storage' and 'bets'
let credit = parseInt(document.getElementById('credit-counter').innerHTML);
let bet = parseInt(document.getElementById('bet-tally').innerHTML);

// Declaring variable to help navigate the DOM
const spinButton = document.getElementById('spin-button');
const increment = document.getElementById('more');
const decrement = document.getElementById('less');


// Function for incrementing or decrementing the bet amount by 1 for each click of an arrow beside the counter
function more(event) {
    if (bet > (credit - 1)) {
        alert("Your bet amount can't exceed your credits!");
        console.log("Your bet amount can't exceed your credits!");
    } else {
        bet += 1;
        document.getElementById('bet-tally').innerHTML = bet;
    }
}



function less(event) {
    if (bet < 2) {
        alert("You have to bet something to play!");
        console.log("You have to bet something to play!");
    } else {
        bet -= 1;
        document.getElementById('bet-tally').innerHTML = bet;
    }
    
}


// Code for storing and updating credit values and pushing
function wager(event) {
    credit = credit - bet;
    document.getElementById('credit-counter').innerHTML = credit;
}


// Slot machine spin and result code

function spin(event) {
  
  for (i = 0; i < 3; i++) {
    newValue[i] = ((Math.round(Math.random() * 10)) % 9);
    stopValue.splice(i, 1, newValue[i]);
  }
  
  console.log(stopValue);

  for (i = 0; i < 3; i++) {
    stopPosition.splice(i, 1, reel[stopValue[i]]);
  }

  console.log(stopPosition);
}

// Win Condition Code

function winCheck(event){
    if (stopPosition[0] === stopPosition[1] && stopPosition[1] === stopPosition[2]) {
        console.log('!!!YOU WIN BIG!!!');
        credit = credit + (bet * 10);
        document.getElementById('credit-counter').innerHTML = credit;
    } else if (stopPosition[0] === stopPosition[1] || stopPosition[1] === stopPosition[2] || stopPosition[0] === stopPosition[2]) {
        console.log('You win!');
        credit = credit + (bet * 3);
        document.getElementById('credit-counter').innerHTML = credit;
    } else {
        console.log('Hard luck - try again!');
    }
}

function loseCheck(event) {
    if (credit === 0) {
        console.log("You're outta cash - GAME OVER!")
    } else if (credit < 0) {
        console.log("You've dropped into debt - GAME OVER!")
    }
}

// Bet change event listeners
increment.addEventListener('click', more);
decrement.addEventListener('click', less);

// Spin button event listener
spinButton.addEventListener('click', wager);
spinButton.addEventListener('click', spin);
spinButton.addEventListener('click', winCheck);
spinButton.addEventListener('click', loseCheck);
