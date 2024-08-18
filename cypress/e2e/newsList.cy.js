describe('News List', () => {
  beforeEach(() => {
    cy.setupNewsIntercepts();
    cy.visit('http://localhost:3000');
  });

  it('displays the correct header', () => {
    cy.get('.news-list-header').contains("Top TechCrunch Articles")
  })

  it('displays news articles after loading', () => {
    cy.get('.news-list').should('exist')
    cy.get('.news-card').should('have.length', 10);
    cy.get('.news-card').first().contains("Bye-bye bots: Altera's game-playing AI agents get backing from Eric Schmidt");
    cy.get('.news-card').last().contains("Controversial drone company Xtend leans into defense with new $40M round")
  });
});
