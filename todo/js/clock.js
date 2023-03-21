const clock = document.querySelector("#clock");
const calendar = document.querySelector("#calendar");

// 현재 시각 구하기
currentTime();     // 처음 1초는 시간이 잠깐 안나오므로 함수를 미리 한 번 실행시켜서 화면을 켜자마자 시간이 나오게 만든다.

function currentTime() {
  let newDate = new Date();     // Date 객체의 인스턴스를 함수를 실행할 때마다 새로 생성해 주어야지 시간이 1초마다 계속 업데이트된다.
  let hour = newDate.getHours();
  let min = newDate.getMinutes();
  let second = newDate.getSeconds();
  // 시간 수정
  if (hour < 12) {
    if (hour.toString().length === 1) {
      hour = 0 + hour.toString();
    }
    hour = `AM ${hour}`;
  }
  else if (hour === 12) {
    hour = `PM ${hour}`
  }
  else {
    hour = hour % 12
    if (hour.toString().length === 1) {
      hour = 0 + hour.toString();
    }
    hour = `PM ${hour}`;
  }
  // 분 수정(1자리 수일 때 0 붙여주기)
  if (min.toString().length === 1) {
    min = "0" + min.toString();
  }
  // 초 수정(1자리 수일 때 0 붙여주기)
  if (second.toString().length === 1) {
    second = "0" + second.toString();
  }
  clock.innerText = `${hour}:${min}:${second}`;
}
setInterval(currentTime, 1000);

// 날짜 구하기
today();

function today() {
  let newDate = new Date();     // 하루가 지날 때에도 계속 화면을 그대로 켜두고 있는 경우에 함수 영역 밖에다 new Date()를 적어두었다면 날짜가 바뀌지 않을 수 있기 때문에 역시 계속 업데이트 해준다. 
  const year = newDate.getFullYear();
  const month = newDate.getMonth() + 1;      // getMonth는 0부터 시작한다.
  const date = newDate.getDate();
  const day = newDate.getDay();     // 0부터 6까지 각각 일요일부터 토요일이다.
  const TextofDay = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  calendar.innerText = `${year}.${month}.${date} ${TextofDay[day]}`;
}

setInterval(today, 1000);