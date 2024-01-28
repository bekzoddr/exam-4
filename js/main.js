//  backtop
window.addEventListener("scroll", function () {
  toggleBacktop();
});


let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
     ) {
    backtop.classList.add('backtop-show')
  } else {
    backtop.classList.remove('backtop-show')
  }
}
//  backtop

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


// const categoryMenuToggle = document.querySelector('header button');
// const categoryMenuDropdown = document.querySelector(".categories")

// categoryMenuToggle.addEventListener("click", () => { 
// categoryMenuDropdown.classList.toggle('dropdown-hidden')
// })

function toggleDropdown() {
  var dropdown = document.getElementById("categoriess");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.myButton')) {
    var dropdowns = document.getElementsById("categoriess");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.style.display === "block") {
        openDropdown.style.display = "none";
      }
    }
  }
}

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
