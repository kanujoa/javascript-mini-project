const decreseBtn = document.querySelector(".decrease");
const resetBtn = document.querySelector(".reset");
const increseBtn = document.querySelector(".increase");
const countNum = document.querySelector("#value");

function decrease() {
  let currentNum = document.querySelector("#value").innerText;
  countNum.innerText = currentNum - 1;          // 마이너스 연산 시는 parseInt를 해 줄 필요 없다.
  if (currentNum - 1 < 0) 
  {
    countNum.style.color = "red";
  }
}
// currentNum의 type은 string임!

function increase() {
  let currentNum = parseInt(document.querySelector("#value").innerText);
  countNum.innerText = currentNum + 1;          // but 더하기 연산 시는 parseInt를 해 주어야 숫자가 1씩 증가함. (그렇지 않으면 1이 옆으로 연속해서 써짐.)
  if (currentNum + 1 > 0) 
  {
    countNum.style.color = "green";
  }
}

function reset() {
  countNum.textContent = 0;
  countNum.style.color = "var(--clr-grey-1)"
}

decreseBtn.addEventListener("click", decrease);
resetBtn.addEventListener("click", reset);
increseBtn.addEventListener("click", increase);