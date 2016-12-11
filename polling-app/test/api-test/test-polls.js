var supertest = require('supertest');
// var app = require('../../app');

var express = require('express');
var should = require("should");
var sinon = require('sinon');
var proxyquire =  require('proxyquire')
// var pollModel = require('../../models/pollsDAO');


// UNIT test begin
describe("polls unit test", function(){
    var app, pollDAOstub, request, pollroute, log;

    beforeEach(function() {

        pollDAOstub =  function (){ 
            //   return{ 
                  this.getAllPolls = function (callback) {
                    //   console.log('mocked');
                      callback(null, {"data": "allmock"})
                  }

                  this.addNewPolls = function (polldata, callback) {
                    //   console.log('mocked');
                    log = {"addNewPolls": polldata}
                      callback(null, {"message": "addmock"})
                  }
            //   }
        };

        pollroute = proxyquire('../../controller/polls', { 
                '../models/pollsDAO': new pollDAOstub() }
            );
        app = express();
        pollroute(app)

         // Get a supertest instance so we can make requests
        request = supertest(app);

    });

    it("should return 404 when non poll related request get",function(done){

        // when no overrides are specified, path.extname behaves normally 
          
        request
        .get('/random')
        .expect(404)
        .end(function(err,res){
            if(err) {
                 done(err);
            }
            // HTTP status should be 404
            res.status.should.equal(404);
            done()
        });
    });

    it("should return poll page get",function(done){

        // when no overrides are specified, path.extname behaves normally 
        
        // foo.polls = function(){ function getAllPolls(){return {}}}  
        request
        .get('/polls')
        .expect(200)
        .end(function(err,res){
            
            if(err) {
                 done(err);
            }
            
            // HTTP status should be 200
            res.status.should.equal(200);
            res.should.be.json;
            JSON.stringify(res.body).should.equal(JSON.stringify({
                "responseCode" : 0, 
                "responseDesc" : "Success", 
                "data" : {"data": "allmock"}
            }));

            done();
        });
    });

    it("should return poll page post",function(done){

        var postData = {
                "question": "my awesome question",
                "polls" : ["freeResponse", "response"]
        };

        supertest(app)
        .post('/polls')
        .send(postData)
        .expect(200)
        .end(function(err,res){

            if(err) {
                 done(err);
            }
            
            // HTTP status should be 200
            res.status.should.equal(200);
            res.should.be.json;
            JSON.stringify(res.body).should.equal(JSON.stringify({
                "error" : false, 
                "data" : {"message": "addmock"}
            }));
            JSON.stringify(log.addNewPolls).should.equal(JSON.stringify({
                "question": "my awesome question",
                "options" : ["freeResponse", "response"]
            }));
            // console.log(log.addNewPolls)
            // test data is transferred correctly to the mock

            done();
        });
    });

});