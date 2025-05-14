document.addEventListener("DOMContentLoaded", () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const container = document.getElementById("cart-container");

  if (cart.length === 0) {
    container.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  fetch("data/products.json")
    .then((res) => res.json())
    .then((products) => {
      let total = 0;
      cart.forEach((cartItem) => {
        const product = products.find((p) => p.id === cartItem.id);
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
        `;
        container.appendChild(div);
      });

      const totalDiv = document.createElement("h2");
      totalDiv.textContent = `Cart Total: $${total.toFixed(2)}`;
      container.appendChild(totalDiv);
    });
});
