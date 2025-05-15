document.addEventListener("DOMContentLoaded", () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const summaryDiv = document.getElementById("order-summary");

  if (cart.length === 0) {
    summaryDiv.innerHTML = "<p>Your cart is empty.</p>";
    document.getElementById("checkout-form").style.display = "none";
    return;
  }

  fetch("data/products.json")
    .then((res) => res.json())
    .then((products) => {
      let total = 0;
      summaryDiv.innerHTML = "<h2>Order Summary</h2>";
      
      cart.forEach((item) => {
        const product = products.find(p => p.id === item.id);
        const itemTotal = product.price * item.quantity;
        total += itemTotal;

        summaryDiv.innerHTML += `
          <p>${product.name} × ${item.quantity} — $${itemTotal.toFixed(2)}</p>
        `;
      });

      summaryDiv.innerHTML += `<h3>Total: $${total.toFixed(2)}</h3>`;
    });

  // Handle form submission
  document.getElementById("checkout-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Normally you'd send this to a backend
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;

    console.log("Order Placed By:", { name, email, address });

    localStorage.removeItem("cart");
    document.getElementById("checkout-form").style.display = "none";
    document.getElementById("order-summary").style.display = "none";
    document.getElementById("success-message").style.display = "block";
  });
});
