function playGame() {
    const userChoice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    if (!['rock', 'paper', 'scissors'].includes(userChoice)) {
        alert("Invalid choice! Please enter rock, paper, or scissors.");
        return;
    }

    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);

    alert(`You chose ${userChoice}, the computer chose ${computerChoice}. ${result}`);
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    }
    if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'rock')
    ) {
        return "You win!";
    } else {
        return "The computer wins!";
    }
}

playGame();
