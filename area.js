const inputs = document.querySelectorAll(".input-values");
const submitBtn = document.querySelector("#submit-btn");
const outputDiv = document.querySelector("#output-div");

function calculateArea() {
  Product = Number(inputs[0].value) * Number(inputs[1].value);
  Area = Product / 2;
  outputDiv.innerText = "The Area of triangle is " + Area;
}
submitBtn.addEventListener("click", calculateArea);
