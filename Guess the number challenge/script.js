let correctNum;
let attempts = 0;

function onLoad() {
    createNum();
    const guessButton = document.querySelector('.guess-button');
    guessButton.addEventListener('click', handleGuess);
}

function createNum() {
    correctNum = Math.floor(Math.random() * 100) + 1; // Random number between 1-100
    console.log(`(Debug) Correct number: ${correctNum}`); // For testing
}

function handleGuess() {
    const numInput = document.querySelector('.num-container');
    const guessedNum = parseInt(numInput.value, 10);

    if (isNaN(guessedNum) || guessedNum < 1 || guessedNum > 100) {
        alert('Please enter a valid number between 1 and 100!');
        return;
    }

    attempts++;
    if (guessedNum === correctNum) {
        alert(`🎉 You guessed the correct number in ${attempts} attempts!`);
        resetGame();
    } else if (guessedNum > correctNum) {
        alert('Your guess is too high!');
    } else {
        alert('Your guess is too low!');
    }

    if (attempts === 5) {
        alert(`😢 You lose! The correct number was ${correctNum}.`);
        resetGame();
    }
}

function resetGame() {
    correctNum = null;
    attempts = 0;
    document.querySelector('.num-container').value = '';
    createNum(); // Start a new round
}

// Initialize the game
onLoad();
