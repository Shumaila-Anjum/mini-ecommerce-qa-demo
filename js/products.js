document.addEventListener("DOMContentLoaded", () => {
  fetch("data/products.json")
    .then((res) => res.json())
    .then((products) => {
      const container = document.getElementById("product-container");

      products.forEach((product) => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
          <img src="${product.image}" alt="${product.name}" />
          <h3>${product.name}</h3>
          <p>$${product.price.toFixed(2)}</p>
          <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        container.appendChild(card);
      });
    })
    .catch((error) => console.error("Error loading products:", error));
});

function addToCart(productId) {
  // Get existing cart from localStorage or create a new one
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Check if product already in cart
  const existing = cart.find((item) => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ id: productId, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Product added to cart!");
}

