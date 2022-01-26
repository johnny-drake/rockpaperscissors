




function test() {
    
    let Result = ""

    let playerChoices = prompt("Please enter Rock, Paper or Scissors")
    
    let computerChoices = Math.random();
    if (computerChoices<0.3333333333) {
    computerChoices="Rock";
    } else if (computerChoices>0.67) {
    computerChoices="Paper";
    } else { 
    computerChoices="Scissors"
    }



    if (playerChoices=="Rock" && computerChoices=="Rock") {
        Result = ("Computer chooses Rock! It's a tie!")
        } else if (playerChoices=="Rock" && computerChoices=="Paper") {
        Result = ("Computer chooses Paper! Paper beats Rock! Computer Wins!")
        } else if (playerChoices=="Rock" && computerChoices=="Scissors") {
        Result = ("Computer chooses Scissors! Rock beats Scissors! Player Wins!")
        } else if (playerChoices=="Paper" && computerChoices=="Rock") {
        Result = ("Computer chooses Rock! Paper beats Rock! Player Wins!")
        } else if (playerChoices=="Paper" && computerChoices=="Scissors") {
        Result = ("Computer chooses Scissors! Scissors beats Paper! Computer Wins!")
        } else if (playerChoices=="Paper" && computerChoices=="Paper") { 
        Result = ("Computer chooses Paper! It's a tie!")
        } else if (playerChoices=="Scissors" && computerChoices=="Rock") {
        Result = ("Computer chooses Rock! Rock beats Scissors! Computer Wins!")
        } else if (playerChoices=="Scissors" && computerChoices=="Paper") {
        Result = ("Computer chooses Paper! Scissors beats Paper! Player Wins!")
        } else if (playerChoices=="Scissors" && computerChoices=="Scissors") {
        Result = ("Computer chooses Scissors! It's a tie!");
        } else {
        }
        

        if (playerChoices=="Rock" && computerChoices=="Rock") {
            
            } else if (playerChoices=="Rock" && computerChoices=="Paper") {
            computerScore=computerScore+1
            } else if (playerChoices=="Rock" && computerChoices=="Scissors") {
                playerScore=playerScore+1
            } else if (playerChoices=="Paper" && computerChoices=="Rock") {
                playerScore=playerScore+1
            } else if (playerChoices=="Paper" && computerChoices=="Scissors") {
                computerScore=computerScore+1
            } else if (playerChoices=="Paper" && computerChoices=="Paper") { 
                
            } else if (playerChoices=="Scissors" && computerChoices=="Rock") {
                computerScore=computerScore+1
            } else if (playerChoices=="Scissors" && computerChoices=="Paper") {
                playerScore=playerScore+1
            } else if (playerChoices=="Scissors" && computerChoices=="Scissors") {
                
            } else {
            }
            return Result;

    }




    
function game() {
    computerScore=0
    playerScore=0

    console.log(test())
    console.log(test())
    console.log(test())
    console.log(test())
    console.log(test())



let message = ""

if (computerScore>playerScore){
    message="Computer is the winner!"
} else if (computerScore<playerScore) {
    message="Player is the winner!"
} else 
    message="It's a tie!"



    return [message, computerScore, playerScore];

}












  











