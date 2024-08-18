Cypress.Commands.add('setupNewsIntercepts', () => {
    const apiKey = Cypress.env('NEWS_API_KEY');
    const apiUrl = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`;
  
    cy.intercept('GET', apiUrl, {
      statusCode: 200,
      fixture: 'articles.json'
    }).as('fetchNewsData');
  });

