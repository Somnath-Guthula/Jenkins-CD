var request = require('supertest');
var app = require('../app.js');

describe('GET /', function () {
    it('Response with Hello World!', function (done) {
        request(app).get('/').expect('hello jenkins', done);
    });
});


// var request = require('supertest');
// var app = require('../app.js');
//
// describe('GET /', function() {
//   it('respond with hello world', function(done) {
//     request(app).get('/').expect('hello world', done);
//   });
// });
