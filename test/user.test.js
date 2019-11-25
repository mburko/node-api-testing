var should = require('chai').should(),
    expect = require('chai').expect,
    supertest = require('supertest'),
    api = supertest(global.URL);

describe("Express API", function() {
    describe("user", function() {
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

    describe("message", function() {
        it("should be created", function (done) {
           api
               .post("/messages")
               .set("Accept", "application/json")
               .send({
                   "text": "Test message is here"
               })
               .expect("Content-Type", /json/)
               .expect(200)
               .end(function (err, res) {
                   expect(res.body).to.be.not.null;
                   done();
               });
        });
    });
});