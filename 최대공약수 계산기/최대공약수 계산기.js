const firstInput = document.querySelector("#first-input");
const secondInput = document.querySelector("#second-input");
const calButton = document.querySelector("button");
const result = document.querySelector("#result");


function checkvalue() {
  const firstValue = parseFloat(firstInput.value);     // 이것과 아래 코드를 함수 안에 넣어주어야 하는 이유는 위에서 미리 작성하고 시작하면 아무것도 작성하지 않은 상태의
  const secondValue = parseFloat(secondInput.value);     // 값이 적용되기 때문이다. 그리고 const 예약어를 사용했기 때문에 블록 스코프 내에서만 사용할 수 있다.
  if (firstValue <= 0 || firstValue !== parseInt(firstInput.value) || secondValue <= 0 || secondValue !== parseInt(secondInput.value)) {
    const returnValue = "사용자 입력 오류"
    return returnValue;
  } else {
    const returnValue = "사용자 입력 통과";
    return returnValue;
  }
}

function getGCD() {
  const firstValue = parseFloat(firstInput.value);     // but var를 사용하여 위쪽에 적어주었다면 전역변수로 사용 가능하다.
  const secondValue = parseFloat(secondInput.value);
  const smaller = (firstValue > secondValue) ? secondValue : firstValue;     // 조건 연산자 사용
  const bigger = (firstValue > secondValue) ? firstValue : secondValue;     // 조건 연산자 사용
  for (let i = smaller; i >= 1; i--) {
    if (smaller % i == 0 && bigger % i == 0) {
      GCD = i;     // 함수 안에서 변수를 선언할 때 var을 적어주지 않으면 자동으로 전역변수가 된다. (var을 적어주면 함수 안에서만 사용 가능한 지역변수가 된다.)
      break;
    }
  }
}

function showResult() {
  result.innerText = GCD;
}

function answer() {     // 여기에 함수를 그냥 일렬로 다 적어주면 하나하나씩 단계를 거쳐 실행하는 것이 아닌 조건을 만족하지 않아도 일단 모든 함수를 다 실행하고 보기 때문에 조건문을 적어주었다.
  const returnValue = checkvalue();     // checkValue 함수의 eturn 값을 받아오기 위해 변수를 생성해 주었다.
  if (returnValue === "사용자 입력 오류") {
    alert("1 이상의 자연수를 입력해 주세요.");
    firstInput.value = "";
    secondInput.value = "";    
    result.innerText = "";
  } else if (returnValue === "사용자 입력 통과") {
    getGCD();
    showResult();
  }  
}

calButton.addEventListener("click", answer)

const resetButton = document.querySelector("#reset");

resetButton.onclick = () => {     
  firstInput.value = "";     
  secondInput.value = "";   
  result.innerText = "";   
}