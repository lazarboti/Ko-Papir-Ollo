const choices = ["Kő", "Papír", "Olló"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const darkModeToggle = document.getElementById("darkModeToggle");
const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");
let playerScore = 0;
let computerScore = 0;

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "Döntetlen";
    } else {
        switch (playerChoice) {
            case "Kő":
                result = (computerChoice === "Olló") ? "Nyertél" : "Vesztettél";
                break;
            case "Papír":
                result = (computerChoice === "Kő") ? "Nyertél" : "Vesztettél";
                break;
            case "Olló":
                result = (computerChoice === "Papír") ? "Nyertél" : "Vesztettél";
                break;
        }
    }
    
    if (result === "Nyertél") {
        playerScore++;
    } else if (result === "Vesztettél") {
        computerScore++;
    }
    
    playerDisplay.textContent = `JÁTÉKOS: ${playerChoice}`;
    computerDisplay.textContent = `GÉP: ${computerChoice}`;
    resultDisplay.textContent = `EREDMÉNY: ${result}`;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}
