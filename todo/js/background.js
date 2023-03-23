// 랜덤 배경화면색
const color = ["white", "rgb(226,255,225,0.5)", "rgb(247,231,231,0.5)", "rgb(252,255,231,0.5)", "rgb(243,238,255,0.5)"];
const input = document.querySelectorAll("input");
const button = document.querySelectorAll("button");

function selectColor() {
  const randomcolor = color[Math.floor(Math.random() * color.length)];
  document.body.style.backgroundColor = randomcolor;
}

window.addEventListener("DOMContentLoaded", selectColor);