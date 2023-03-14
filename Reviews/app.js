// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

const author = document.querySelector("#author");
const job = document.querySelector("#job");
const img = document.querySelector("img");
const info = document.querySelector("#info");

const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const randomBtn = document.querySelector(".random-btn");

let curIdx = 0     // 현재 리뷰 내용의 객체 index를 초기화 (새로고침 시 항상 첫 객체가 해당되어야 하므로 0으로 초기화)

// nextBtn을 눌렀을 때 실행할 함수
function next() {
  curIdx += 1;     // 다음 정보로 넘어가야 하므로 현재 index는 1이 더해져야 함.
  if (curIdx === reviews.length) {     // 마지막 정보일 경우 next 버튼을 누르면 처음 정보로 되돌아가야 한다. (리스트에 정보가 추가될 것도 고려)
    curIdx = 0;
  }
  paintInfo(curIdx);
}

// prevBtn을 눌렀을 때 실행할 함수
function prev() {
  curIdx -= 1;     // 이전 정보로 넘어가야 하므로 현재 index는 1이 감소해야 함.
  if (curIdx === -1) {     // 현재 index가 -1이 되면
    curIdx = reviews.length - 1;     // 현재 index는 마지막 index로 변경(마지막 정보로 변경)
  }
  paintInfo(curIdx);
}

// randomBtn을 눌렀을 때 실행할 함수
function random() {
  curIdx = Math.floor(Math.random() * reviews.length);     // 현재 index는 review 리스트의 가능한 index 중 하나 랜덤으로 고르기
  paintInfo(curIdx); 
}

// 화면에 그려지는 정보 변경하는 함수
function paintInfo(curIdx) {
  let cur = reviews[curIdx];
  author.textContent = cur.name;
  job.textContent = cur.job;
  img.src = cur.img;
  info.textContent = cur.text;
}

nextBtn.addEventListener("click", next);
prevBtn.addEventListener("click", prev);
randomBtn.addEventListener("click", random);