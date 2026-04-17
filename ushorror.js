// 初期表示：Texasだけ出す
window.onload = function () {
  document.getElementById("texas").classList.add("active");
};

// 地域切り替え
function showRegion(regionId) {
  const regions = document.querySelectorAll(".region");

  regions.forEach(region => {
    region.classList.remove("active");
  });

  const target = document.getElementById(regionId);
  if (target) {
    target.classList.add("active");
  }
}