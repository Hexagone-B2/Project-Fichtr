const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
const expect = chai.expect;

describe('API Tests', () => {
    it('https://dev.enzo-salson.fr/api/getPosts doit retourner un json de posts en requête post', (done) => {
        chai
            .request('https://dev.enzo-salson.fr')
            .post('/api/getPosts')  // Utilisez .post() au lieu de .get() pour une requête POST
            .send({nb: 0})
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res).to.have.header('content-type', 'application/json; charset=utf-8');
                expect(res.body).to.have.property('tab');

                done();
            });
    });
});

// Pour executer le test unitaire, faire npx mocha Unitary_tests/test.js