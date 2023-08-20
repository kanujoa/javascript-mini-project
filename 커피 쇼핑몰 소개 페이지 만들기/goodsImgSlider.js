// 오른쪽 혹은 왼쪽 화살표를 클릭하면 현재 이미지가 부드럽게 사라졌다가 새 이미지가 부드럽게 나타나는 효과를 적용해 볼 것이다.
const firstGoodsHTML =
  '<div class="not-visible"><p>캘리포니아 커피</p><br /><p>￦15000</p></div><img src="./img/california-coffee.webp" />';
const secondGoodsHTML =
  '<div class="not-visible"><p>과테말라 커피</p><br /><p>￦10000</p></div><img src="./img/guatemala-coffee.webp" />';
const thirdGoodsHTML =
  '<div class="not-visible"><p>케냐 커피</p><br /><p>￦20000</p></div><img src="./img/kenya-coffee.webp" />';
const fourthGoodsHTML =
  '<div class="not-visible"><p>인도네시아 커피</p><br /><p>￦12000</p></div><img src="./img/indonesia-coffee.webp" />';

const ImgArray = [
  firstGoodsHTML,
  secondGoodsHTML,
  thirdGoodsHTML,
  fourthGoodsHTML,
];

// 현재 이미지 번호
let currentImg = 0;

// 인기 상품 이미지를 담는 박스 가져오기
const goodsPhoto = document.getElementById("goods-photo");
// 오른쪽 화살표
const rightArrow = document.querySelector("#right-arrow");
// 왼쪽 화살표
const leftArrow = document.querySelector("#left-arrow");

rightArrow.addEventListener("click", handleRightArrowClick);
leftArrow.addEventListener("click", handleLeftArrowClick);

function handleRightArrowClick(e) {
  e.preventDefault();

  // 현재 이미지 부드럽게 안보이게 하기
  goodsPhoto.animate(
    {
      opacity: [1, 0],
    },
    {
      duration: 500,
      ease: "ease",
      iterations: 1,
      fill: "both",
    }
  );

  // 현재 이미지 사라지는 애니메이션 적용 후 이미지를 바꾸어야 하므로 그 코드 작성
  // 현재 마지막 이미지라면 첫번째 이미지로 돌아가야 하고, 그게 아니라면 다음 이미지를 선택하면 된다.
  if (currentImg === ImgArray.length - 1) {
    currentImg = 0;
  } else {
    currentImg++;
  }

  // 현재 goods-photo에 있는 상품 사진을 지우기 위해 goods-photo의 모든 자식 요소들을 삭제시켜 준다.
  while (goodsPhoto.childNodes.length) {
    goodsPhoto.removeChild(goodsPhoto.firstChild);
  }

  // 다음 이미지가 부드럽게 나타나게 만들기 위해 다시 animate를 적용해 준다.
  goodsPhoto.animate(
    {
      opacity: [0, 1],
    },
    {
      duration: 500,
      easing: "ease",
      iterations: 1,
      fill: "both",
    }
  );

  // 그 다음 사진을 띄우기 위해 HTML을 넣어주면 된다.
  goodsPhoto.innerHTML = ImgArray[currentImg];
}

// 왼쪽도 같은 원리
function handleLeftArrowClick(e) {
  e.preventDefault();

  // 현재 이미지 부드럽게 안보이게 하기
  goodsPhoto.animate(
    {
      opacity: [1, 0],
    },
    {
      duration: 500,
      ease: "ease",
      iterations: 1,
      fill: "both",
    }
  );

  // 현재 이미지 사라지는 애니메이션 적용 후 이미지를 바꾸어야 하므로 그 코드 작성
  // 현재 첫번째 이미지라면 마지막 이미지로 돌아가야 하고, 그게 아니라면 이전 이미지를 선택하면 된다.
  if (currentImg === 0) {
    currentImg = ImgArray.length - 1;
  } else {
    currentImg--;
  }

  // 현재 goods-photo에 있는 상품 사진을 지우기 위해 goods-photo의 모든 자식 요소들을 삭제시켜 준다.
  while (goodsPhoto.childNodes.length) {
    goodsPhoto.removeChild(goodsPhoto.firstChild);
  }

  // 다음 이미지가 부드럽게 나타나게 만들기 위해 다시 animate를 적용해 준다.
  goodsPhoto.animate(
    {
      opacity: [0, 1],
    },
    {
      duration: 500,
      easing: "ease",
      iterations: 1,
      fill: "both",
    }
  );

  // 이전 사진을 띄우기 위해 HTML을 넣어주면 된다.
  goodsPhoto.innerHTML = ImgArray[currentImg];
}
