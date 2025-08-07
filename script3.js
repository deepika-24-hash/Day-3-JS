let number = 75;

function Guess() {
  let userGuess = document.getElementById("guessInput").value;
  let result = document.getElementById("result");

  if (userGuess == number) {
    result.innerText = "Correct!";
  } else if (userGuess < number) {
    result.innerText = "Too Low";
  } else {
    result.innerText = "Too High";
  }
}