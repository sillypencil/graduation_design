var express = require('express');
var router = express.Router();
var usr = require('db/dbconnect');
var db = require('db/dbFun');

/* GET home page. */
router
	.get('/',function(req, res, next) {
		var data1={
			projects:[{
				name:"proName",
				starttime:"2016/10/10",
				endtime:"2016/10/10",
				intro:"introduction",
				updatetime:"2016/10/10",
				msgcount:"10",
				curcycle:"2",
				curday:"1",
				url:"/project/55345",
				comments:[{
					commenter:"commenter",
					project:"project",
					content:"comment content",
					time:"2016/10/10 15:15:15"	
				},{
					commenter:"commenter",
					project:"project",
					content:"comment content",
					time:"2016/10/10 15:15:15"	
				},{
					commenter:"commenter",
					project:"project",
					content:"comment content",
					time:"2016/10/10 15:15:15"	
				},{
					commenter:"commenter",
					project:"project",
					content:"comment content",
					time:"2016/10/10 15:15:15"	
				}]
			},{
				name:"proName",
				starttime:"2016/10/10",
				endtime:"2016/10/10",
				intro:"introduction",
				updatetime:"2016/10/10",
				msgcount:"10",
				curcycle:"2",
				curday:"1",
				url:"/project/55345",
				comments:[{
					commenter:"commenter",
					project:"project",
					content:"comment content",
					time:"2016/10/10 15:15:15"	
				},{
					commenter:"commenter",
					project:"project",
					content:"comment content",
					time:"2016/10/10 15:15:15"	
				},{
					commenter:"commenter",
					project:"project",
					content:"comment content",
					time:"2016/10/10 15:15:15"	
				},{
					commenter:"commenter",
					project:"project",
					content:"comment content",
					time:"2016/10/10 15:15:15"	
				}]
			},{
				name:"proName",
				starttime:"2016/10/10",
				endtime:"2016/10/10",
				intro:"introduction",
				updatetime:"2016/10/10",
				msgcount:"10",
				curcycle:"2",
				curday:"1",
				url:"/project/55345",
				comments:[{
					commenter:"commenter",
					project:"project",
					content:"comment content",
					time:"2016/10/10 15:15:15"	
				},{
					commenter:"commenter",
					project:"project",
					content:"comment content",
					time:"2016/10/10 15:15:15"	
				},{
					commenter:"commenter",
					project:"project",
					content:"comment content",
					time:"2016/10/10 15:15:15"	
				},{
					commenter:"commenter",
					project:"project",
					content:"comment content",
					time:"2016/10/10 15:15:15"	
				}]
			},{
				name:"proName",
				starttime:"2016/10/10",
				endtime:"2016/10/10",
				intro:"introduction",
				updatetime:"2016/10/10",
				msgcount:"10",
				curcycle:"2",
				curday:"1",
				url:"/project/55345",
				comments:[{
					commenter:"commenter",
					project:"project",
					content:"comment content",
					time:"2016/10/10 15:15:15"	
				},{
					commenter:"commenter",
					project:"project",
					content:"comment content",
					time:"2016/10/10 15:15:15"	
				},{
					commenter:"commenter",
					project:"project",
					content:"comment content",
					time:"2016/10/10 15:15:15"	
				},{
					commenter:"commenter",
					project:"project",
					content:"comment content",
					time:"2016/10/10 15:15:15"	
				}]
			},{
				name:"proName",
				starttime:"2016/10/10",
				endtime:"2016/10/10",
				intro:"introduction",
				updatetime:"2016/10/10",
				msgcount:"10",
				curcycle:"2",
				curday:"1",
				url:"/project/55345",
				comments:[{
					commenter:"commenter",
					project:"project",
					content:"comment content",
					time:"2016/10/10 15:15:15"	
				},{
					commenter:"commenter",
					project:"project",
					content:"comment content",
					time:"2016/10/10 15:15:15"	
				},{
					commenter:"commenter",
					project:"project",
					content:"comment content",
					time:"2016/10/10 15:15:15"	
				},{
					commenter:"commenter",
					project:"project",
					content:"comment content",
					time:"2016/10/10 15:15:15"	
				}]
			}]
		}
		var client = usr.connect();
		if(req.cookies.islogin){
			req.session.islogin = req.cookies.islogin;
			req.session.username = req.cookies.username;
		}
		if(req.session.islogin){
			res.locals.islogin = req.session.islogin;
			var data = {};
			var user = req.session.islogin;
			var client = usr.connect();
			db.selectProByUser(client, user, function(projects){
				data.projects = [];
				if(projects.length > 0 && projects[0]){
					// console.log("projects!");
					var l = projects.length;
					for(var i = 0; i < l; i++){
						var project = {};
						project.pnumber = projects[i].pnumber;
						project.name = projects[i].name?projects[i].name:"no name";
						project.intro = projects[i].intro?projects[i].intro:"no introduction";
						project.curcycle = projects[i].cycle?projects[i].cycle:"0";
						project.updatetime = projects[i].updatetime?projects[i].updatetime:"/";
						project.msgcount = 0;//没有这个数据，暂时用0代替
						project.curday = projects[i].days? projects[i].days:"0";
						project.starttime = projects[i].startdate?projects[i].startdate.getFullYear()+"/"+projects[i].startdate.getMonth()+"/"+projects[i].startdate.getDate():"1999/01/01";
						console.log("project.starttime: "+project.starttime )
						project.endtime = projects[i].endtime?projects[i].endtime:"/";
						project.url = projects[i].pnumber?"/project/"+projects[i].pnumber:"/project";
						//此处应该查询项目对应的评论，暂为死数据
						project.comments = [{commenter:"commenter",
							project:"project",
							content:"comment content",
							time:"2016/10/10 15:15:15"},{commenter:"commenter",
							project:"project",
							content:"comment content",
							time:"2016/10/10 15:15:15"},{commenter:"commenter",
							project:"project",
							content:"comment content",
							time:"2016/10/10 15:15:15"}]
						data.projects.push(project);
						// console.log(data.projects)
					}
				}
				else{
					console.log("no projects!");
				}
				db.selectFriendData(client, user, function(friends){
					if(friends && friends.length > 0){
						data.friends = [];
						var l = friends.length;
						for(var i = 0; i < l; i++){
							var friend = {}
							friend.name = friends[i].name;
							friend.url = friends[i].email?"/user/" + friends[i].email:"no url";
							data.friends.push(friend);
						}
					}
					else{
						console.log("no friends")
					}
					db.selectTeammates(client,user, function(contacts){
						data.contacts=[];
						if(contacts[0] && contacts.length > 0){
							var l = contacts.lengt;
							for( var i = 0; i < l; i++){
								var contact = {};
								contact.url = contacts[i].email?"/user/"+contacts[i].email:"no contact";
								contact.name = contacts[i].name?contacts[i].name:"no name";
								data.contacts.push(contact);
							}
							console.log(contacts);
							

							res.render('project', data);

						}
						else{
							console.log("no contacts");
							res.render('project', data);

						}
					})
					
				})
				// res.render('project',data);

			})
			data.username = req.session.username;
			
		}else{
			res.redirect('/');
		}
	})
	.get('/:pnumber', function(req, res){
		// req.cookies.islogin="a";
		var data = {};
		data.userId = '';
		data.username = '';
		data.project = {};
		data.project.projectName = '';
		data.project.startTime = '';
		data.project.endTime = '';
		data.project.curSprint = '';
		data.project.curDay = '';
		// data.project.intro = '';
		// data.project.menager = '';
		data.project.scrum = {}
		data.project.requirement = [];
		data.project.scrum.backlog = {};
		data.project.scrum.task = {};
		data.project.scrum.finished = {};
		data.project.scrum.check = {};
		var pnumber = req.query.pnumber;
		// console.log("pnumber= " + pnumber);
		if(req.session.islogin){
			var islogin = res.locals.islogin = req.session.islogin;
			var client = usr.connect();
			db.selectUser(client, islogin, function(result){
				if(result[0] === undefined){
					console.log(result[0]);
					data.userId = 'no userId';
					data.username = 'no username';
				}else{
					// console.log(result[0])
					console.log("userData= " + result[0]);
					data.userId = result[0].email;
					data.username = result[0].name;
				}
			});
			db.selectPro(client, pnumber, function(result){
				if(result[0] === undefined){
					console.log(result[0]);
					data.project = {};
					data.project.projectName = 'no';
					data.project.startTime = 'no';
					data.project.endTime = 'no';
					data.project.curSprint = 'no';
					data.project.curDay = 'no';
				}
				else{
					// for(i in result[0]){
					// 	console.log(i+": "+ result[0]);
					// }
					data.project = {};
					data.project.projectName = result[0].name;
					data.project.startTime = result[0].startdate;
					data.project.endTime = result[0].endtime?result[0].endtime:'no';
					data.project.curSprint = result[0].cycle;
					data.project.curDay = result[0].days;
				}
			});
			db.selectTnum(client, pnumber, function(result){
			//需要返回title

				if(result[0] === undefined){
					console.log(result[0])
				}
				else{
					data.project.scrum = {}
					data.project.requirement = [];
					data.project.scrum.backlog = {name:"待办任务", arr:[]};
					data.project.scrum.task = {name:"进行中", arr:[]};
					data.project.scrum.finished = {name:"已完成", arr:[]};
					data.project.scrum.check = {name:"已审核", arr:[]};
					console.log("result.length = "+result.length)
					for(var i = 0; i < result.length; i++){
						// console.log(result[i].stage)
						switch (result[i].stage){
							case '0': 
								var aRequirement = {}
								aRequirement.requirement = result[i].name;
								aRequirement.a = result[i].content;
								data.project.requirement.push(aRequirement);
								break;
							case '1':
								data.project.scrum.backlog.arr.push(result[i]);
								break;
							case '2':
								data.project.scrum.task.arr.push(result[i]);
								break;
							case '3':
								data.project.scrum.finished.arr.push(result[i]);
								break;
							case '4':
								data.project.scrum.check.arr.push(result[i]);
								break;
							default :
								console.log("default")
								break;
						}
					}
					console.log("requirement: ");
					for(i in data.project.requirement){
						console.log(data.project.requirement[i]);}
					console.log("backlog: ");
					for(i in data.project.scrum.backlog.arr){
						console.log(data.project.scrum.backlog.arr[i]);}
					console.log("task: ");
					for(i in data.project.scrum.task.arr){
						console.log(data.project.scrum.task.arr[i]);}
					console.log("finished: ");
					for(i in data.project.scrum.finished.arr){
						console.log(data.project.scrum.finished.arr[i]);}
					console.log("check: ");
					for(i in data.project.scrum.check.arr)
						console.log(data.project.scrum.check.arr[i]);
					console.log("data.project.requirement: "+data.project.requirement.length)
					// res.render('home', data);

				}
			})
			// console.log("data= " + data.project.requirement.length);
			setTimeout(function(){res.render('home', data)}, 100)
		}else{
			res.redirect('/');
		}
	})
	.get('/search',function(req,res){
		
	})
	.post('/newproject', function(req, res){
		console.log(req.session.islogin)
		if(req.body.name &&
			req.body.intro &&
			req.body.allcycles &&
			req.body.sprtime &&
			req.body.environment){
			var client = usr.connect();
			db.insertPro(client, {
				name:req.body.name,
				intro:req.body.intro,
				cycle:req.body.allcycles,
				days:req.body.sprtime,
				finish:0,
				// startdate:req.body.startdate,
				ispublic: req.body.ispublic,
				environment:req.body.environment,
				creater: req.session.islogin
				},function(results){
					// console.log(results)
					// for(i in results) console.log(i+": "+results[i])
					if(results.insertId){
						var rup = {
							email:req.session.islogin
						};
						rup.pnumber = results.insertId;
						db.insertRup(client,rup, function(rupResults){
								if(rupResults.insertId){
									db.selectPro(client, rup.pnumber, function(pro){
										console.log(pro)
										res.send({success:{
											name:pro[0].name,
											intro:pro[0].intro,
											cycle:pro[0].allcycles,
											days:pro[0].days,
											environment: pro[0].environment,
											startdate:pro[0].startdate,
											creater: pro[0].creater
											}
										})
									})
								}else{
									console.log("there'er some mistakes in inserting rup");
								}
						})
					}else{
						console.log("there're some mistake in inserting project")
					}
					
				})
		}
		else{
			res.send({err:"请补充完整表单"});
		}
	})
module.exports = router;