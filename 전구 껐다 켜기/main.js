// 기본적인 방법!
// 1. 전구 이미지를 클릭(click 이벤트)했을 때 불이 켜질 수 있도록 모든 img 태그에 이벤트 리스너 메서드를 달아준다.
// 콜백 함수는 전구 img에 backgroundcolor를 더해주는 light-on 클래스를 추가하는 함수로, 이름은 handleOnClick으로 함.
const lightBulbs = document.querySelectorAll("img");

// for (let i = 0; i < lightBulbs.length; i++) {
//   lightBulbs[i].addEventListener("click", handleOnClick);
// }

lightBulbs.forEach((elem) => {
  elem.addEventListener("click", handleOnClick);
});

// function handleOnClick(e) {
//   e.preventDefault();
//   // 클릭이 된 전구는 껐다 켰다를 반복할 수 있어야 하고, 다른 전구를 클릭하면 현재 불이 켜져 있는 전구는 꺼지고,
//   // 클릭한 다른 전구의 불이 켜져야 한다.
//   // for (let i = 0; i < lightBulbs.length; i++) {
//   //   if (lightBulbs[i] !== this) {
//   //     lightBulbs[i].classList.remove("light-on");
//   //   } else {
//   //     lightBulbs[i].classList.toggle("light-on");
//   //   }
//   // }
//   lightBulbs.forEach((elem) => {
//     if (elem !== this) {
//       elem.classList.remove("light-on");
//     } else {
//       elem.classList.toggle("light-on");
//     }
//   });
// }

function handleOnClick(e) {
  e.preventDefault();

  // lightBulbs.forEach((elem) => {
  //   if (e.target === elem) {
  //     if (e.target.classList.contains("light-on")) {
  //       e.target.classList.remove("light-on");
  //     } else {
  //       e.target.classList.add("light-on");
  //     }
  //   } else {
  //     elem.classList.remove("light-on");
  //   }
  // });
  lightBulbs.forEach((elem) => {
    if (e.target === elem) {
      elem.classList.toggle("light-on");
    } else {
      elem.classList.remove("light-on");
    }
  });
}
