const nameForm = document.querySelector("#name");
const nameInput = document.querySelector("#name input")
const nameCheckBtn = document.querySelector("#name-check");
const gridLeft = document.querySelector("#grid-left");
const writeTodo = document.querySelector("#write-todo");

function paintUsername(e) {
  e.preventDefault();
  const username = nameInput.value;
  if (username === "") {
    alert("이름을 입력해 주세요!");
  } 
  else {
    nameForm.classList.add("hidden");
    const createH1 = document.createElement("h1");
    const greeting = gridLeft.insertBefore(createH1, writeTodo);
    greeting.innerText = `Hello, 💫${username}💫`;
    greeting.classList.add("greeting");
  }
}

nameForm.addEventListener("submit", paintUsername);