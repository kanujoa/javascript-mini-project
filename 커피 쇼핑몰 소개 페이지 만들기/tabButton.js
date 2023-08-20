// 구독 섹션의 tab 버튼 기능 구현하기
// innerHTML을 사용해도 되지만 createElement를 사용해 구현해 보겠다.

{
  /* <p>⭐ 신규 회원 특가 ⭐</p>
          <p>
            매월 <span style="text-decoration: line-through">\50000</span> →
            \30000
          </p> -->
          <!-- <p>🏖️ Summer Event 🏖️</p>
          <p style="text-align: center">
            피서지에서 Coffee Club 제품 인증샷을 찍어주신 분께<br /><br />
            🎫15% 할인쿠폰🎫 제공!
          </p>  */
}

// 브라우저가 탭 버튼 클릭을 감지할 수 있도록 addEventListener 메서드 달기
// 탭 메뉴 모두 가져오기
const tabMenu = document.querySelectorAll("#tab-menu .tab");
tabMenu.forEach((menu) => {
  menu.addEventListener("click", handleTabClick);
});

// 탭에 대한 내용을 보여주는 박스
const tabContentBox = document.getElementById("box");

// 탭 버튼이 클릭되었을 때 작동할 함수
function handleTabClick(e) {
  e.preventDefault();

  // 일단 박스에 보여지는 모든 것들을 지워야 한다.
  while (tabContentBox.childNodes.length) {
    tabContentBox.removeChild(tabContentBox.firstChild);
  }

  // 구독하기 탭이 클릭되었다면 p 태그와 button 태그를 하나씩 생성해야 한다.
  // 그렇지 않다면 p 태그를 2개 생성하고, 각각 안에 들어갈 text를 작성해 주면 된다.
  // id와 class도 필요할 경우 추가시켜 주면 된다.
  if (e.target.innerText === "구독하기") {
    const newP = document.createElement("p");
    const newBtn = document.createElement("button");

    newP.innerText = "지금 바로 COFFEE CLUB의 커피를 구독해 보세요!";
    newBtn.innerText = "구독하기";

    tabContentBox.appendChild(newP);
    tabContentBox.appendChild(newBtn);
  } else {
    if (e.target.innerText === "신규 회원 특가") {
      tabContentBox.innerHTML =
        '<p>⭐ 신규 회원 특가 ⭐</p><p>매월 <span style="text-decoration: line-through">₩50000</span> → ₩30000</p>';
    } else if (e.target.innerText === "Summer Event") {
      const newP1 = document.createElement("p");
      const newP2 = document.createElement("p");

      newP1.innerText = "🏖️ Summer Event 🏖️";
      newP2.innerHTML =
        "피서지에서 Coffee Club 제품 인증샷을 찍어주신 분께<br /><br />🎫15% 할인쿠폰🎫 제공!";
      newP2.style.textAlign = "center";

      tabContentBox.appendChild(newP1);
      tabContentBox.appendChild(newP2);
    }
  }
}
