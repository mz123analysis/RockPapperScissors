function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let choice = ["rock", "paper" , "scissor"]
    return choice[getRandomInt(3)];
}

function getHumanChoice() {
    let choice = prompt("What is your choice?");
    let fixedChoice;
    if (choice.toLowerCase() == "scissor"){
        fixedChoice = "scissor"
    } else if (choice.toLowerCase() == "rock") {
        fixedChoice = "rock"
    } else if (choice.toLowerCase() == "paper") {
        fixedChoice = "paper"
    }

    return fixedChoice;
}

