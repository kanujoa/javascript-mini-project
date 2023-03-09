const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const clickButton = document.getElementById("btn");
// const main = document.querySelector("main");
const colorTxt = document.querySelector(".color");

function changeBgHex(e) {
  e.preventDefault();
  let randomHexColor = "#"
  for (i=0; i<6; i++) 
  {
    let element = hex[Math.floor(Math.random() * hex.length)]     // randomNumber를 구하는 코드는 따로 함수를 만들어서 적어주면 좋다. (return으로 randomNumber를 반환해주면 됨.)
    // if (Number.isInteger(element)) 
    // {
    //   element = String(element);     --> 숫자일 때 형변환을 거치지 않아도 정상적으로 작동!
    // }
    randomHexColor += element;
  }
  // main.style.backgroundColor = randomHexColor;     --> 굳이 main을 가져오지 않아도 됨. body에 randomHexColor를 적용해도 됨.
  document.body.style.backgroundColor = randomHexColor;     
  colorTxt.innerText = randomHexColor;
  // colorTxt.textContent = randomHexColor;     --> 이 코드도 가능!
}

clickButton.addEventListener("click", changeBgHex);