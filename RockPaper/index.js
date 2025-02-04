const choices=["rock","paper","scissors"]

const playerDisplay=document.getElementById("playerDisplay")
const computerDisplay=document.getElementById("computerDisplay")
const resultDisplay=document.getElementById("resultDisplay")


function playGame(playerChoice){
    const computerChoice=choices[Math.floor(Math.random()*3)]
    let result=""

    if(playerChoice===computerChoice){
        result="IT's A TIE";
    }
    else{
        switch(playerChoice){
            case "rock":
                result=(computerChoice==="scissors")?"You Win":"You Loose";
            break;

            case "paper":
                result=(computerChoice==="rock")?"You Win":"You Loose";
            break;

            case "scissors":
                result=(computerChoice==="paper")?"You Win":"You Loose";
            break;
        }
    }
    playerDisplay.textContent=`PLAYER: ${playerChoice}`
    computerDisplay.textContent=`COMPUTER: ${computerChoice}`
    resultDisplay.textContent=result;
}