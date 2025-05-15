**Mini E-commerce QA Demo**

This is a simple mini e-commerce web app developed to demonstrate automation skills using **Cypress**. 
The project includes a product listing, cart functionality, and automated test cases for core user actions.

---

**Tech Stack**

- HTML + CSS + JavaScript 
- [Cypress](https://www.cypress.io/) for End-to-End Testing

---

Automated Test Scenarios

1. **Add to Cart**  
   - Validates that clicking "Add to Cart" on a product updates local storage and cart page.

2. **Remove from Cart**  
   - Validates that clicking "Remove" deletes the item from cart and updates the display.

---

Project Structure
/mini-ecommerce-qa-demo
- index.html # Product listing page
- cart.html # Shopping cart page
js/
-  main.js # Handles product display and cart logic
- cart.js # Handles cart rendering and removal
data/
-  products.json # Mock product data
cypress/
- e2e/
- cart.cy.js # Cypress test cases
- README.md


