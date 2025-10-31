const countries = ["日本", "アメリカ", "フランス", "中国", "ブラジル"];
let countryStatus = JSON.parse(localStorage.getItem("countryStatus")) || {};

const panel = document.getElementById("editPanel");

countries.forEach(c => {
  const div = document.createElement("div");
  div.className = "edit-item";
  const label = document.createElement("label");
  label.textContent = c + "：";
  const select = document.createElement("select");
  ["未踏", "経由", "訪問", "宿泊"].forEach(lv => {
    const opt = document.createElement("option");
    opt.value = lv;
    opt.textContent = lv;
    if (countryStatus[c] === lv) opt.selected = true;
    select.appendChild(opt);
  });
  select.addEventListener("change", () => {
    countryStatus[c] = select.value;
  });
  div.appendChild(label);
  div.appendChild(select);
  panel.appendChild(div);
});

document.getElementById("saveBtn").addEventListener("click", () => {
  localStorage.setItem("countryStatus", JSON.stringify(countryStatus));
  alert("保存しました！");
  location.href = "world.html";
});
