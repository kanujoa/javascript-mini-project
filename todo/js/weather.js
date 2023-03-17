// 현재 날씨 API는 OpenWeather API 이용함.
const weatherBox = document.querySelector("#weather");

const API_KEY = "5d41111514daf5c7fd6c582ac20937d6";

(function currentLocation() {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const lat = position.coords.latitude;     // 현재 위치의 위도
      const lng = position.coords.longitude;     // 현재 위치의 경도
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
      fetch(url)     // fetch(url)의 결과는 promise 객체 반환
      .then(response => response.json())     // json 파일을 객체로 변환함.
      .then(json => {      // 객체 출력 (json은 지역, 날씨 등 다양한 정보가 들어있는 객체이므로 활용하면 됨.)
        const createH1 = document.createElement("h1");
        const region = weatherBox.appendChild(createH1);
        region.textContent = `Weather of ${json.name}`;     // 지역 이름
        const createImg = document.createElement("img");
        const weatherIcon = weatherBox.appendChild(createImg);
        weatherIcon.classList.add("weather-icon");
        weatherIcon.src = `http://openweathermap.org/img/w/${json.weather[0].icon}.png`     // 날씨에 해당하는 아이콘 주소 넣기
        const createH1_2 = document.createElement("h1");
        const temp = weatherBox.appendChild(createH1_2);
        temp.style.margin = 0;
        temp.textContent = `${Math.floor(json.main.temp - 273.15)}°C / ${json.weather[0].description}`;     // 그 지역의 온도, 날씨 글자로 나타냄
        console.log(json);
      })
      .catch(error => {
        alert("날씨 정보를 가져올 수 없습니다.😥");
        console.log(error);
      });     // 오류가 발생할 경우 오류를 보여줌.
    }
  );
})();
  