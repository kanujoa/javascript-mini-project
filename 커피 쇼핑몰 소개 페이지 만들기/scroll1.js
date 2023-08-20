// 네비게이션 바에서 어떤 메뉴를 선택하면 해당 위치로 스크롤해주는 기능 만들기

// 네비게이션 바에 있는 모든 요소에 브라우저가 click 이벤트를 감지하여 handleNavMenuClick 함수를 실행할 수 있도록 수 있도록 addEventListener 메서드 달아주기
document.querySelectorAll("nav ul li a").forEach((elem) => {
  elem.addEventListener("click", handleNavMenuClick);
});

// 클릭된 것의 내용이 있는 위치로 스크롤을 이동해 주는 함수
function handleNavMenuClick(e) {
  e.preventDefault();

  // e.target 대신 this도 가능!
  // target은 클릭한 요소의 href 속성값을 id로 가지는 box로 정의함.
  const target = document.querySelector(e.target.getAttribute("href"));

  // 스크롤을 어떻게 할지 정보를 적는다.
  window.scrollTo({
    // 부드럽게 스크롤을 한다는 의미이다.
    behavior: "smooth",
    // 스크롤이 끝났을 때 화면에 최상단 부분에 target 요소의 윗부분이 위치하게 된다.
    top: target.offsetTop,
  });
}

// top 버튼을 클릭하면 사이트 최상단으로 이동하는 기능 만들기
const topBtn = document.getElementById("top-btn");

topBtn.addEventListener("click", handleTopBtnClick);

function handleTopBtnClick(e) {
  e.preventDefault();

  window.scrollTo({
    behavior: "smooth",
    top: document.body.offsetTop,
  });
}
