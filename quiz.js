const quizForm = document.querySelector(".quiz-form");
const submitButton = document.querySelector("#submit-button");
const outputDiv = document.querySelector("#output-div");
const correctAnswers = ["45°", "right angled"];

function calculateAnswers() {
  let index = 0;
  let count = 0;
  const formResults = new FormData(quizForm);
  for (let value of formResults.values()) {
    if (value === correctAnswers[index]) {
      count = count + 1;
    }
    index++;
  }
  outputDiv.innerText = "You have scored " + count + " correct answers!";
}
submitButton.addEventListener("click", calculateAnswers);
