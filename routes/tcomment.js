var express = require('express');
var router = express.Router();
var usr = require('db/dbconnect');
var db = require('db/dbFun');

/* GET home page. */
router
	.post('/', function(req, res){
		var client = usr.connect();
		
	});

module.exports = router;
