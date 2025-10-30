// 国ごとの訪問レベルを記録するオブジェクト
let countryStatus = {};

// 点数ルール
const scores = {
  未踏: 0,
  経由: 1,
  訪問: 2,
  宿泊: 3
};

// ダミーの国リスト（あとで世界地図に置き換え）
const countries = ["日本", "アメリカ", "フランス", "中国", "ブラジル"];

const map = document.getElementById("map");
const totalScoreDisplay = document.getElementById("totalScore");

// 国ボタンを生成
countries.forEach(country => {
  const btn = document.createElement("button");
  btn.textContent = country + "：未踏";
  btn.style.margin = "5px";
  btn.dataset.level = "未踏";
  btn.addEventListener("click", () => changeStatus(btn, country));
  map.appendChild(btn);
});

// 訪問レベルを順番に切り替える関数
function changeStatus(btn, country) {
  const levels = ["未踏", "経由", "訪問", "宿泊"];
  let currentIndex = levels.indexOf(btn.dataset.level);
  let nextIndex = (currentIndex + 1) % levels.length;
  btn.dataset.level = levels[nextIndex];
  btn.textContent = `${country}：${levels[nextIndex]}`;
  
  // パステル系の色分け
  const colors = {
    "未踏": "#f0f0f0",
    "経由": "#b3e5fc",
    "訪問": "#81c784",
    "宿泊": "#f48fb1"
  };
  btn.style.backgroundColor = colors[levels[nextIndex]];

  countryStatus[country] = levels[nextIndex];
  updateScore();
}

// 総スコアを計算
function updateScore() {
  let total = 0;
  for (const c in countryStatus) {
    total += scores[countryStatus[c]];
  }
  totalScoreDisplay.textContent = total;
}
