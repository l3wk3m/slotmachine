// Declaring variables for the 'spin()' function
let stopValue = [0, 0, 0];
let newValue = [];
const reel = ['lemon', 'melon', 'seven', 'cherry', 'passionfruit', 'bell', 'cherries', 'orange', 'roulette'];
let stopPosition = ['???', '???', '???'];

// Declaring variables for 'credit storage' and 'bets'
let credit = parseInt(document.getElementById('credit-counter').innerHTML);
let bet = parseInt(document.getElementById('bet-tally').innerHTML);

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

const spinButton = document.getElementById('spin-button');
const increment = document.getElementById('more');
const decrement = document.getElementById('less');

// Function for incrementing or decrementing the bet amount by 1 for each click of an arrow beside the counter
function more(event) {
  bet += 1;
  document.getElementById('bet-tally').innerHTML = bet;
}

function less(event) {
  bet -= 1;
  document.getElementById('bet-tally').innerHTML = bet;
}


// Code for storing and updating credit values and pushing
function wager(event) {
  credit = credit - bet;
  document.getElementById('credit-counter').innerHTML = credit;
}

// Spin button event listener
spinButton.addEventListener('click', spin);
spinButton.addEventListener('click', wager);
// Bet change event listeners
increment.addEventListener('click', more);
decrement.addEventListener('click', less);