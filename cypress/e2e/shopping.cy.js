it('removes an item from the cart', () => {
  cy.visit('http://127.0.0.1:5500');

  // Add an item first
  cy.contains('Add to Cart').first().click();

  // Go to the cart page
  cy.visit('http://127.0.0.1:5500/cart.html');

  // Check item is in cart
  cy.get('button.remove-item').should('exist');

  // Click remove
  cy.get('button.remove-item').click();

  // Confirm it's removed
  cy.contains('Your cart is empty.').should('be.visible');
});
