function playGame(userChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    if (userChoice === computerChoice) {
        setMessage("Oh it's a TIE!");
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        setMessage(`Victory! Computer chose ${computerChoice}.`);
    } else {
        setMessage(`You lose! Computer chose ${computerChoice}.`);
    }
}

function setMessage(message) {
    document.getElementById("message").innerText = message;
}
