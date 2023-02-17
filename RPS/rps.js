
let computerwincount = 0;
let playerwincount = 0;
let tiecount = 0
let roundcount = 0;

/*get computers random choice for rock/paper/scissors */
function getComputerChoice(){
    
    const choices = ["Rock", "Paper", "Scissors"];
    const mynumber =  Math.floor(Math.random()* choices.length) ;
    return choices[mynumber];
}

/*What happens each time a round is played */
function gameRound(playerSelection, computerSelection){
        playerstring = playerSelection.toLowerCase();
        computerstring = computerSelection.toLowerCase();
        

        if (playerstring === computerstring){
            roundcount++
            tiecount++
            return "You Tied!";
        } 
        
        if (playerstring === "rock"){
            if (computerstring === "paper"){
                computerwincount++
                roundcount++
                return "You lose! paper beats rock."

            }
            else {
                playerwincount++
                roundcount++
                return "You win! rock beats scissors."
            }
        }
        if (playerstring === "paper") {
            if (computerstring === "scissors"){
                computerwincount++
                roundcount++
                return "You lose! scissors beats paper."
            }  
            else {
                playerwincount++
                roundcount++
                return "You win! paper beats rock."
            }
        }
        if (playerstring === "scissors"){
            if (computerstring === "rock"){
                computerwincount++
                roundcount++
                return "You lose! rock beats scissors."
            }
            else {
                playerwincount++
                roundcount++
                return "You win! scissors beats paper."
            }
        }


    }  
            
/* plays 5 games of rock, paper, scissors. Also keeps score and tells you who won at the end. */
// function game(){

//     let score;

//     let playerwincount = 0;
//     let computerwincount = 0;

//     for (let i = 0; i < 5; i++){
//         const playerSelection = prompt("Player 1, enter your choice (rock, paper, scissors):");
//         const computerSelection = getComputerChoice();
//         let roundresult = gameRound(playerSelection, computerSelection)
//         console.log(roundresult);


//         if (roundresult.slice(0,9) === "You lose!"){
//             computerwincount++;
//         }
//         if (roundresult.slice(0,8) === "You win!"){
//             playerwincount++;
//         }

//         console.log("Player score:" + playerwincount + " computer score: " + computerwincount);

//         if (i === 4){
//             if (playerwincount > computerwincount){
//                 console.log("Player wins the best of 5!")
//             }
//             if (computerwincount > playerwincount){
//                 console.log("The Computer won the best of 5, sorry!")
//             }
//             if (computerwincount === playerwincount){
//                 console.log("You tied the computer in a best of 5!")
//             }
//         }
//     }

    
// }   


const rockbtn = document.querySelector('#rockbtn');
const paperbtn = document.querySelector('#paperbtn');
const scissorbtn = document.querySelector('#scissorbtn');
const restartbtn = document.querySelector('#restartbtn');

const playerscorepara = document.querySelector('#playerscore');
const computerscorepara = document.querySelector('#computerscore');
const tiepara = document.querySelector('#tiecount');
const winnerpara = document.querySelector('#winner')



rockbtn.addEventListener('click', () => onclick('rock'));
paperbtn.addEventListener('click', () => onclick('paper'));
scissorbtn.addEventListener('click', () => onclick('scissors'));

restartbtn.addEventListener('click', () => restartgame());

function onclick(playerSelection){
    
    const computerSelection = getComputerChoice();

    const roundresult = gameRound(playerSelection, computerSelection);

    console.log(roundresult)
    
    updatescore()

}

function updatescore() {

    playerscorepara.textContent = `Player: ${playerwincount}`;
    computerscorepara.textContent = `Computer: ${computerwincount}`;
    tiepara.textContent = `Tied: ${tiecount}`;

    if (roundcount === 5){
        if (playerwincount > computerwincount){
            winnerpara.textContent = 'The Player!';
        }
        if (computerwincount > playerwincount){
            winnerpara.textContent = 'The Computer!';
        }
        if (computerwincount === playerwincount) {
            winnerpara.textContent = 'Neither! It is a Tie Game!';
        }
    }
 
}

function restartgame() {

    playerwincount = 0;
    computerwincount = 0;
    tiecount = 0;

    roundcount = 0;

    winnerpara.textContent = '';

    updatescore()


}