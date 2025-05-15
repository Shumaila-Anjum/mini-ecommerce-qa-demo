
describe('Cart functionality', () => {

  // Test 1: Cart is empty
  it('Cart is empty initially', () => {
    cy.visit('http://127.0.0.1:5500/cart.html'); // Use your live server URL
    cy.get('#cart-container').should('not.contain', 'Quantity');
  });

  // Test 2: Product gets added and appears in cart
  it('adds a product and verifies it in the cart', () => {
    cy.visit('http://127.0.0.1:5500/index.html');

    // Click on the first "Add to Cart" button
    cy.contains('Add to Cart').first().click();

    // Go to the cart page
    cy.visit('http://127.0.0.1:5500/cart.html');

    // Check that the item appears in the cart
    cy.get('#cart-container').should('contain', 'Quantity: 1');
  });

  // Test 3: Add multiple products
it('adds multiple products and verifies the cart', () => {
  cy.visit('http://127.0.0.1:5500/index.html');

  // Find all "Add to Cart" buttons and click the first two
  cy.contains('Add to Cart').click(); // Clicks the first
  cy.contains('Add to Cart').click(); // Still clicks the first again — NOT what we want

  // Instead, we want all buttons and then filter
  cy.get('button').filter(':contains("Add to Cart")').as('addToCartButtons');

  cy.get('@addToCartButtons').should('have.length.at.least', 2);
  cy.get('@addToCartButtons').eq(0).click();
  cy.get('@addToCartButtons').eq(1).click();

  // Now go to the cart
  cy.visit('http://127.0.0.1:5500/cart.html');

  // Check for at least two cart items
  cy.get('#cart-container').children().should('have.length.at.least', 2);
});

});



