var should = require('chai').should(),
    expect = require('chai').expect,
    supertest = require('supertest'),
    api = supertest(global.URL);

describe('User', function () {
    it("Should return user by specified ID", function (done) {
        api
            .get("/users/1")
            .set("Accept", "application/json")
            .expect(200)
            .end(function (err, res) {
                expect(res.body).to.have.property("username");
                done();
            });
    });
});