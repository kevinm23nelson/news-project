describe('Search Bar', () => {
  beforeEach(() => {
    cy.setupNewsIntercepts();
    cy.visit('http://localhost:3000');
  });

  it('should display the search bar and be able to search', () => {
    cy.get('.search-bar input').should('exist');
    cy.get('.search-bar input').type('Apple');
    cy.get('.news-card').should('have.length', 1);
    cy.get('.news-card').first().contains("Watch: When did iPads get as expensive as MacBooks?");
    cy.get('.search-bar input').clear();
    cy.get('.search-bar input').type('Applee');
    cy.get('.news-card').should('have.length', 0);
    cy.contains('Your search did not yield any results.').should('be.visible');
  });
});