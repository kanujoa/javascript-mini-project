// button을 하나씩 다 가져오지 않고 forEach를 이용해 어떤 버튼이 클릭됐는지를 확인 후 그에 따라 value 값을 변경해 줄 것이다.
const value = document.getElementById("value");
const btn = document.querySelectorAll("button");     // querySelectorAll을 이용하면 <button> tag는 모두 가져올 수 있다. (3개의 <button> tag를 가져옴.)

let count = 0;     // 숫자 세기 초깃값

btn.forEach(          // 3개의 button 요소에 적용할 함수를 forEach() 메서드의 인자로 적어준다. 
  function (btn) 
  { 
    btn.addEventListener("click", function (e) {     // 버튼 클릭이벤트 처리 함수 작성 (클릭 이벤트를 인자로 받는다.)
      const styles = e.currentTarget.classList;     // styles 변수 정의 --> 현재 이벤트(클릭)가 일어난 위치(요소)의 class들을 모두 가져옴 (ex) RESET 버튼 누르면 btn과 reset 클래스 리스트 형태로 가져옴.)
      if (styles.contains("increase"))          // increase 버튼을 클릭한 경우에는 class array에 increase가 포함되어 있음을 이용
      {
        count++;          // 한 번 클릭 시마다 count 숫자 1씩 증가
      }
      else if (styles.contains("decrease"))     // decrease 버튼을 클릭한 경우에는 class array에 decrease가 포함되어 있음을 이용
      {
        count--;     // 한 번 클릭 시마다 1씩 count 숫자 감소
      }
      else           // 위 경우 둘 다 아닐 경우에는 reset밖에 없다. (여기서는 버튼에만 addEventListener를 적용해 주었고, 버튼이 총 3개이므로 else 사용 가능!)
      {  
        count = 0;     // count 0으로 초기화
      }

    // 이제 숫자가 양수인지, 음수인지, 0인지에 따라 색깔을 다르게 해주는 코드를 작성한다.
    if (count > 0)
    {
      value.style.color = "green";
    }
    else if (count < 0) 
    {
      value.style.color = "red";
    }
    else           // count가 0일 때
    {
      value.style.color = "#222";
    }

    // 마지막으로 value값을 count값으로 업데이트 해준다.
    value.textContent = count;
  });
});      

// 함수를 다시 사용할 것이 아니므로 굳이 함수명이 필요하지 않을 경우 --> 익명 함수 사용