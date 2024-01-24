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
const result = document.getElementById('result');

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

// Keydown version

function moreKey() {
    if (ev.key == 'ArrowUp') {
        if (bet > (credit - 1)) {
            alert("Your bet amount can't exceed your credits!");
            console.log("Your bet amount can't exceed your credits!");
        } else {
            bet += 1;
            document.getElementById('bet-tally').innerHTML = bet;
        }
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

function lessKey() {
    if (ev.key == 'ArrowDown') {
        if (bet < 2) {
            alert("You have to bet something to play!");
            console.log("You have to bet something to play!");
        } else {
            bet -= 1;
            document.getElementById('bet-tally').innerHTML = bet;
        }
    }
}


// Code for storing and updating credit values and pushing
function wager(event) {
    credit = credit - bet;
    document.getElementById('credit-counter').innerHTML = credit;
}

function wagerKey() {
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

function spinKey() {

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
  reel1.style.transition = `background-position-y 4s cubic-bezier(.49,.04,.78,1.15)`;
  reel1.style.backgroundPositionY = `${((baseTransition) + (12 + (stopValue[0] * iconHeight) * (-1)))}px`;

  reel2.style.transition = `background-position-y 6s cubic-bezier(.49,.04,.78,1.15)`;
  reel2.style.backgroundPositionY = `${((baseTransition * 2) + (12 + (stopValue[1] * iconHeight) * (-1)))}px`;

  reel3.style.transition = `background-position-y 8s cubic-bezier(.49,.04,.78,1.15)`;
  reel3.style.backgroundPositionY = `${((baseTransition * 3) + (12 + (stopValue[2] * iconHeight) * (-1)))}px`;

  baseTransition += iconHeight * 9;
  }

  function spinAnimationKey () {
    reel1.style.transition = `background-position-y 4s cubic-bezier(.49,.04,.78,1.15)`;
    reel1.style.backgroundPositionY = `${((baseTransition) + (12 + (stopValue[0] * iconHeight) * (-1)))}px`;
  
    reel2.style.transition = `background-position-y 6s cubic-bezier(.49,.04,.78,1.15)`;
    reel2.style.backgroundPositionY = `${((baseTransition * 2) + (12 + (stopValue[1] * iconHeight) * (-1)))}px`;
  
    reel3.style.transition = `background-position-y 8s cubic-bezier(.49,.04,.78,1.15)`;
    reel3.style.backgroundPositionY = `${((baseTransition * 3) + (12 + (stopValue[2] * iconHeight) * (-1)))}px`;
  
    baseTransition += iconHeight * 9;
    }

// Win Condition Code

function winCheck(){
    if (stopPosition[0] === stopPosition[1] && stopPosition[1] === stopPosition[2]) {
      result.innerHTML = '!!!YOU WIN BIG!!!';
      console.log('!!!YOU WIN BIG!!!');
      credit = credit + (bet * 10);
      document.getElementById('credit-counter').innerHTML = credit;
      //Might be worth considering moving the DOM method to update with the winnings until after the result appears
  } else if (stopPosition[0] === stopPosition[1] || stopPosition[1] === stopPosition[2] || stopPosition[0] === stopPosition[2]) {
      result.innerHTML = 'You win!';
      console.log('You win!');
      credit = credit + (bet * 3);
      document.getElementById('credit-counter').innerHTML = credit;
} else {
      result.innerHTML = 'Hard luck - try again!';
      console.log('Hard luck - try again!');
}
}

function loseCheck() {
    if (credit === 0) {
        console.log("You're outta cash - GAME OVER!")
        alert("You're outta cash - GAME OVER!");
        spinButton.disabled = (true);
    } else if (credit < 0) {
        console.log("You've dropped into debt - GAME OVER!")
        alert("You've dropped into debt - GAME OVER!");
        spinButton.disabled = (true);
    }
}

// Function to disable the button while the reels are spinning 
function tempDisable(event){
    spinButton.disabled = (true);
}

function tempDisableKey(){
    spinButton.disabled = (true);
}

// Function to reenable the spin button when spin is finished
// (providing you haven't gotten a Game Over)
function reEnable(){
    spinButton.disabled = (false);
}

// Bet change event listeners

//CLEAN UP - Keydown for up arrow = increment bet
document.body.addEventListener('keydown', (ev) => {
    if (ev.key == 'ArrowUp') {
        if (bet > (credit - 1)) {
            alert("Your bet amount can't exceed your credits!");
            console.log("Your bet amount can't exceed your credits!");
        } else {
            bet += 1;
            document.getElementById('bet-tally').innerHTML = bet;
        }
    }
});

increment.addEventListener('click', more);

//CLEAN UP - Keydown for down arrow = decrement bet
document.body.addEventListener('keydown', (ev) => {
        if (ev.key == 'ArrowDown') {
            if (bet < 2) {
                alert("You have to bet something to play!");
                console.log("You have to bet something to play!");
            } else {
                bet -= 1;
                document.getElementById('bet-tally').innerHTML = bet;
            }
        }
})

decrement.addEventListener('click', less);

// Spin button event listener

// CLEAN UP!!! - All functions rewritten in keydown 'spacebar' conditions
/*
document.body.addEventListener('keydown', (ev) => {
    if (ev.key == 'space') {
        console.log(ev);
        if (ev.repeat) {
            return false;  // prevents holding the key from triggering the event again 
        }
        wagerKey();
        spinKey();
        spinAnimationKey();
        tempDisableKey();
    }
})
*/

spinButton.addEventListener('click', wager);
spinButton.addEventListener('click', spin);
spinButton.addEventListener('click', spinAnimation);
spinButton.addEventListener('click', tempDisable);
// Function that will wait for the result of the reels before informing the user / updating the credit score
// Taken from HowToCodeSchool's YT channel: https://youtu.be/Gd3qyr9llwU?si=tcbXNtzFXrA3wV3-
function wait(){
    reEnable();
    winCheck();
    loseCheck();
}