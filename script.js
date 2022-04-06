function computerPlay() { // computer's move
    let randomNumber = Math.floor(Math.random()*3); // random 0-2

    switch (randomNumber) { // assign move
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    let playerLowerCase = playerSelection.toLowerCase(); // case INsensitivity

    switch (playerLowerCase) {
        case 'rock':
            switch (computerSelection) {
                case 'rock':
                    return "It's a tie!";
                case 'paper':
                    return "You Lose! Paper beats Rock.";
                case 'scissors':
                    return "You Win! Rock beats Scissors.";
            }

        case 'paper':
            switch (computerSelection) {
                case 'rock':
                    return "You Win! Paper beats Rock."
                case 'paper':
                    return "It's a tie!";
                case 'scissors':
                    return "You Lose! Scissors beats Paper.";
            }

        case 'scissors':
            switch (computerSelection) {
                case 'rock':
                    return "You Lose! Rock beats Scissors.";
                case 'paper':
                    return "You Win! Scissors beats Paper.";
                case 'scissors':
                    return "It's a tie!";
            }
    }
}

function game() {
    let userScore = 0;
    let computerScore = 0;
    let predictMove = computerPlay();

    const predict = document.querySelector("#predict");
    predict.textContent = `Computer will play: ${predictMove}`;

    const buttons = document.querySelectorAll("button");
    const score = document.querySelector("#score");
    const health = document.querySelector("#health");
    const outcome = document.querySelector("#outcome");
    

    buttons.forEach((button) => button.addEventListener('click', () => {
        let userMove = button.id;
        let computerMove = predictMove;
        
        let result = playRound(userMove, computerMove);

        if (result !== "It's a tie!") { // if they tie, no one scores
            (result.substring(4,7) === "Win") ? // if user won,
                userScore++ : // increase user's score
                computerScore++; // else, increase computer's score
        }

        // change html displays
        score.textContent = `Score: ${userScore}/5`;
        health.textContent = `Health: ${1-computerScore}/1`;
        outcome.textContent = result;

        predictMove = computerPlay();
        predict.textContent = `Computer will play: ${predictMove}`;

        // add if 4/5 wins
    }));

    // declare winner
}

game();