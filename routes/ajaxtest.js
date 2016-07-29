var express = require('express');
var router = express.Router();
var usr = require('db/dbconnect');
var db = require('db/dbFun');

/* GET home page. */
router
	.get('/',function(req, res, next) {
		res.render('ajaxtest');
	})
	.get('/a',function(req, res, next) {
		// 数据操作
		//...
		//发送结果
		for(i in req.session)console.log(i)
		console.log(req.body)
		res.send('hello world');
	}).post('/',function(req, res){
		console.log(req.body)
		res.send(req.body);
	})

module.exports = router;
