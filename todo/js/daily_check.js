// click이 가리키는 것이 무엇인지를 기억하고 헷갈리지 않는 것이 코드 작성에서 중요한 부분이었다...
// 주의! 다른 js 파일에서의 함수 이름과 겹치면 오류남!

const dailyUl = document.querySelector("#daily-todo");

// toggle을 사용하면 새로고침 했을 때 적용 안되고 사라짐. 따라서 경우를 나누어 코드를 작성해 주었다.
function textDeco(e) {
  const click = e.target;     // 클릭한 부분
  if (click.tagName === "P") {     // 클릭한 부분의 tagName이 P이면
    if (click.classList.contains("daily-complete")) {     // 그 P가 daily-complete class를 포함하고 있다면 
      click.classList.remove("daily-complete");     // daily-complete 스타일 적용 취소
      removeDailyFromLocal(click);
    }
    else {     // P가 daily-complete class를 가지고 있지 않다면
      click.classList.add("daily-complete");     // 그 tag 안의 text에 daily-complete 스타일 적용
      saveDailyToLocal(click);
    }
  }
  else if (click.tagName === "IMG") {     // 클릭한 부분의 tagName이 IMG이면
    const clickSibling = click.previousElementSibling     // 그 태그의 이전 형제 태그인 p에 적용하기 위해 previousElementSibling 사용
    if (clickSibling.classList.contains("daily-complete")) {
      clickSibling.classList.remove("daily-complete");     
      removeDailyFromLocal(clickSibling);
    }
    else {
      clickSibling.classList.add("daily-complete");
      saveDailyToLocal(clickSibling);
    }
  }
}

function saveDailyToLocal(click) {     // 만약 daily-complete 스타일이 적용되어 있는 상태라면 그 text를 localstorage에 저장한다.
  // localData를 localStorage로부터 가져옴.
  let localData;
  if (localStorage.getItem("daily-complete") === null) {
    localData = [];
  }
  else {
    localData = JSON.parse(localStorage.getItem("daily-complete"));
  }
  // localData를 수정(요소 추가 혹은 삭제)하여 다시 localstorage에 다시 저장함.
  if (click.classList.contains("daily-complete")) {     // click 이벤트로 인해 click(p)의 class에 daily-complete가 존재하게 되었다면
    localData.push(click.innerText);
  }
  localStorage.setItem("daily-complete", JSON.stringify(localData));
}

function removeDailyFromLocal(click) {     // 다시 한 번 클릭하여 스타일 적용이 취소되었을 때 localStorage에서 해당 요소를 삭제한다. (두번째 클릭 시 적용되는 것이므로 localStorage에 무언가가 있을 때만 작동할 수밖에 없다.)
  let localData = JSON.parse(localStorage.getItem("daily-complete"));
  localData.splice(localData.indexOf(click.innerText), 1);     // localData 리스트에서 click의 인덱스 번호에 해당하는 요소 (그것이 곧 click)를 삭제 (splice 이용) 
  // + <주의> click은 HTML 한 줄 그대로이므로 innerText를 가져와 index를 찾아야 함! 그냥 click으로 적고 하면 localData에 존재하지 않는 요소이므로 항상 -1 반환!
  localStorage.setItem("daily-complete", JSON.stringify(localData));
}

function getDailyItem() {     // 이미 완료되어 있는 daily todo들 가져와 화면에 deco 칠해진 모습 보여주기 (새로고침 시)  
  if (localStorage.getItem("daily-complete") !== null) {  
    const localData = JSON.parse(localStorage.getItem("daily-complete"));
    for (let element of localData) {
      if (element.includes(" ")) {
        element = element.replace(" ", "-");     // id를 통해 요소를 찾을 것이므로 id 작성 형태로 바꾸어줌.
      }
      const haveToDeco = document.getElementById(element);     // id를 통해 찾은 요소는 li 요소! 
      haveToDeco.firstElementChild.classList.add("daily-complete");     // textdecoration은 그의 첫번째 자식인 p 요소에 해 주어야 함.
    }
  }
}

dailyUl.addEventListener("click", textDeco);     // addEventListener는 특정 element 하나에만 event 등록이 가능하다. 따라서 여러 요소가 들어 있는 querySelectorAll을 연결시켜주는 것은 불가능!
window.addEventListener("DOMContentLoaded", getDailyItem);