let userChoice;
let computerchoice;
let score = JSON.parse(localStorage.getItem('score')) ||
{
    Win: 0,
    Lost: 0,
    Tie: 0,
};
function computerchoicegenerator() {
    let randomnumber = Math.random() * 3;
    if (randomnumber >= 0 && randomnumber < 1) {
        computerchoice = 'Rock';
    }
    else if (randomnumber >= 1 && randomnumber < 2) {
        computerchoice = 'Paper';
    }
    else {
        computerchoice = 'Scissor';
    }
}
function result() {
    if (computerchoice === userChoice) {
        score.Tie++
        return "It's a tie";
        

    }
    else if (
        (userChoice === 'Rock' && computerchoice === 'Scissor') ||
        (userChoice === 'Scissor' && computerchoice === 'Paper') ||
        (userChoice === 'Paper' && computerchoice === 'Rock')) {
        score.Win++
        return "You won the Game";
        


    }
    else {
        score.Lost++
        return "Computer won the Game";
        

    }




}
function displaymsg() {
    let gameresult = result();
    // alert(`You have chosen ${userChoice}, Comupter choice is ${computerchoice} and ${gameresult}`);
    document.querySelector('#userChoiceMsg').innerText = `You have chosen ${userChoice}`;
    document.querySelector('#computerChoiceMsg').innerText = `Computer choice is ${computerchoice}`;
    document.querySelector('#resultMsg').innerText = `${gameresult}`;
    updatelocalstorage();

    displayscore();
   
}

function updatelocalstorage(){
    localStorage.setItem('score',JSON.stringify(score));
}

function resetgame(){
    score={
        Win:0,
        Lost:0,
        Tie:0,
    }
    updatelocalstorage();
    displayscore();
    alert('Game Reset!')
}
function displayscore(){
    document.querySelector('#score').innerText = `Score Win:${score.Win}, Lost:${score.Lost}, Tie:${score.Tie}`;

}


displayscore();
