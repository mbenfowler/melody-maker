describe('On index page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('clicking the get new melody button refreshes the page with a new query param', () => {
    cy.url().then(($url) => {
      const origURL = $url;
      cy.get('[data-qa=get-new-melody-button]').click();
      cy.url().should('not.equal', origURL);
    });
  });

  // it('github footer button navigates to melody-maker project', () => {
  //   cy.get('[alt="GitHub Icon"]').should('have.attr', 'href', 'https://github.com/mbfowler/melody-maker')
  // })
});
