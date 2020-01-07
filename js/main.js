const array = ['rock', 'paper', 'scissors'];
let gamesWon = 0;
let gamesLost = 0;

const result = document.querySelector('#result');
const score = document.querySelector('#score');
const winner = document.querySelector('#winner');

const buttons = document.querySelectorAll('#container > button');
buttons.forEach((button) => {
button.addEventListener('click', playRound)});

function computerPlay() {
  return array[Math.floor(Math.random() * 3)];
}

function playRound(e) {
	if (gamesWon == 5 || gamesLost == 5) {return;}
  
  let playerSelection = this.id;
  let computerSelection = computerPlay();
  const p = document.createElement('p');
  
  switch (true) {
    case playerSelection == computerSelection:
    p.textContent = 'Draw. Try again';
    break;
    case (playerSelection == 'rock') && (computerSelection == 'paper')
      || (playerSelection == 'paper') && (computerSelection == 'scissors')
      || (playerSelection == 'scissors') && (computerSelection == 'rock'):
    ++gamesLost;
    p.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
    p.classList.toggle('lose');
    break;
    default:
    ++gamesWon;
    p.textContent =`You win! ${playerSelection} beats ${computerSelection}`;
    p.classList.toggle('win');
}
  result.appendChild(p);
  score.textContent = `Player: ${gamesWon}, Computer: ${gamesLost}`;

  if (gamesWon == 5){
    winner.textContent = `Congratulations! You won`;
  }
  else if (gamesLost == 5){
    winner.textContent = `You were beaten by the computer`;
  }
}