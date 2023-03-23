const todoForm = document.querySelector("#write-todo");
const todoInput = document.querySelector("#write-todo input");
const todoBtn = document.querySelector("#todo-check");
const todoTable = document.querySelector("#todo-table");
const noPlan = document.querySelector("#no-plan");
const speechBubble = document.querySelector("#bubble");

const TODOS = "todo_app_todos";
const COMPLETED = "todo_app_completed";

// todo 작성 시 안내문 말풍선 제어 함수
function handlespeechBubble(e) {     // 이벤트를 매개변수로 함.
  if (e.target === todoInput) {
    speechBubble.classList.remove("hidden");     
  }
  else {
    speechBubble.classList.add("hidden");
  }
}

// form에서 todo를 새로 작성할 때 실행되는 함수
function addTodo(e) {
  e.preventDefault();
  if (localStorage.getItem(TODOS) === null || JSON.parse(localStorage.getItem(TODOS)).length < 12) {     // localStoarge todo_app_todos 키의 값이 12개 미만인 경우
    let todo = todoInput.value;
    if (todo === "") {
      alert("Please write what you have to do at least one letter.");
    }
    else {
      paintTodo(todo);
      saveTodoToLocal(todoInput.value);     // localStorage에는 별 이모지도 같이 포함되어야 나중에 데이터 가져올 때 편하다.
    }
    todoInput.value = "";
    handleEmptyTable();
  }
  else {     // localStorage todo_app_todos 키의 값이 12개로 꽉 차 있는 경우
    alert("You can write to do up to 12");
  }
}

// 새로 작성한 todo를 localstorage에 저장하는 함수
function saveTodoToLocal(todo) {
  let localData;
  if (localStorage.getItem(TODOS) === null) {
    localData = [];
  }
  else {
    localData = JSON.parse(localStorage.getItem(TODOS));
  }
  localData.push(todo);     // localData 배열에서 TODOS의 인덱스를 localStorage에 저장해야 하므로 localData.indexOf(todo) 사용
  localStorage.setItem(TODOS, JSON.stringify(localData));     
}

// table에서 클릭이 어디에서 일어났는지에 따라 실행될 함수가 달라짐. (어떤 버튼을 클릭했는지가 관건)
function handleClickEvent(e) {
  const target = e.target;     // target은 항상 태그 묶음 하나이다.
  if (target.innerText === "✔️") {
    completedTodo(e);
  }
  else if (target.tagName === "IMG") {
    undo(e);
  }
  else if (target.innerText === "🗑️") {
    removeTodo(e);
  }
}

// 삭제 버튼 클릭 시 작동 함수
function removeTodo(e) {
  // 화면에서 지우기
  const parentTr = e.target.parentElement.parentElement;     // 삭제 버튼의 조상 태그인 tr 태그를 찾기 위해 parentElement 두 번 사용해 줌.
  todoTable.removeChild(parentTr);     // parentTr은 todoTable의 자식이므로 removeChild로 바로 삭제 가능
  
  // localStorage에서 지우기
  const todoText = parentTr.children[1].innerText;     // 클릭한 삭제 버튼에 해당하는 라인의 todo를 삭제하기 위해 todo 내용을 담은 todoText 변수가 필요
  localItemRemove(TODOS, todoText);
  if (localStorage.getItem(COMPLETED) !== null) {
    if (JSON.parse(localStorage.getItem(COMPLETED)).includes(todoText)) {     // COMPLETED key의 값에 todoText가 존재할 시에는 (이 조건을 안달아주면 다른 todoText 요소에서 삭제가 일어날 수 있다.)
      localItemRemove(COMPLETED, todoText);     // COMPLETED key의 값에서도 삭제해 주어야 한다.
    }
  }

  handleEmptyTable();
}

// todo 내용이 하나도 없을 때 이미지를 띄우기 위한 함수
function handleEmptyTable() {
  if (localStorage.getItem(TODOS) === null || JSON.parse(localStorage.getItem(TODOS)).length === 0) {
    noPlan.classList.remove("hidden"); 
  }
  else {
    noPlan.classList.add("hidden");
  }
}

// 완료 버튼 클릭 시 작동 함수
function completedTodo(e) {
  // 완료(check)버튼을 되돌리기 버튼으로 바꿔주기 (스타일 적용 취소가 있을수도 있으니)
  const completeBtn = e.target;
  completeBtn.innerText = "";
  const createImg = document.createElement("img");
  const undoImg = completeBtn.appendChild(createImg);
  undoImg.src = "image/undo.png";

  // 완료된 todo 글자에 스타일 적용해주기
  const todoTextElement = completeBtn.parentElement.parentElement.children[1];     // todo 내용이 들어 있는 요소 (<td class="todo">~</td>) 
  const todoText = todoTextElement.innerText;
  todoTextElement.classList.add("completed");

  // localstorage 완료된 todo 목록에 추가하기 (TODOS와는 다른 key!)
  let localData;
  if (localStorage.getItem(COMPLETED) === null) {
    localData = [];
  }
  else {
    localData = JSON.parse(localStorage.getItem(COMPLETED));
  }
  localData.push(todoText);
  localStorage.setItem(COMPLETED, JSON.stringify(localData));
}

// 되돌리기 버튼 클릭 시 작동 함수
function undo(e) {
  // 되돌리기 버튼을 완료 버튼으로 바꿔주기
  const resetBtnImg = e.target;
  const resetBtn = resetBtnImg.parentElement;
  resetBtn.removeChild(resetBtnImg);
  resetBtn.innerText = "✔️";

  // 적용된 스타일 빼주기
  const todoTextElement = resetBtn.parentElement.previousElementSibling;     // todo 내용이 들어 있는 td 태그 부분(parentElement: class가 button인 td, previousElementSibling: td의 바로 위에 있는 형제 class가 todo인 td 부분)
  const todoText = todoTextElement.innerText;
  todoTextElement.classList.remove("completed");

  // localStorage COMPLETED 목록에서도 제외하기
  localItemRemove(COMPLETED, todoText)     // 되돌리기 버튼이 있는 시점에서는 localData의 COMPLETED 부분이 비어 있을 수 없다.
}

// localStorage에서 key의 값을 하나씩 삭제하는 코드가 자꾸 반복돼서 따로 함수로 만들어줌.
function localItemRemove(key, value) {
  const localData = JSON.parse(localStorage.getItem(key));     
  localData.splice(localData.indexOf(value), 1);     // 작업을 해주는 메스드이므로 변수에 담아 사용하면 안됨. (아래처럼 그냥 이후에이후에 localData 변수를 사용하면 splice 작업이 완료된 데이터가 담겨있음.)
  localStorage.setItem(key, JSON.stringify(localData));
}

// 새로고침 시 localStorage에 있는 것들에 대하여 모두 화면에 표시하는 코드
function showLocalItem() {
  const todo_app_todos = JSON.parse(localStorage.getItem(TODOS));
  const todo_app_completed = JSON.parse(localStorage.getItem(COMPLETED));
  if (todo_app_todos !== null) {
    todo_app_todos.forEach(element => paintTodo(element));     // 저장된 todo 목록을 띄움.
  }
  if (todo_app_completed !== null) {
    todo_app_completed.forEach((element) => {     // 완료된 것들은 스타일을 달리 적용해 주어야 함.
      const todoTds = document.querySelectorAll(".todo");
      for (let td of todoTds) {
        if (td.innerText === element) {
          td.classList.add("completed");
          const completeBtn = td.nextElementSibling.children[0];     // td(class todo)의 바로 아래 형제는 td(class button), 그것의 자식은 button(class todo-complete)
          completeBtn.innerText = "";     // 체크 이모지는 없앤다.
          const createImg = document.createElement("img");
          const undoImg = completeBtn.appendChild(createImg);
          undoImg.src = "image/undo.png";
        }
      }
    });
  }
  handleEmptyTable();
}

// 새로 todo를 추가해서 화면에 띄울 때나 새로고침해서 저장된 데이터를 화면에 구현해야 할때 사용할 함수 HTML을 추가함으로써 이루어짐.)
function paintTodo(value) {
  const createTr = document.createElement("tr");
  const tr = todoTable.appendChild(createTr);
  let addToHtml = ''
  if (value.includes("⭐")) {
    value = value.replace("⭐", "");
    addToHtml += `<td class="tag">⭐</td><td class="todo">${value}</td>`
  }
  else {
    addToHtml += `<td class="tag"></td><td class="todo">${value}</td>`
  }
  addToHtml += `
  <td class="button"><button class="todo-complete">✔️</button></td>
  <td class="button"><button class="todo-remove">🗑️</button></td>
  `
  tr.innerHTML = addToHtml;
}

document.addEventListener("click", handlespeechBubble);
todoForm.addEventListener("submit", addTodo);
todoTable.addEventListener("click", handleClickEvent);
window.addEventListener("DOMContentLoaded", showLocalItem);