let score;
let userChoice;
let computerChoice;

// document.querySelector(".snake-btn").addEventListener("click", () => { userChoice === "Snake" });
// document.querySelector(".water-btn").addEventListener("click", () => { userChoice === "Water" });
// document.querySelector(".gun-btn").addEventListener
//     ("click", () => { userChoice === "Gun" });


function creatComChoice() {
    let randomNum = Math.random() * 3;

    if (randomNum <= 1) {

        computerChoice = "Snake";
    }
    else if (randomNum > 1 && randomNum <= 2) {
        computerChoice = "Water";
    }
    else {
        computerChoice = "Gun";
    }
}

function determineWin() {
    if (userChoice === "Snake") {
        if (computerChoice === "Snake") {
            alert(`Your choice is ${userChoice}, computer has chosen ${computerChoice},It's a tie.`)
        }
        else if (computerChoice === "Water") {
            alert(`Your choice is ${userChoice}, computer has chosen ${computerChoice},You have won the Game.`)
        }
        else if (computerChoice === "Gun") {
            alert(`Your choice is ${userChoice}, computer has chosen ${computerChoice},Computer won the Game.`)
        }
    }
    else if (userChoice === "Water") {
        if (computerChoice === "Snake") {
            alert(`Your choice is ${userChoice}, computer has chosen ${computerChoice},Computer won the Game.`)
        }
        else if (computerChoice === "Water") {
            alert(`Your choice is ${userChoice}, computer has chosen ${computerChoice},It's a tie.`)
        }
        else if (computerChoice === "Gun") {
            alert(`Your choice is ${userChoice}, computer has chosen ${computerChoice},You have won the Game.`)
        }
    }
    else if (userChoice === "Gun") {
        if (computerChoice === "Snake") {
            alert(`Your choice is ${userChoice}, computer has chosen ${computerChoice},You have won the Game `)
        }
        else if (computerChoice === "Water") {
            alert(`Your choice is ${userChoice}, computer has chosen ${computerChoice},Computer won the Game.`)
        }
        else if (computerChoice === "Gun") {
            alert(`Your choice is ${userChoice}, computer has chosen ${computerChoice},It's a tie.`)
        }
    }
}
