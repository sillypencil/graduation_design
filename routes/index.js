var express = require('express');
var router = express.Router();
var usr = require('db/dbconnect');
var db = require('db/dbFun');
// var data1 = {
// 	projectId:430074,
// 	userId: 430074,
// 	username:"许骄龙",
// 	project:{
		// pnumber:1,
// 		projectName:"projectA",
// 		startTime:"2016.2.20",
// 		endTime:"2016.4.30",
// 		curSprint:4,
// 		curDay:3,
// 		requirement:[{requirement:"需求1",a:"a1"},{requirement:"需求2",a:"a2"}],
// 		scrum:{
// 			backlog:{name: "待办任务", arr: ["任务1","任务2","任务3"]},
// 			task:{name:"进行中", arr: ["进行中1","进行中2"]},
// 			finished:{name:"已完成",arr:["已完成1","已完成2"]},
// 			check:{name:"已审核", arr:["已审核","已审核2","已审核3","已审核4"]}
// 		}
// 	},
// 	contacts:[] //-联系人列表
// };
var data2 = {
	username:"用户名",
	active_num: "动态数",
	project_num: "项目数",
	task_num: "任务数,"	,
	article_num :"文章数",
	user:{
		job:"职位",
		sex:"性别",
		major:"专业",
		email: "a@qq.com"
	},
	moments:[{
		name: "xujiaolong",
		taskurl:"url",
		taskid: 1,
		taskcreater: "a",
		taskname: "a",
		comments:[{
				project: "01",
				commmenter: "a",
				content: "aaa"
			},{
				project: "01",
				commmenter: "a",
				content: "aaa"
			},{
				project: "01",
				commmenter: "a",
				content: "aaa"
			}]
	},{
		name: "xujiaolong",
		taskurl:"url",
		taskid: 1,
		taskcreater: "a",
		taskname: "a",
		comments:[{
				project: "01",
				commmenter: "a",
				content: "aaa"
			},{
				project: "01",
				commmenter: "a",
				content: "aaa"
			},{
				project: "01",
				commmenter: "a",
				content: "aaa"
			}]
	},{
		name: "xujiaolong",
		taskurl:"url",
		taskid: 1,
		taskcreater: "a",
		taskname: "a",
		comments:[{
				project: "01",
				commmenter: "a",
				content: "aaa"
			},{
				project: "01",
				commmenter: "a",
				content: "aaa"
			},{
				project: "01",
				commmenter: "a",
				content: "aaa"
			}]
	}],
	projects:[{
		title:"a",
		starttime: "2001/1/1",
		endtime: "2016/4/1",
		intro: "introduction",
		time:"2016/2/2",
		msgcount: 10,
		curcicle: 3,
		curday: 2,
		scrumurl: "/scrum/2",
		comments:[{
			commenter: "commenter",
			project: "projectname",
			content: "content",
			time: "2016/3/3"
		}]
	}],
	contacts:[{}]
}

/* GET home page. */
router
	.get('/', function(req, res, next) {
		// req.cookies.islogin="a";
		if(req.cookies.islogin){
			req.session.islogin = req.cookies.islogin;
			req.session.username = req.cookies.username;
		}
		if(req.session.islogin){
			res.locals.islogin = req.session.islogin;
			res.locals.username = req.session.username;
			// 输出所有动态
			// console.log(data2.moments)
			// 获取数据
			var user = req.session.islogin;
			var client = usr.connect();
			var data = {};
			data.username = req.session.username;
			db.selectUser(client,user,function(result){
				if(result[0]){
					data.user={};
					data.user.job = result[0].job? result[0].job:"JAVA程序员/";
					data.user.sex = result[0].sex? result[0].sex: "/";
					data.user.major = result[0].major? result[0].major: "/";
					data.user.email = result[0].email? result[0].email: "/";
				}
				else{
					data.user={};
					data.user.job = "/";
					data.user.sex = "/";
					data.user.major = "/";
					data.user.email = "/";
				}
				//根据用户查找任务
				// ...
				//临时数据
				data.moments = [{name:"jiaojiao",taskurl:"/task/01",taskid:"007",taskcreater:"abc", taskname:"task1",content:"task1"},
					{name:"jiaojiao",taskurl:"/task/01",taskid:"007",taskcreater:"abc", taskname:"task2",content:"task2"},
					{name:"jiaojiao",taskurl:"/task/01",taskid:"007",taskcreater:"abc", taskname:"task3",content:"task3"},
					{name:"jiaojiao",taskurl:"/task/01",taskid:"007",taskcreater:"abc", taskname:"task4",content:"task4"}]
				//以上为临时数据
				db.selectAllProByUser(client,user,function(results){
					if(results.length > 0){
						for(i in results){
							console.log(results[i])
						}
						
					}else{
						console.log("no results in selectAllProByUser")
					}
				})
				db.selectProByUser(client, user, function(projects){
					data.projects = [];
					if(projects.length > 0){
						var l = projects.length;
						// console.log("projects!")
						for( var i = 0; i < l; i++){
							var pro = {};
							pro.pnumber = projects[i].pnumber;
							pro.title = projects[i].name? projects[i].name:"/";
							pro.starttime = projects[i].startdate? projects[i].startdate.getFullYear()+"/"+projects[i].startdate.getMonth()+"/"+projects[i].startdate.getDate(): "1999/01/01";
							pro.endtime = projects[i].endtime? projects[i].endtime: "/";
							pro.intro = projects[i].intro? projects[i].intro:"no introduction";
							pro.updatetime = projects[i].updatetime? projects[i].time:"no time";
							pro.curcicle = projects[i].cycle? projects[i].cycle:"/";
							pro.curday = projects[i].days? projects[i].days:"/";
							pro.scrumurl = projects[i].pnumber? "/project/"+projects[i].pnumber:"/";
							// pro.comments = [{project:"01", commenter:"xu", content: "comment1"},
							// 	{project:"02", commenter:"xu", content: "comment2"},
							// 	{project:"03", commenter:"xu", content: "comment3"},
							// 	{project:"04", commenter:"xu", content: "comment4"}];
							pro.comments = [];
							db.selectpComment(client, projects[i].pnumber, function(comments){
								if(comments[0]){
									for(var j = 0; j < comments.length; j++){
										pro.comments.push(comments[j]);
									}
								}
								data.projects.push(pro);
								// console.log("data.projects"+data.projects)
								// for(i in data.projects) console.log(data.projects[i] )
							})
							
						}

					}else{
						console.log("no project")
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
								console.log(contacts.length)
								var l = contacts.length;
								for( var i = 0; i < l; i++){
									var contact = {};
									contact.url = contacts[i].email?"/user/"+contacts[i].email:"no contact";
									contact.name = contacts[i].name?contacts[i].name:"no name";
									data.contacts.push(contact);
									console.log("contact: "+contact)
								}
								// console.log(data.contacts);
								

								res.render('Homepage', data);

							}
							else{
								console.log("no contacts");
								res.render('Homepage', data);

							}
						})
					})
				})
			})
		}else{
			res.redirect('login');
		}
  // res.render('home', data);
	})
	.get('/logout', function(req, res) {
	    res.clearCookie('islogin');
	    req.session.destroy();
	    res.redirect('/');
	});

module.exports = router;
