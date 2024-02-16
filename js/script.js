function playGame(playerChoice) {
    // Generate a random choice for the computer
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Determine the winner
    let result;
    if (playerChoice === computerChoice) {
      result = "IT'S A TIE!";
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      result = "YOU WIN!";
    } else {
      result = "COMPUTER WINS!";
    }

    // Display the result
    document.getElementById("result").innerText = `You chose ${playerChoice}. Computer chose ${computerChoice}.${result}`;
}