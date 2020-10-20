const { describe } = require("mocha")

context('API', () => {
  
  it('get request returns a success message', () => {
      cy.request('/.netlify/functions/server/').then(async(response) => {   
        expect(response.status).to.eq(200)
        const melodyParams = Object.keys(response.body)
        expect(melodyParams.length).to.equal(4)
        expect(melodyParams).to.contain('melody')
        expect(melodyParams).to.contain('key')
        expect(melodyParams).to.contain('scale')
        expect(melodyParams).to.contain('scaleNotes')
        expect(response.headers['content-type']).to.contain('application/json');  
      })
  })
})
