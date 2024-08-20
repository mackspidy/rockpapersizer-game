let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".gameBtn");

const winningResult = document.querySelector(".winningResult");

const userScorein = document.querySelector("#userScorein");
const compScorein = document.querySelector("#compScorein");

const compChoice = () => {
    // to generate computer choice
    const compChoices = ["Rock", "Paper", "scissors"];
    const generatives = Math.floor(Math.random() * 3);
    return compChoices[generatives];
}

const finalWin = (userWin, choiceID, getComp) => {
    if (userWin) {
        //console.log("you are win");
        winningResult.innerHTML = `You are win ! Your <b>${choiceID}</b> beats <b>${getComp}</b>`;
        winningResult.style.backgroundColor = "Green"
        userScore++;

        userScorein.innerText = userScore;
    }
    else{
        //console.log("you are loose");
        winningResult.innerHTML = `You are loose ! as Ccmputer <b>${getComp}</b> beats your <b>${choiceID}</b> `;
        winningResult.style.backgroundColor = "red"

        compScore++;
        compScorein.innerText = compScore;
    }
}

const userChoice = (choiceID) => {
    //console.log("oops clicked", choiceID);

    const getComp = compChoice();
    //console.log("computer choices is ", getComp);

    if (choiceID === getComp) {
        drawGame();        
    }
    else {
        let userWin = true;
        if (choiceID === "Rock") {
            // paper, sci
            userWin = getComp === "Paper" ? false : true;
        }
        else if(choiceID === "Paper"){
            // rock, sci
            userWin = getComp === "scissors" ? false : true ;
        }
        else {
            //rock, paper
            userWin = getComp === "Rock" ? false : true;
        }
        finalWin(userWin, choiceID, getComp);
    }
    
}



const drawGame = () => {
    //console.log("Game was draw");
    winningResult.innerText = "Game was draw";
    winningResult.style.backgroundColor = "#000";

}

choices.forEach((gameBtn) => {
    gameBtn.addEventListener("click", () => {
        const choiceID = gameBtn.getAttribute("ID");
        userChoice(choiceID);    
    });
    
});
