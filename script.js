function getComputerChoice() { 
    let random = Math.random(); 
    if (random >= 0 && random < .33) { 
        return "rock"; 
    } else if (random >= .33 && random < .66) { 
        return "paper"; 
    } else if (random >= .66 && random < .99) { 
        return "scissors"; 
    }
}

function getHumanChoice() { 
    return prompt("Enter Rock, Paper, or Scissors").toLowerCase();  
}
function playGame() { 
    let computerScore = 0; 
    let humanScore = 0;
  
  function playRound(computerChoice, humanChoice) { 
    if (computerChoice === "rock" && humanChoice === "rock") { 
        console.log("Tie Game! Rock versus Rock!"); 
        console.log("Scores remain the same"); 
    } else if (computerChoice === "rock" && humanChoice === "paper") { 
        console.log("You win! Paper covers Rock!");
        console.log("Scores: User: " + ++humanScore + " Computer: " + computerScore); 
    } else if (computerChoice === "rock" && humanChoice === "scissors") { 
        console.log("You lose! Rock smashes Scissors!");
        console.log("Scores: User: " + humanScore + " Computer: " + ++computerScore); 
    } else if (computerChoice === "paper" && humanChoice === "rock") { 
        console.log("You lose! Paper covers Rock!"); 
        console.log("Scores: User: " + humanScore + " Computer: " + ++computerScore); 
    } else if (computerChoice === "paper" && humanChoice === "paper") { 
        console.log("Tie game! Paper versus Paper!"); 
    } else if (computerChoice === "paper" && humanChoice === "scissors") { 
        console.log("You win! Scissors cuts through Paper!"); 
        console.log("Scores: User: " + ++humanScore + " Computer: " + computerScore); 
    } else if (computerChoice === "scissors" && humanChoice === "rock") { 
        console.log("You win! Rock smashes Scissors!"); 
        console.log("Scores: User: " + ++humanScore + " Computer: " + computerScore); 
    } else if (computerChoice === "scissors" && humanChoice === "paper") { 
        console.log("You lose! Scissors cuts through Paper!"); 
        console.log("Scores: User: " + humanScore + " Computer: " + ++computerScore); 
    } else if (computerChoice === "scissors" && humanChoice === "scissors") { 
        console.log("Tie game! Scissors versus Scissors!"); 
    }
  }
  playRound(getComputerChoice(), getHumanChoice()); 
  playRound(getComputerChoice(), getHumanChoice()); 
  playRound(getComputerChoice(), getHumanChoice()); 
  playRound(getComputerChoice(), getHumanChoice()); 
  playRound(getComputerChoice(), getHumanChoice()); 

  if (humanScore > computerScore) { 
    console.log("You win!");  
  } else if (humanScore < computerScore)
 { 
    console.log("Computer wins!"); 
 } else { 
    console.log("It's a draw!"); 
 }
}

 