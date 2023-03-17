const searchForm = document.querySelector("#search");
const searchInput = document.querySelector("#search input");

function pageMove(e) {
  e.preventDefault();     // 입력 완료 후 버튼을 누르거나 enter를 눌렀을 시 페이지가 새로고침되는 것을 막아줌.
  const searchWord = searchInput.value;     // 검색어
  // 새 창에서 해당 검색어 검색 결과를 보여줌. (네이버로)
  window.open(`https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=${searchWord}`); 
  searchInput.value = "";     // 검색창 값 초기화
}

searchForm.addEventListener("submit", pageMove);