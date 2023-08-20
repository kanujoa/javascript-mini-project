// 상단 이미지 슬라이더 구현하기
// 무한으로 3초 간격으로 이미지가 왼쪽으로 넘어가면서 다음 이미지가 나오도록 해야 한다.
// #slide 자체를 width의 -100%만큼 margin-left를 주면 이미지가 왼쪽으로 넘어가서 사라지게 됨.

// slider container 가져오기
const slider = document.getElementById("slider");

// 현재 슬라이드의 번째
let currentSlide = 0;

// 5초 간격으로 반복할 것이므로 setInterval 함수 작성
setInterval(() => {
  let from = -(1707 * currentSlide);
  let to = from - 1707;

  // slider에서 애니메이션이 일어날 수 있도록 적용
  slider.animate(
    {
      marginLeft: [from + "px", to + "px"],
    },
    {
      duration: 1000,
      easing: "ease",
      iterations: 1,
      fill: "both",
    }
  );

  // 애니메이션이 끝나면 currentSlide 번호 1 증가
  currentSlide++;

  // 슬라이드 번호가 마지막이면 첫 번째 슬라이드로 다시 돌아감.
  if (currentSlide === slider.children.length - 1) {
    currentSlide = 0;
  }
}, 5000);

// 참고
