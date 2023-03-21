const nameForm = document.querySelector("#name");
const nameInput = document.querySelector("#name input")
const nameCheckBtn = document.querySelector("#name-check");
const gridLeft = document.querySelector("#grid-left");
const writeTodo = document.querySelector("#write-todo");

function greeting(e) {
  e.preventDefault();
  if (localStorage.getItem("todo_app_username") !== null) {     // 스토리지에 todo_app_username 키가 있는지 확인 (없으면 저장된 이름값이 없는 것!)
  // localstorage에 todo_app_username 키가 있는 경우
    const username = localStorage.getItem("todo_app_username");     // localstorage에서 todo_app_username에 해당하는 값을 username 변수에 저장
    paintUsername(username);     // username을 화면에 보여줌.
  }
}

function writeNameForm(e) {
  e.preventDefault();
  const username = nameInput.value;
  if (username === "") {
    alert("이름을 입력해 주세요!");
  } 
  else {     // form에 username을 올바르게 입력하면 
    paintUsername(username);     // 화면에 보여주고
    saveNameToLocal(username);     // localstorage에도 저장함.
  }
}

function saveNameToLocal(username) {     // 이름의 경우 localstorage에 저장하는 것은 딱 한번만 하면 된다.
  localStorage.setItem("todo_app_username", JSON.stringify(username));     // 키는 todo_app_username으로, 값인 이름은 intput에 입력된 값 username을 JSON으로 변환한 형태로 저장
}

function paintUsername(username) {
  nameForm.classList.add("hidden");
  const createH1 = document.createElement("h1");
  const greeting = gridLeft.insertBefore(createH1, writeTodo);
  greeting.innerText = `Hello, 💫${username}💫`;
  greeting.classList.add("greeting");
}

nameForm.addEventListener("submit", writeNameForm);
window.addEventListener("DOMContentLoaded", greeting);