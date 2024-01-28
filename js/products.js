const productsRow = document.querySelector(".products-row");
const searchInput = document.querySelector(".search__input");
const productsQuantity = document.querySelector(".products-quantity");
const pagination = document.querySelector(".pagination");
const priceSortSelect = document.querySelector(".price-sort");

let search = "";

let activePage = 1;

let priceSort = "initial";

function getProductCard({ name, price, description, images }) {
  return `
    <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
      <div class="card">
        <button class="like-btn"></button>
        <img src=${images[0]} class="card-img-top" alt=${name} />
        <div class="card-body">
          <h3 class="card-title">${name}</h3>
          <h5 class="card-title">${price}</h5>
          <p class="card-text">
            ${description}
          </p>
          <div class="stars">
                  <img src="../assets/images/full.star.svg" alt="icon" />
                  <img src="../assets/images/full.star.svg" alt="icon" />
                  <img src="../assets/images/full.star.svg" alt="icon" />
                  <img src="../assets/images/star.svg" alt="icon" />
                  <img src="../assets/images/star.svg" alt="icon" />
                 </div>
                 <button class="cart-button">
                 <span class="add-to-cart">Add to cart</span>
                 <span class="added">Added</span>
                 <i class="fas fa-shopping-cart"></i>
                <i class="fas fa-box"></i>
</button>     
   </div>
      </div>
    </div>
  `;
}

// productsRow.innerHTML = getProductCard();
// productsRow.textContent = getProductCard();

function getProducts() {
  let results = products.filter((pr) => pr.name.toLowerCase().includes(search));

  let sortResults;

  if (priceSort === "asc") {
    sortResults = results.toSorted((a, b) => a.price - b.price);
  } else if (priceSort === "desc") {
    sortResults = results.toSorted((a, b) => b.price - a.price);
  } else {
    sortResults = results;
  }

  let pages = Math.ceil(results.length / LIMIT);

  if (pages > 1) {
    pagination.innerHTML = `<li class="page-item ${
      activePage === 1 ? "disabled" : ""
    }">
      <button onclick="getPage('-')" class="page-link">Previous</button>
    </li>`;

    // pagination.innerHTML += `<li class="page-item ${
    //   1 === activePage ? "active" : ""
    // }"><button class="page-link" onclick="getPage(${1})">1</button></li>`;

    // activePage !== 1 &&
    //   activePage !== pages &&
    //   (pagination.innerHTML += `<li class="page-item active"><button class="page-link" onclick="getPage(${activePage})">${activePage}</button></li>`);

    for (let i = 1; i <= pages; i++) {
      pagination.innerHTML += `<li class="page-item ${
        i === activePage ? "active" : ""
      }"><button class="page-link" onclick="getPage(${i})">${i}</button></li>`;
    }

    // pagination.innerHTML += `<li class="page-item ${
    //   pages === activePage ? "active" : ""
    // }"><button class="page-link" onclick="getPage(${pages})">${pages}</button></li>`;

    pagination.innerHTML += `<li class="page-item ${
      activePage === pages ? "disabled" : ""
    }">
      <button onclick="getPage('+')" class="page-link">Next</button>
    </li>`;
  } else {
    pagination.innerHTML = "";
  }

  productsRow.innerHTML = "";

  productsQuantity.textContent = results.length;

  let start = (activePage - 1) * LIMIT;
  let end = activePage * LIMIT;

  sortResults.slice(start, end).map((product) => {
    productsRow.innerHTML += getProductCard(product);
  });
}

function getPage(page) {
  if (page === "+") {
    activePage++;
  } else if (page === "-") {
    activePage--;
  } else {
    activePage = page;
  }
  getProducts();
}

getProducts();

searchInput.addEventListener("keyup", function () {
  search = this.value.trim().toLowerCase();
  activePage = 1;
  getProducts();
});

// searchInput.addEventListener("keydown", function (e) {
//   console.log(e.key);
// });

// searchInput.addEventListener("input", function () {
//   console.log(this.value);
// });

priceSortSelect.addEventListener("change", function () {
  priceSort = this.value;
  getProducts();
});
const cartButtons = document.querySelectorAll('.cart-button');

cartButtons.forEach(button => {
  button.addEventListener('click', cartClick);
});

function cartClick() {
  let button = this;
  button.classList.add('clicked');
}

