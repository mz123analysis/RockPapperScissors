function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let choice = ["Rock", "Paper" , "Scissor"]
    return choice[getRandomInt(3)];
}

function getHumanChoice() {
    let choice = prompt("What is your choice?");
    let fixedChoice;
    if (choice.toLowerCase() == "scissor"){
        fixedChoice = "Scissor"
    } else if (choice.toLowerCase() == "rock") {
        fixedChoice = "Rock"
    } else if (choice.toLowerCase() == "paper") {
        fixedChoice = "Paper"
    }

    return fixedChoice;
}

function playRound(humanChoice, compChoice) {
    let winLose
    if (humanChoice == compChoice) {
        winLose = "Tied"
    } else if ((humanChoice == "Rock" && compChoice == "Paper") || (humanChoice == "Paper" && compChoice == "Scissor") || (humanChoice == "Scissor" && compChoice == "Rock")) {
        winLose = "Lose"
    } else if ((compChoice == "Rock" && humanChoice == "Paper") || (compChoice == "Paper" && humanChoice == "Scissor") || (compChoice == "Scissor" && humanChoice == "Rock")) {
        winLose = "Win"
    }
    return winLose
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++){
        let humanChoice = getHumanChoice()
        let compChoice = getComputerChoice()

        const winLose = playRound(humanChoice, compChoice)
        
        if (winLose == "Win") {
            humanScore += 1
        } else if (winLose == "Lose") {
            computerScore +=1
        }
    }  
    let gameResult 
    if (humanScore > computerScore) {
        gameResult = `You Win! In 5 Rounds, you won ${humanScore} rounds to ${computerScore} rounds.`
    } else if (computerScore > humanScore) {
        gameResult = `You Lose! In 5 Rounds, you won ${humanScore} rounds to ${computerScore} rounds.`
    } else {
        gameResult = `Tied. In 5 Rounds,you won ${humanScore} rounds to ${computerScore} rounds.`
    }

    return gameResult
}