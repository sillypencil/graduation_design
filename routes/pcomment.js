var express = require('express');
var router = express.Router();
var usr = require('db/dbconnect');
var db = require('db/dbFun');

/* GET home page. */
router
	.post('/', function(req, res){
		//这里得不到req.session故而用req.cookies代替
		// console.log("req.body: ")
		// for(i in req.body) console.log("req.body."+i+": "+req.body[i]);
		// console.log("req.cookies.islogin: "+ req.cookies.islogin);
		// console.log("req.cookies.username: "+ req.cookies.username);
		// for(i in req) console.log("req."+i+": "+ req[i]);

		var newComment = {
			pnumber:req.body.pnumber,
			evaluator:req.cookies.islogin,
			content:req.body.commentText,
			name: req.cookies.username,
			projectName: req.body.projectName
		}
		// console.log("newComment: "+ newComment); 
		// for(i in newComment) console.log("newComment["+i+"]: "+newComment[i]);

		var client = usr.connect();
		db.insertpComment(client, newComment, function(results){
			console.log(results.insertId)
			if(results.insertId){
				// res.send({success: "评论成功"});
				db.selectpCommrnyById(client, results.insertId, function(newComments){
					if(newComments[0]){
						console.log("newComment: "+newComments[0]);
						res.send(newComments[0]);
					}else{
						console.log("reading newComment mistakes");
						res.send("mistakes");
					}
				})
			}else{
				res.send({error:"评论失败"});
			}
		})
	});

module.exports = router;
