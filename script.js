let redButton = document.querySelector("#red");
let blueButton = document.querySelector("#blue");
let yellowButton = document.querySelector("#yellow");

redButton.addEventListener("click", () => {
  document.body.style.backgroundColor = "red";
});
blueButton.addEventListener(
  "click",
  () => (blueButton.style.backgroundColor = "blue")
);
yellowButton.addEventListener(
  "click",
  () => (yellowButton.style.backgroundColor = "yellow")
);
