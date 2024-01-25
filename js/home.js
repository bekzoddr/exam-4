const tabButtons = document.querySelectorAll(".tab-buttons button");
const tabContents = document.querySelectorAll(".tab-content");

let active = 0;

function getTabContents() {
  tabContents.forEach((el, i) => {
    if (i == active) {
      el.style.display = "block";
      tabButtons[i].classList.add("active-tab");
    } else {
      el.style.display = "none";
      tabButtons[i].classList.remove("active-tab");
    }
  });
}

getTabContents();

tabButtons.forEach((el, i) => {
  el.addEventListener("click", function () {
    active = i;
    getTabContents();
  });
});
document.querySelector(".tab-buttons button").addEventListener("click", function() {
  this.classList.toggle("active");
});
