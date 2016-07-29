var express = require('express');
var router = express.Router();
var usr = require('db/dbconnect');
var db = require('db/dbFun');

/* GET home page. */
router
	.get('/', function(req, res, next) {
		// console.log('welcome to register')
	  res.render('register');
	})
	.post('/',function(req,res){
		console.log("req.body: " + req.body.email)
		console.log("注册");
		var client = usr.connect();
		db.selectPassword( client, req.body.email,function(result){
			if(result[0] === undefined){
				// console.log("注册成功")
				db.insertFun(client, req.body, function(err){
					console.log(err);
				});
				res.redirect('/');
			}else{
				res.send("用户已被注册");
			}
		});
	});

module.exports = router;
