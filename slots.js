let stopPosition = [0, 0, 0];
let newValue = [];

function spin(event) {
  
  for (i = 0; i < 3; i++) {
    newValue[i] = ((Math.round(Math.random() * 10)) % 9);
    stopPosition.splice(i, 1, newValue[i]);
  }

  console.log(stopPosition);
}

const spinButton = document.getElementById('spin-button');

spinButton.addEventListener('click', spin);