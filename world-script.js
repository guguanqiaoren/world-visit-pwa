const mapDiv = document.getElementById("map");
fetch("world-map.svg")
  .then(res => res.text())
  .then(svg => {
    mapDiv.innerHTML = svg;
    updateMapColors();
  });

const scores = { "未踏": 0, "経由": 1, "訪問": 2, "宿泊": 3 };
const colors = { "未踏": "#f0f0f0", "経由": "#b3e5fc", "訪問": "#81c784", "宿泊": "#f48fb1" };
const countryIdMap = { "日本": "JP", "アメリカ": "US", "フランス": "FR", "中国": "CN", "ブラジル": "BR" };

function updateMapColors() {
  const data = JSON.parse(localStorage.getItem("countryStatus")) || {};
  let total = 0;
  for (const [country, level] of Object.entries(data)) {
    const id = countryIdMap[country];
    const el = document.getElementById(id);
    if (el) el.style.fill = colors[level];
    total += scores[level];
  }
  document.getElementById("totalScore").textContent = total;
}
