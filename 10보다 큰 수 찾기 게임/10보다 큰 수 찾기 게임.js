const playButton = document.getElementById("playButton");
const div = document.querySelector("div");

const num_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const array = [];

while (array.length < 10) {
  let length = num_list.length;
  let i = Math.floor(Math.random() * length);
  array.push(num_list[i]);
  num_list.splice(i, 1);
}

function setQuiz() {
  const h1_1 = document.getElementById("title");
  h1_1.innerText = "10보다 큰 숫자를 찾아 작성 후 제출해 주세요!";
  const createH1_2 = document.createElement("h1");
  const h1_2 = div.appendChild(createH1_2);
  h1_2.innerText = `문제: ${array}`;
  h1_2.style = "padding: 30px; margin: 70px 0 0; border: 3px solid #f08080; border-radius: 10px;"
  const createH3 = document.createElement("h3");
  const h3 = div.appendChild(createH3);
  h3.innerText = "❗정답 입력 시 공백 한 칸(스페이스바 한 번만 누르기)으로 숫자 사이를 구분해야 정답으로 인정됩니다.❗";
  h3.style = "margin: 50px 0 0; background-color: #e5d2e9;";
}

function setInput() {
  const createForm = document.createElement("form");
  const form = div.appendChild(createForm);
  const createInput = document.createElement("input");
  const createButton = document.createElement("button");
  const input = form.appendChild(createInput);
  const button = form.appendChild(createButton);
  form.style = "margin: 70px 0 0;";
  input.placeholder = "정답을 입력해 주세요.";
  input.type = "text";
  input.style = "height: 50px; width: 500px; font-size: 25px; border: 0; background-color: #e4eaef; border-radius: 20px;";
  button.id = "submitButton";
  button.innerText = "submit";
  button.style = "width: 100px; height: 50px; border = 0; font-size: 20px; background-color: #dfdfde; margin: 0 0 0 30px; border: 0; box-shadow: 0 3px 3px 0;"
}

playButton.onclick = function startGame() {
  const info = document.getElementById("info");
  const tip = document.getElementById("tip");
  info.remove();
  playButton.remove();
  tip.remove();
  setQuiz();
  setInput();
  
  const getInput = document.querySelector("input");
  
  function checkAnswer() {
    let smallerThanTen = [];
    for (let i = 0; i <= array.length; i++) {
      if (array[i-1] > 10) {
        smallerThanTen.push(array[i-1]);
      }
    }
    let answerToString = smallerThanTen.join(" ");
    let response = true;
    if (answerToString === getInput.value) {
      alert("정답입니다😊");
      while (response) {
        let replay = prompt("다시 플레이 하시겠습니까? (네 / 아니요)");
        if (replay === "네") {
          location.reload();
          response = false;
        } else if (replay === "아니요" || replay === null) {     // 한번에 "아니요" || null 이렇게 적으면 적용이 안됨. 
          window.close();
          response = false;
        } else {
          alert("입력 형식에 맞게 입력해 주세요🙂");
        }
      }
    } else {
      alert("오답입니다😢 (입력 방식이 잘못되었을 수도 있으니 정답 인정 기준을 확인해 주세요!)");
      while(response) {
        let retry = prompt("재도전 하시겠습니까? (네 / 아니요)");
        if (retry === "네") {
          response = false;
        } else if (retry === "아니요" || retry === null) {
          window.close();
          response = false;
        } else {
          alert("입력 형식에 맞게 입력해 주세요🙂");
        }
      }
    }
  }
  
  function showResult(event) {
    event.preventDefault();
    checkAnswer();
    getInput.value = "";
  }  
  
  const submitButton = document.getElementById("submitButton");
  submitButton.addEventListener("click", showResult);
}
