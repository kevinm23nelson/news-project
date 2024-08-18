describe('NewsList', () => {
  beforeEach(() => {
    cy.setupNewsIntercepts();
    cy.visit('http://localhost:3000');
  });

  it('displays the correct header', () => {
    cy.get('.news-list-header').contains("Top TechCrunch Articles")
  })

  it('should navigate to the article detail page when clicking on a news card', () => {
    cy.get('.news-card').first().click();
    cy.url().should('include', '/article/0');
    cy.contains("Bye-bye bots: Altera's game-playing AI agents get backing from Eric Schmidt").should('be.visible');
    cy.contains("Lauren Forristal").should('be.visible');
    cy.contains("Autonomous, AI-based players are coming to a gaming experience near you, and a new startup, Altera, is joining the fray to build this new guard of AI agents.").should('be.visible')
  });

  it('should navigate back to the News List', () => {
    cy.get('.news-card').first().click();
    cy.get('.news-details-back-button').should('exist');
    cy.get('.news-details-back-button').click();
    cy.url('should.be', 'localhost:3000')
  })
});
