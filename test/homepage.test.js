var request = require('supertest');
var chai = require('chai');
var expect = chai.expect;
var app = require('../app');


describe("homepage", function(){

    it("welcomes the user", function(done){

        request(app)
            .get("/")
            .expect(200)
            .expect(/Hello world/, done);
    })
})


describe("contact form", function(){

    it("thanks the user after they fill out the contact form", function(done){

        request(app)
            .post("/contact")
            .send({name: "Roy"})
            .expect(200)
            .end((err, res) => {

                expect(res.body.Name).to.be.equal('Roy');
                expect(res.statusCode).to.be.equal(200);
                done();
            })
    })
})