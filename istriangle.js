const inputs = document.querySelectorAll(".input-angle");
const isTriangleBtn = document.querySelector("#button");
const outputDiv = document.querySelector("#output-triangle");

function sumOfThreeAngles(angle1, angle2, angle3) {
  const totalSum = angle1 + angle2 + angle3;
  return totalSum;
}

function checkTriangle() {
  const finalSum = sumOfThreeAngles(
    Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
  );
  if (finalSum === 180) {
    outputDiv.innerText = "Above angles make a triangle";
  } else {
    outputDiv.innerText = "Above angles don't make a triangle";
  }
}

isTriangleBtn.addEventListener("click", checkTriangle);
