const inputs = document.querySelectorAll(".input-values");
const submitBtn = document.querySelector("#submit-btn");
const outputDiv = document.querySelector("#output-div");

function sumOfSquares(input1, input2) {
  const totalSum = input1 * input1 + input2 * input2;
  return totalSum;
}

function calculateHypotonuse() {
  const squaresOfSum = sumOfSquares(
    Number(inputs[0].value),
    Number(inputs[1].value)
  );
  const finalLength = Math.sqrt(squaresOfSum);
  outputDiv.innerText = "The length on hypotonuse is " + finalLength;
}
submitBtn.addEventListener("click", calculateHypotonuse);
