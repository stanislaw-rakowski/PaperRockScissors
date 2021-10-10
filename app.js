const PAPER = 'paper';
const ROCK = 'rock';
const SCISSORS = 'scissors';

let paperBtn = document.getElementById('btn-paper');
let rockBtn = document.getElementById('btn-rock');
let scissorsBtn = document.getElementById('btn-scissors');

let resultDiv = document.getElementById('result-output');
let scoreBoard = document.getElementById('score-board');

let userChoice
let computerChoice
let result
let gamesPlayed = 1
let userWinsCount = 0
let computerWinsCount = 0

const startGame = (playerChoice) => {
    console.log('Game no.' + gamesPlayed);

    userChoice = playerChoice;
    console.log('You chose ' + userChoice);

    computerChoice = getComputerChoice();
    console.log('Computer chose ' + computerChoice);

    result = getWinner(userChoice, computerChoice);
    console.log(result);
    resultDiv.textContent = 'You chose ' + userChoice + ' and computer chose ' + computerChoice + ' so ' + result;
    writeToScoreBoard(userWinsCount, computerWinsCount);
    gamesPlayed++;
}

paperBtn.addEventListener('click', () => startGame(PAPER));
rockBtn.addEventListener('click', () => startGame(ROCK));
scissorsBtn.addEventListener('click', () => startGame(SCISSORS));

const getRandomNumber = () => {
    return Math.floor(Math.random() * 3)
}

const getComputerChoice = () => {
    let possibleChoices = [PAPER, ROCK, SCISSORS];
    return possibleChoices[getRandomNumber()];
}

const getWinner = (userChoice, computerChoice) => {
    if (userChoice === PAPER && computerChoice === ROCK ||
        userChoice === ROCK && computerChoice === SCISSORS ||
        userChoice === SCISSORS && computerChoice === PAPER) {
        userWinsCount++;
        return 'You won!';
    } else if (userChoice === computerChoice) {
        return "it's a Draw!"
    } else {
        computerWinsCount++;
        return 'computer won!';
    }
}

const writeToScoreBoard = (plCount, cCount) => {
    scoreBoard.textContent = 'You ' + plCount + ' : ' + cCount + ' computer';
}