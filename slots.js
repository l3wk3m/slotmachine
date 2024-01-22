// Declaring variables for the 'spin()' function
let stopValue = [0, 0, 0];
let newValue = [];
const reel = ['lemon', 'melon', 'seven', 'cherry', 'passionfruit', 'bell', 'cherries', 'orange', 'roulette'];
let stopPosition = ['???', '???', '???'];

// Declaring variables for 'credit storage' and 'bets'
let credit = 100;
let bet = 10;

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

spinButton.addEventListener('click', spin);


// Code for storing and updating credit values and pushing

