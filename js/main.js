 const productCard = document.createElement("div");
 const productCardImg = document.createElement("img");
 const productCard__Bottom = document.createElement("div");
 const productCard__BottomPrice = document.createElement("div");
 const productCard__BottomSell = document.createElement("div");


// window.addEventListener("load", () =>{
//      document.querySelector('.loader').classList.add('loading-hidden')
// })
window.addEventListener("load", () => {
  document.querySelector(".loading").classList.add("loading-hidden");
});

window.addEventListener("scroll", ()=>{
    if(scrollY >= 200){
        document.querySelector('.backtop').classList.add('backtop-show');
    } else{
        document.querySelector('backtop').classList.remove('backtop-show')
    }
})

// const categoryMenuToggle = document.querySelector('header button');
// const categoryMenuDropdown = document.querySelector(".categories")

// categoryMenuToggle.addEventListener("click", () => { 
// categoryMenuDropdown.classList.toggle('dropdown-hidden')
// })

var button = document.getElementById("myButton");
var content = document.getElementById("categoriess");
var clickedOnce = false;

button.addEventListener("click", function() {
  if (!clickedOnce) {
    content.classList.remove("dropdown-hidden"); 
    clickedOnce = true;
  } else {
    content.classList.add("dropdown-hidden"); // contentni yopish
    console.log("G'oyib bo'lsin");
  }
});

// var button = document.getElementById("myButton");
// var content = document.getElementById("content");
// var clickedOnce = false;

// categoryMenuToggle.addEventListener("click", function() {
//   if (!clickedOnce) {
//     // Birinchi marta tugmachani bosganda
//     categoryMenuDropdown.classList.remove("dropdown-hidden"); // contentni ko'rsatish
//     clickedOnce = true;
//   } else {
//     // Ikkinchi marta tugmachani bosganda
//     content.classList.add("hidden"); // contentni yopish
//     console.log("dropdown-hidden");
//   }
// });
