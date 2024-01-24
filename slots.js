// Declaring variables for the 'spin()' function
let stopValue = [0, 0, 0];
let newValue = [];
let oldValue = [];
const reel = ['melon', 'seven', 'cherry', 'passionfruit', 'bell', 'cherries', 'orange', 'roulette', 'lemon'];
let stopPosition = ['???', '???', '???'];
const iconHeight = 103;
let baseTransition = iconHeight * 18;

// Declaring variables for 'credit storage' and 'bets'
let credit = parseInt(document.getElementById('credit-counter').innerHTML);
let bet = parseInt(document.getElementById('bet-tally').innerHTML);

// Declaring variable to help navigate the DOM
const spinButton = document.getElementById('spin-button');
const increment = document.getElementById('more');
const decrement = document.getElementById('less');
const reel1 = document.getElementById('reel1');
const reel2 = document.getElementById('reel2');
const reel3 = document.getElementById('reel3');

// Setting these three as number data types for animation purposes in the spinAnimation function
let backgroundPositionY1 = parseFloat(reel1.style.backgroundPositionY);
let backgroundPositionY2 = parseFloat(reel2.style.backgroundPositionY);
let backgroundPositionY3 = parseFloat(reel3.style.backgroundPositionY);


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


// Slot machine spin result code

function spin(event) {

  for (i = 0; i < 3; i++) (
    oldValue[i] = stopValue[i]
  )
  
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


// Slot machine spin animation

function spinAnimation (event) {
  reel1.style.transition = `background-position-y 4s`;
  reel1.style.backgroundPositionY = `${((baseTransition) + (12 + (stopValue[0] * iconHeight) * (-1)))}px`;

  reel2.style.transition = `background-position-y 6s`;
  reel2.style.backgroundPositionY = `${((baseTransition * 2) + (12 + (stopValue[1] * iconHeight) * (-1)))}px`;

  reel3.style.transition = `background-position-y 8s`;
  reel3.style.backgroundPositionY = `${((baseTransition * 4) + (12 + (stopValue[2] * iconHeight) * (-1)))}px`;

  baseTransition += baseTransition;
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
        alert("You're outta cash - GAME OVER!");
        location.refresh(true);
    } else if (credit < 0) {
        console.log("You've dropped into debt - GAME OVER!")
        alert("You've dropped into debt - GAME OVER!");
        location.refresh(true);
    }
    //Add an addendum here to send the player to a game over screen once they lose
}

// Bet change event listeners
increment.addEventListener('click', more);
decrement.addEventListener('click', less);

// Spin button event listener
spinButton.addEventListener('click', wager);
spinButton.addEventListener('click', spin);
spinButton.addEventListener('click', spinAnimation);
spinButton.addEventListener('click', winCheck);
spinButton.addEventListener('click', loseCheck);
