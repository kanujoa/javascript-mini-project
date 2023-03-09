const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const clickMe = document.getElementById("btn");
const main = document.querySelector("main");
const colorTxt = document.querySelector(".color");

function changeBgSimple(e) {
  e.preventDefault();
  const randomSimpleColor = colors[Math.floor(Math.random() * colors.length)];
  // main.style.backgroundColor = randomSimpleColor;     --> 굳이 main을 가져오지 않아도 됨.
  document.body.style.backgroundColor = randomSimpleColor;
  colorTxt.innerText = randomSimpleColor;
  // colorTxt.textContent = randomSimpleColor;     --> 이 코드도 가능!
}

clickMe.addEventListener("click", changeBgSimple);