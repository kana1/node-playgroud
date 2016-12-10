var supertest = require('supertest');
var app = require('../../app');
var should = require("should");


// UNIT test begin
describe("SAMPLE unit test",function(){

    // #1 should return home page
     it("should return home page",function(done){

        // calling home page api
        supertest(app)
        .get("/")
        .expect("Content-type",/json/)
        .expect(200) // THis is HTTP response
        .end(function(err,res){
            // HTTP status should be 200
            res.status.should.equal(200);           
            done();
        });
    });
    
    it("other links should return 404",function(done){
        supertest(app)
        .get("/random")
        .expect(404)
        .end(function(err,res){
            // HTTP status should be 404
            res.status.should.equal(404);
            done();
        });
    });

});
