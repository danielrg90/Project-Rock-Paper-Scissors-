let humanScore = 0; 

let computerScore = 0; 


function getComputerChoice() { 
    let random = Math.random(); 
    if (random >= .01 && random < .33) { 
        return "rock";  
    } else if (random >= .33 && random < .66) { 
        return "scissors";
    } else { 
        return "paper";
    }
}

function getHumanChoice() { 
    return prompt("Enter Rock, Paper, or Scissors").toLowerCase(); 
}


function playRound (computerChoice, humanChoice) {

    if (computerSelection  === "rock" && humanSelection  === "rock") { 
        alert("Tie game! Rock matches Rock"); 
    } else if (computerSelection  === "rock" && humanSelection  === "paper") { 
        alert("You win! Paper beats Rock"); 
        console.log("Your score is " + ++humanScore); 
    } else if (computerSelection  === "rock" && humanSelection  === "scissors") { 
        alert("You lose! Rock beats Scissors"); 
        console.log("Computer's score is " + ++computerScore); 
    } else if (computerSelection  === "paper" && humanSelection  === "paper") { 
        alert("Tie game! Paper matches Paper");
    } else if (computerSelection  === "paper" && humanSelection  === "rock") { 
        alert("You lose! Paper beats Rock");
        console.log("Computer's score is " + ++computerScore); 
    } else if (computerSelection  === "paper" && humanSelection  === "scissors") { 
        alert("You win! Scissors beats Paper");
        console.log("Your score is " + ++humanScore); 
    } else if (computerSelection  === "scissors" && humanSelection  === "scissors") { 
        alert("Tie game! Scissors matches Scissors"); 
    } else if (computerSelection  === "scissors" && humanSelection  === "rock") { 
        alert("You win! Rock beats Scissors");
        console.log("Your score is " + ++humanScore); 
    } else if (computerSelection  === "scissors" && humanSelection  === "paper") { 
        alert("You lose! Scissors beats Paper");
        console.log("Computer's score is " + ++computerScore); 
    }
} 

let humanSelection = getHumanChoice(); 
let computerSelection = getComputerChoice(); 

playRound(humanSelection, computerSelection); 