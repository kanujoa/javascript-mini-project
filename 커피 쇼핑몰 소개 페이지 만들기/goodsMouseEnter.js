// 인기 상품 사진에 마우스를 올렸을 때 그 사진 위에 상품에 대한 간략한 정보가 나오게끔 만들어 보기
const goodsPhotoBox = document.querySelector("#goods-photo");

// 이벤트 이름 소문자로 적어야 하는 것 조심^^
goodsPhotoBox.addEventListener("mouseenter", handleMouseEnter);
goodsPhotoBox.addEventListener("mouseleave", handleMouseLeave);

function handleMouseEnter(e) {
  e.preventDefault();
  // 내가 어느 요소를 가져왔는지, 클래스 적용 대상인 요소는 무엇인지를 정확히 파악해야 한다.
  const goodsInfo = e.target.children[0];
  goodsInfo.classList.remove("not-visible");
  goodsInfo.classList.add("goods-info");
  const goodsPhoto = e.target.children[1];
  goodsPhoto.style.bottom = "0px";
}

function handleMouseLeave(e) {
  e.preventDefault();
  const goodsInfo = e.target.children[0];
  goodsInfo.classList.remove("goods-info");
  goodsInfo.classList.add("not-visible");
  const goodsPhoto = e.target.children[1];
  goodsPhoto.style.bottom = "16px";
}

// 마우스를 사진 부분에 오버했을 때 깜박이면서 나타나는 현상을 없애려면, 사진 자체가 아닌 부모 요소(#goods-photo-container) 자체에 이벤트 리스너를 달아 주어야 한다.
