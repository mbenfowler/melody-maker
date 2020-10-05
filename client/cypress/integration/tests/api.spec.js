const { describe } = require('mocha');

describe('API', () => {
  it('get request returns a success message', () => {
    cy.request(Cypress.env('apiURL')).then(async (response) => {
      console.log(response);
      expect(response.status).to.eq(200);
      expect(Object.keys(response.body).length).to.equal(1);
      expect(Object.keys(response.body)).to.contain('url');
      expect(response.body.url).to.contain('melody');
      expect(response.body.url).to.contain('key');
      expect(response.body.url).to.contain('scale');
      expect(response.body.url).to.contain('scaleNotes');
      expect(response.headers['content-type']).to.contain('application/json');
    });
  });
});
