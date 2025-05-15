document.addEventListener("DOMContentLoaded", () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const container = document.getElementById("cart-container");

  // Handle empty cart
  if (cart.length === 0) {
    container.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  // Attach remove button click handler
  container.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-item")) {
      const index = e.target.getAttribute("data-index");
      cart.splice(index, 1); // Remove item
      localStorage.setItem("cart", JSON.stringify(cart)); // Save updated cart
      location.reload(); // Refresh view
    }
  });

  // Fetch product data and display cart items
  fetch("data/products.json")
    .then((res) => res.json())
    .then((products) => {
      let total = 0;
      cart.forEach((cartItem) => {
        const product = products.find((p) => p.id === cartItem.id);
        if (!product) return; // safety check

        const itemTotal = product.price * cartItem.quantity;
        total += itemTotal;

        const div = document.createElement("div");
        div.className = "product-card";
        div.innerHTML = `
          <img src="${product.image}" alt="${product.name}" />
          <h3>${product.name}</h3>
          <p>Price: $${product.price.toFixed(2)}</p>
          <p>Quantity: ${cartItem.quantity}</p>
          <p>Total: $${itemTotal.toFixed(2)}</p>
           <p><button class="remove-item">Remove</button></p>
        `;
        container.appendChild(div);
      });

      // Show cart total and checkout button
      const totalDiv = document.createElement("h2");
      totalDiv.textContent = `Cart Total: $${total.toFixed(2)}`;
      container.appendChild(totalDiv);

      const checkoutBtn = document.createElement("a");
      checkoutBtn.href = "checkout.html";
      checkoutBtn.textContent = "Proceed to Checkout";
      checkoutBtn.style.display = "block";
      checkoutBtn.style.marginTop = "20px";
      container.appendChild(checkoutBtn);
    });
});
