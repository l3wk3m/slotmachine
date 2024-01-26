// Declaring variables for the 'spin()' function
let stopValue = [0, 0, 0];
let newValue = [];
let oldValue = [];
const reel = ['melon', 'seven', 'cherry', 'passionfruit', 'bell', 'cherries', 'orange', 'roulette', 'lemon'];
let stopPosition = ['???', '???', '???'];
const iconHeight = 103;
let baseTransition = iconHeight * 27;

// Declaring variables for 'credit storage' and 'bets'
let credit = parseInt(document.getElementById('credit-counter').innerHTML);
let bet = parseInt(document.getElementById('bet-tally').innerHTML);

// Declaring variable to help navigate the DOM
const spinButton = document.getElementById('spin-button');
const allInButton = document.getElementById('all-in');
const restartButton = document.getElementById('restart-button');
const increment = document.getElementById('more');
const incrementTen = document.getElementById('ten-more');
const decrement = document.getElementById('less');
const decrementTen = document.getElementById('ten-less');
const reel1 = document.getElementById('reel1');
const reel2 = document.getElementById('reel2');
const reel3 = document.getElementById('reel3');
const result = document.getElementById('result');

// Setting these three as number data types for animation purposes in the spinAnimation function
let backgroundPositionY1 = parseFloat(reel1.style.backgroundPositionY);
let backgroundPositionY2 = parseFloat(reel2.style.backgroundPositionY);
let backgroundPositionY3 = parseFloat(reel3.style.backgroundPositionY);

// Function for disabling the restart button in any scenario other than a game over
function restartDisable() {
    if(bet === credit && credit === 0){
        restartButton.disabled = (false);
    } else {
        restartButton.disabled = (true);
    }
}

// Function to set the credit and bet values back to their starting position
function restart(event){
    credit = 100;
    document.getElementById('credit-counter').innerHTML = credit;
    bet = 10;
    document.getElementById('bet-tally').innerHTML = bet;
    result.innerHTML = '';
    spinButton.disabled = (false);
    allInButton.disabled = (false);
}

// Function for incrementing or decrementing the bet amount by 1 for each click of an arrow beside the counter
function more(event) {
    if (bet > (credit - 1)) {
        alert("Your bet amount can't exceed your credits!");
    } else {
        bet += 1;
        document.getElementById('bet-tally').innerHTML = bet;
    }
}

function tenMore(event){
    if (bet > (credit - 10)) {
        alert("Your bet amount can't exceed your credits!");
    } else {
        bet += 10;
        document.getElementById('bet-tally').innerHTML = bet;
    }
}

// Keydown version

function less(event) {
    if (bet < 2) {
        alert("You have to bet something to play!");
    } else {
        bet -= 1;
        document.getElementById('bet-tally').innerHTML = bet;
    }
}

function tenLess(event) {
    if (bet < 11) {
        alert("You have to bet something to play!");
    } else {
        bet -= 10;
        document.getElementById('bet-tally').innerHTML = bet;
    }
}

// All-in function

function allIn(event) {
    bet = credit;
    document.getElementById('bet-tally').innerHTML = bet;
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
   
    for (i = 0; i < 3; i++) {
        stopPosition.splice(i, 1, reel[stopValue[i]]);
    }
}

// Slot machine spin animation
// Using template literals to create and update the transitions (as well as some UI stuff) in the CSS 
// was taken from the following tutorial: https://www.youtube.com/watch?v=boI2B4Gpp34

function spinAnimation (event) {
    reel1.style.transition = `background-position-y 4s cubic-bezier(.49,.04,.78,1.15)`;
    reel1.style.backgroundPositionY = `${((baseTransition) + (12 + (stopValue[0] * iconHeight) * (-1)))}px`;

    reel2.style.transition = `background-position-y 6s cubic-bezier(.49,.04,.78,1.15)`;
    reel2.style.backgroundPositionY = `${((baseTransition * 2) + (12 + (stopValue[1] * iconHeight) * (-1)))}px`;

    reel3.style.transition = `background-position-y 8s cubic-bezier(.49,.04,.78,1.15)`;
    reel3.style.backgroundPositionY = `${((baseTransition * 3) + (12 + (stopValue[2] * iconHeight) * (-1)))}px`;

    baseTransition += iconHeight * 27;
  }

// Win Condition Code

function winCheck(){
    if (stopPosition[0] === stopPosition[1] && stopPosition[1] === stopPosition[2]) {
      result.innerHTML = '!!!YOU WIN BIG!!!';
      credit = credit + (bet * 10);
      document.getElementById('credit-counter').innerHTML = credit;
      //Might be worth considering moving the DOM method to update with the winnings until after the result appears
  } else if (stopPosition[0] === stopPosition[1] || stopPosition[1] === stopPosition[2] || stopPosition[0] === stopPosition[2]) {
      result.innerHTML = 'You win!';
      credit = credit + (bet * 3);
      document.getElementById('credit-counter').innerHTML = credit;
} else {
      result.innerHTML = 'Hard luck - try again!';
}
}

function loseCheck() {
    if (credit === 0) {
        result.innerHTML = "You're outta cash - GAME OVER!";
        spinButton.disabled = (true);
    } else if (credit < 0) {
        result.innerHTML = "You've dropped into debt - GAME OVER!";
        spinButton.disabled = (true);
    }
}

// Function to disable the button while the reels are spinning 
function tempDisable(event){
    spinButton.disabled = (true);
    allInButton.disabled = (true);
    restartButton.disabled = (true);
}

function tempDisableKey(){
    spinButton.disabled = (true);
}

// Function to reenable the spin button when spin is finished
// (providing you haven't gotten a Game Over)
function reEnable(){
    spinButton.disabled = (false);
    allInButton.disabled = (false);
}

// Function to reset your Bet value to below your Credit value if it ends up above it

function resetBigBet(){
    if (bet > credit) {
        bet = bet - (bet - credit);
        document.getElementById('bet-tally').innerHTML = bet;
        if (bet === credit && credit === 0){
            spinButton.disabled = (true);
        } else {
            reEnable();
        }
    } else {reEnable();}
}

// Bet change event listeners

// Keydown for up arrow = increment bet
// Tutorial source = https://youtu.be/Q3ktcptd2yI?si=qJsY55Xoz-6vomFQ
document.body.addEventListener('keydown', (ev) => {
    if (ev.key == 'ArrowUp') {
        if (bet > (credit - 1)) {
            alert("Your bet amount can't exceed your credits!");
        } else {
            bet += 1;
            document.getElementById('bet-tally').innerHTML = bet;
        }
    }
});

increment.addEventListener('click', more);
incrementTen.addEventListener('click', tenMore);

// Keydown for down arrow = decrement bet
document.body.addEventListener('keydown', (ev) => {
        if (ev.key == 'ArrowDown') {
            if (bet < 2) {
                alert("You have to bet something to play!");
            } else {
                bet -= 1;
                document.getElementById('bet-tally').innerHTML = bet;
            }
        }
})

decrement.addEventListener('click', less);
decrementTen.addEventListener('click', tenLess);
allInButton.addEventListener('click', allIn);
spinButton.addEventListener('click', wager);
spinButton.addEventListener('click', spin);
spinButton.addEventListener('click', spinAnimation);
spinButton.addEventListener('click', tempDisable);
// Function that will wait for the result of the reels before informing the user / updating the credit score
// Taken from HowToCodeSchool's YT channel: https://youtu.be/Gd3qyr9llwU?si=tcbXNtzFXrA3wV3-
function wait(){
    winCheck();
    loseCheck();
    resetBigBet();
    restartDisable();
}
restartButton.addEventListener('click', restart);