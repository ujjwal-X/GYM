const products = [
    { name: "Whey Protein", category: "Suppliments", price: 2000 },
    { name: "Plant Based Protein", category: "supplements", price: 2500 },
    { name: "Pre-Workout", category: "suppliments", price: 799 },
  ];

  function renderProducts(category) {
    const productsContainer = document.getElementById("products");
    productsContainer.innerHTML = "";

    products.forEach(product => {
      if (category === "all" || product.category === category) {
        const productCard = document.createElement("div");
        productCard.innerHTML = `
          <div>
            <h3>${product.name}</h3>
            <p>${product.price}</p>
          </div>
        `;
        productsContainer.appendChild(productCard);
      }
    });
  }

  document.getElementById("categoryFilter").addEventListener("change", function() {
    const selectedCategory = this.value;
    renderProducts(selectedCategory);
  });

  renderProducts("all"); // Initial rendering
