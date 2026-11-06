function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let choice = ["Rock", "Paper" , "Scissor"]
    return choice[getRandomInt(3)];
}

function getHumanChoice() {

    const buttons = document.querySelectorAll("button")

    let fixedChoice = buttons.addEventListener('click', () => {
        alert(buttons.id)
    })

    return fixedChoice;
}

function playRound(humanChoice, compChoice, humanScores, compScores) {
    
    let winLose
    if (humanChoice == compChoice) {
        winLose = "Tied"
    } else if ((humanChoice == "Rock" && compChoice == "Paper") || (humanChoice == "Paper" && compChoice == "Scissor") || (humanChoice == "Scissor" && compChoice == "Rock")) {
        winLose = "Lose"
        compScores.textContent = Number(compScores.textContent) + 1
    } else if ((compChoice == "Rock" && humanChoice == "Paper") || (compChoice == "Paper" && humanChoice == "Scissor") || (compChoice == "Scissor" && humanChoice == "Rock")) {
        winLose = "Win"
        humanScores.textContent = Number(humanScores.textContent) + 1
    }
    
    let winner1 = winner(humanScores, compScores)

    if (winner1 == 1) {
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
        button.disabled = true;
        })   ;
    }
}

// This function is to play through Console. 
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
const buttons = document.querySelectorAll("button")

buttons.forEach((button) => {
button.addEventListener('click', () => {
        playRound(button.id, getComputerChoice(), humanScores, compScores)
        
    })
})

const body = document.querySelector("body");
const humanScores = document.createElement("div")
humanScores.textContent = 0
const compScores = document.createElement("div")
compScores.textContent = 0

body.appendChild(humanScores)
body.appendChild(compScores)

function winner(humanScores, compScores) {
    const body = document.querySelector("body");
    if (Number(humanScores.textContent) == 5) {
        const winner = document.createElement('div')
        winner.textContent = "You are the Winner!"
        body.appendChild(winner)
        return 1
    } else if (Number(compScores.textContent) == 5) {
        const winner = document.createElement('div')
        winner.textContent = "The Computer has won!"
        body.appendChild(winner)
        return 1
    }
}