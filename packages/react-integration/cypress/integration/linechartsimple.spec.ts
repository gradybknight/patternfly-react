describe('Line Chart Multicolor Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#line-chart-simple-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/line-chart-simple-demo-nav-link');
  });

  it('Verify line chart', () => {
    cy.get('.pf-c-chart').should('exist');
  });

  it('Verify legend string', () => {
    cy.get('text').contains('Cats');
  });

  it('Verify svg width and height', () => {
    cy.get('.pf-c-chart > svg').should('have.attr', 'width', '600');
    cy.get('.pf-c-chart > svg').should('have.attr', 'height', '250');
  });
});
