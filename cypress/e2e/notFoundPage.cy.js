describe('404 Not Found Page', () => {
  beforeEach(() => {
    cy.setupNewsIntercepts();
    cy.visit('http://localhost:3000/nonsense');
  });

  it('should display a 404 error message and provide a way to redirect back to home', () => {
    cy.get('.not-found-title').should('contain', '404 - Page Not Found');
    cy.get('.not-found-button').should('exist');
    cy.get('.not-found-button').click();
    cy.url().should('eq', 'http://localhost:3000/');
    cy.get('.news-list').should('exist')
    cy.get('.news-card').should('have.length', 10);
  });
});
