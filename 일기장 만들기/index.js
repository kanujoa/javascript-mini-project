// 모달 창의 HTML (<div class="modal"></div> 는 container에 추가하기 위해 나중에 생성할 것임.)
const modalHTML =
  '<div id="closeBtn"><img src="./img/closeBtn.png" id="closeBtn" /></div><div id="selectPhotoWindow"><div id="modal-header">새 일기 올리기</div><div id="selectPhotoSection"><img src="./img/galleryImg.png" /><label for="selectPhoto">컴퓨터에서 선택</label><input type="file" name="file" id="selectPhoto" /></div></div>';

// 사진 선택 후 글쓰기로 넘어갔을 때의 HTML
const writePostHTML =
  '<div id="write-post"><div id="selected-photo"><img /></div><textarea spellcheck="false"></textarea></div>';

// 일기 추가 버튼
const addPostBtn = document.querySelector("#postAddBtn");
// 전체 요소를 담는 container
const container = document.querySelector(".container");

// 일기 추가 버튼을 클릭하면 handleAddPostBtnClick 함수가 실행되도록 하기
addPostBtn.addEventListener("click", handleAddPostBtnClick);

// handleAddPostBtnClick 함수는 modalHTML을 container에 삽입하고, modal 창에서 닫기 버튼을 눌렀을 때에는 그 HTML을 제거함.
function handleAddPostBtnClick(e) {
  e.preventDefault();

  const divEl = document.createElement("div");
  divEl.setAttribute("class", "modal");
  divEl.innerHTML = modalHTML;

  container.prepend(divEl);

  const closeBtn = document.querySelector("#closeBtn");
  closeBtn.addEventListener("click", handleCloseBtnClick);

  // closeBtn에 대한 콜백 함수를 handleAddPostBtnClick 함수 바깥에서 정의해서 사용하면 modal 변수에 null이 담긴다. modal 창이 만들어지지 않은 상태에서 document.querySelector(".modal")
  // 를 해버리니까 없는 노드가 된 것이다. 따라서 handleAddPost 함수 내에서 정의해야 한다.
  function handleCloseBtnClick(e) {
    e.preventDefault();

    const modal = document.querySelector(".modal");
    container.removeChild(modal);
  }

  // input 가져오기
  const fileInput = document.querySelector("#selectPhoto");

  // 컴퓨터에서 선택을 눌렀을 때 작동할 함수
  fileInput.onchange = () => {
    // 새 FileReader 객체 생성
    const fileReader = new FileReader();
    // 선택한 사진 정보 가져오기
    const selectedPhoto = fileInput.files[0];

    // 파일을 읽어서 URL의 형식으로 변환하기
    fileReader.readAsDataURL(selectedPhoto);

    // 파일 읽기가 성공하면 아래 코드를 실행하여 이미지를 화면에 보여주기 (모달 창 안에 사진과 textarea가 보여져야 하므로 구조와 너비 같은게 좀 바뀌어야 함.)
    fileReader.onload = () => {
      const selectPhotoWindow = document.querySelector("#selectPhotoWindow");
      // 모달 창의 2번째 자식인 selectPhotoSection을 아예 삭제, style을 width: 1200px로 변경
      const selectPhotoSection = document.querySelector("#selectPhotoSection");
      selectPhotoWindow.removeChild(selectPhotoSection);
      selectPhotoWindow.style.width = "1200px";
      // 그리고 selectPhotoSection을 다시 생성해 위에 writePostHTML 추가하기
      const divEl = document.createElement("div");
      divEl.id = "write-post-box";
      divEl.innerHTML = writePostHTML;
      // selectPhotoWindow에 마지막 자식으로 추가해 준다.
      selectPhotoWindow.appendChild(divEl);
      // 이제 좀 바뀌어서 다시 생성된 selectPhotoSection에 img src를 등록해 준다.
      const writePostImg = document.querySelector(
        "#write-post #selected-photo img"
      );
      console.log(writePostImg);
      writePostImg.src = fileReader.result;

      // 업로드 버튼 만들어서 modal-header의 자식으로 추가하기
      const btnEl = document.createElement("button");
      btnEl.innerText = "업로드";
      btnEl.classList.add("uploadBtn");
      const modalHeader = document.querySelector("#modal-header");
      modalHeader.appendChild(btnEl);
    };
  };
}
