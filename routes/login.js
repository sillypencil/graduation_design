var express = require('express');
var router = express.Router();
var usr = require('db/dbconnect');
var db = require('db/dbFun');

/* GET home page. */
router
	.get('/',function(req, res, next) {
		var client = usr.connect();
		// usr.insertFun(client, {account: "222", password:"222", email: "dafa", phone:"5445", name:"cccc", sex: "male", snumber:"123", identity:"5454"}, function(){
		// 	console.log("新建用户成功");
		// })
		// usr.selectFun(client, "1111", function(result){
		// 	console.log(result);
		// })


		res.render('login');
	})
	.post('/', function(req, res){
		var client = usr.connect();
		db.selectPassword( client, req.body.email,function(result){
			if(result[0] === undefined){
				console.log(result[0])
				res.send('没有该用户');
			}else{
				if(result[0].password === req.body.password){
					db.selectUsername(client, req.body.email, function(result){
						// console.log(result[0]);
						req.session.username = result[0]?result[0].name:req.body.email;
						req.session.islogin = req.body.email;
	                    res.locals.username=req.session.username;
	                    res.locals.islogin=req.session.islogin;
	                    res.cookie('islogin',res.locals.islogin,{maxAge:60000});
	                    res.cookie('username',res.locals.username,{maxAge:60000});
						res.redirect('/');
					})
				}else{
					// res.send("密码错误");
					res.redirect('/login');
				}
			}
		});
	});

module.exports = router;
