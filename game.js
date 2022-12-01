function getComputerChoice(){
    let choice = Math.floor((Math.random() * 3)+1);
    if (choice===1) return 'rock';
    if (choice===2) return 'paper';
    if (choice===3) return 'scissors';
}
function play(playerSelection, computerSelection){
    let log = '';

    if (playerSelection.toLowerCase() === 'rock') {
      if (computerSelection === 'paper') {
        log = 'lose';
      } else if (computerSelection === 'scissors') {
        log = 'win';
      } else {
        log = "tie";
      }
    } else if (playerSelection.toLowerCase() === 'paper') {
      if (computerSelection === 'scissors') {
        log = 'lose';
      } else if (computerSelection === 'rock') {
        log = 'win';
      } else {
        log = "tie";
      }
    } else if (playerSelection.toLowerCase() === 'scissors') {
      if (computerSelection === 'rock') {
        log = 'lose';
      } else if (computerSelection === 'paper') {
        log = 'win';
      } else {
        log = "tie";
      }
    }
  
    return log;
  }
function game(){
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++){
        let playerChoice = prompt('Rock, Paper, Scissors, Shoot!').toLowerCase();
        let computerChoice = getComputerChoice();
        let wl = play(playerChoice, computerChoice)
        if (wl==='win'){
            playerScore+=1;
            console.log(`You Win! ${playerChoice} beats ${computerChoice}`)
        } else if (wl==='lose'){
            computerScore+=1;
            console.log(`You Lose! ${playerChoice} loses to ${computerChoice}`)
        } else{
            console.log(`It's a tie!`)
        }
    }
}
console.log(getComputerChoice());
game();