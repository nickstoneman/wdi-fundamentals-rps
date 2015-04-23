////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors':");
    return prompt();
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////


function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    // Setting local variable 'move' to equal player input
    return move = move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move = move || randomPlay();
}

function getWinner(playerMove,computerMove) {
      var winner = "";
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if (playerMove == "rock" && computerMove == "rock") {
        winner = "tie";
    }
        else if (playerMove == "rock" && computerMove == "paper") {
            winner = "computer";
        }
        else if (playerMove == "rock" && computerMove == "scissors") {
            winner = "player";
        }
        else if (playerMove == "paper" && computerMove == "rock") {
            winner = "player";
        }
        else if (playerMove == "paper" && computerMove == "paper") {
            winner = "tie";
        }
        else if (playerMove == "paper" && computerMove == "scissors") {
            winner = "computer";
        }
        else if (playerMove == "scissors" && computerMove == "rock") {
            winner = "computer";
        }
        else if (playerMove == "scissors" && computerMove == "paper") {
            winner = "player";
        }
        else if (playerMove == "scissors" && computerMove == "scissors") {
            winner = "tie";
        }
    return winner;
}

  // This function should continue to play Rock Paper Scissors until either the
  // player or the computer has won five times.
  // After each 'round', display some text in the console indicating who played
  // what, who won, and what the current scoreboard looks like.
  // For example,
  //  console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
  //  console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    /* YOUR CODE HERE */    
    function playTo(i) {
    console.log("Let's play Rock, Paper, Scissors!\n");
    var playerWins = 0; 
    var computerWins = 0;
        while (playerWins <= i +1 && computerWins <= i +1) {
            var playerTurn = getPlayerMove();
            var computerTurn = getComputerMove();
            var winnerIs = getWinner(playerTurn, computerTurn);
            console.log("You chose " + playerTurn + " and the computater chose " + computerTurn + ".\n");
            console.log("BOOM! The winner is " + winnerIs + "!!!\n");
            if (winnerIs == 'player') {
                playerWins +=1;
                console.log("That's " + playerWins + " compared to the computater opponents " + computerWins + ".\n");
                if (playerWins == i) {
                    console.log("You win!");
                    break;
                }
            }
            else if (winnerIs == 'computer') {
                computerWins +=1;
                console.log("You have " + playerWins + " to the computater opponents " + computerWins + " wins.\n");
                if (computerWins == i) {
                    console.log("Aww. Computater wins! Game over.\n");
                    break;
                }
            
            }
            else if (winnerIs == 'tie' ){
                console.log("The score is " + playerWins + " to " + computerWins + ". Let's play again and break the tie.\n");
            }
        }
        

//    console.log("The score is... "); 
    console.log ("The final score is... ");
    return [playerWins, computerWins];
        
    }

playTo(5);