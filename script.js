document.getElementById("rock").addEventListener("click", playRock);
document.getElementById("paper").addEventListener("click", playPaper);
document.getElementById("scissors").addEventListener("click", playScissors);

computerScore=0;
playerScore=0;

function playRock() {

    let computerChoices = Math.random();
    if (computerChoices<0.3333333333) {
        document.getElementById("outcome").innerHTML="Computer chooses rock! Its a tie!";
    } else if (computerChoices>0.67) {
        document.getElementById("outcome").innerHTML="Computer chooses paper! Computer wins!"
        computerScore=computerScore+1;
    } else { 
        document.getElementById("outcome").innerHTML="Computer chooses scissors! Player wins!"
        playerScore=playerScore+1;
    }

    document.getElementById("computerScore").innerHTML = "Computer: " + computerScore;
    document.getElementById("playerScore").innerHTML = "Player: " + playerScore;

    if (computerScore === 5) {
        computerScore = computerScore*0
        playerScore = playerScore*0
        document.getElementById("outcome").innerHTML="Computer is first to 5 points! Computer is the winner!"
    } else if (playerScore === 5) {
        computerScore = computerScore*0
        playerScore = playerScore*0
        document.getElementById("outcome").innerHTML="Player is first to 5 points! Player is the winner!"
    }

}

function playPaper() {

    let computerChoices = Math.random();
    if (computerChoices<0.3333333333) {
        document.getElementById("outcome").innerHTML="Computer chooses paper! Its a draw!";
    } else if (computerChoices>0.67) {
        document.getElementById("outcome").innerHTML="Computer chooses scissors! Computer wins!";
        computerScore=computerScore+1;
    } else { 
        document.getElementById("outcome").innerHTML="Computer chooses rock! Player wins!"
        playerScore=playerScore+1;
    }

    document.getElementById("computerScore").innerHTML = "Computer: " + computerScore;
    document.getElementById("playerScore").innerHTML = "Player: " + playerScore;

    if (computerScore === 5) {
        computerScore = computerScore*0
        playerScore = playerScore*0
        document.getElementById("outcome").innerHTML="Computer is first to 5 points! Computer is the winner!"
    } else if (playerScore === 5) {
        computerScore = computerScore*0
        playerScore = playerScore*0
        document.getElementById("outcome").innerHTML="Player is first to 5 points! Player is the winner!"
    }

}

function playScissors() {

    let computerChoices = Math.random();
    if (computerChoices<0.3333333333) {
     document.getElementById("outcome").innerHTML="Computer chooses scissors! Its a draw!";
    } else if (computerChoices>0.67) {
        document.getElementById("outcome").innerHTML="Computer chooses rock! Computer wins!";
        computerScore=computerScore+1;
    } else { 
        document.getElementById("outcome").innerHTML="Computer chooses paper! Player wins!"
        playerScore=playerScore+1;
    } 

    document.getElementById("computerScore").innerHTML = "Computer: " + computerScore;
    document.getElementById("playerScore").innerHTML = "Player: " + playerScore;

    if (computerScore === 5) {
        computerScore = computerScore*0
        playerScore = playerScore*0
        document.getElementById("outcome").innerHTML="Computer is first to 5 points! Computer is the winner!"
    } else if (playerScore === 5) {
        computerScore = computerScore*0
        playerScore = playerScore*0
        document.getElementById("outcome").innerHTML="Player is first to 5 points! Player is the winner!"
    }

}













