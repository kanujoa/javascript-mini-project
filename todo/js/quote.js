// 랜덤 명언
const quoteUrl = "https://api.adviceslip.com/advice";     // 랜덤 명언 api 주소

const quoteBox = document.querySelector("#quote");

(function quote() {
  fetch(quoteUrl)
  .then(response => response.json())
  .then(json => {     // 여기서 json은 slip 객체 하나로 반환된다. 
    const quote = json.slip.advice;     // json 객체 안의 객체 slip을 선택한 후에 그 안의 키 advice의 값을 가져와야 한다.
    const createH3 = document.createElement("h3");
    const quoteText = quoteBox.appendChild(createH3);
    quoteText.innerText = quote;
    quoteText.style.fontSize = "20px";
    quoteText.style.textAlign = "center";
  });     
})();