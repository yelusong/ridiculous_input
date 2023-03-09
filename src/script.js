let score = 0;

let opponent = document.getElementById("opponent");
let scoreBoard = document.getElementById("score");
function updateScore() {
  scoreBoard.textContent = `Volume Level: ${score}`;
}

function incrementScore() {
  score++;
  updateScore();
}

function decrementScore() {
  score--;
  updateScore();
}

function playGame(hand) {
  //   Rock = 0
  //   Paper = 1
  //   Scissors = 2
  const opponentHand = Math.floor(Math.random() * 3);
  if (opponentHand === 0) {
    opponent.textContent = "I played Rock!";
    if (hand === 1) {
      incrementScore();
    } else if (hand === 2) {
      decrementScore();
    }
  } else if (opponentHand === 1) {
    opponent.textContent = "I played Paper!";
    if (hand === 2) {
      incrementScore();
    } else if (hand === 0) {
      decrementScore();
    }
  } else {
    opponent.textContent = "I played Scissors!";
    if (hand === 0) {
      incrementScore();
    } else if (hand === 1) {
      decrementScore();
    }
  }
}

function clickScissors() {
  playGame(2);
}
function clickRock() {
  playGame(0);
}
function clickPaper() {
  playGame(1);
}
