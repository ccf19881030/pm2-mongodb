var pmx = require('pmx');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

pmx.initModule({

  widget : {

	  logo : 'http://mongodb.org/static/images/mongodb-logo.png',

    theme            : ['#262E35', '#222222', '#3ff', '#3ff'],

    el : {
      probes  : true,
      actions : true
    },

    block : {
      actions : false,
      issues  : false,
      meta    : true,

      main_probes : ['Insert', 'Query', 'Update', 'Delete', 'Command', 'netOut', 'netIn']
    }

  }

}, function(err, conf) {
var url = 'mongodb://localhost:27017/test';
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server.");
    db.close();
  });
  require('./lib/mongostat.js');
});