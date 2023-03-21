// 랜덤 배경화면색
const color = ["white", "rgb(226,255,225,0.2)", "rgb(247,231,231,0.2)", "rgb(252,255,231,0.2)", "rgb(243,238,255,0.2)"];
const input = document.querySelectorAll("input");
const button = document.querySelectorAll("button");

function selectColor() {
  const randomcolor = color[Math.floor(Math.random() * color.length)];
  document.body.style.backgroundColor = randomcolor;
  for (let i of input) {
    i.style.backgroundColor = randomcolor;
  }
  for (let b of button) {
    b.style.backgroundColor = randomcolor;
  }
}

window.addEventListener("DOMContentLoaded", selectColor);