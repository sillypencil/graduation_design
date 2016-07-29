// JavaScrpt Document


// tab栏
$(function(){
	$("#btn1").click(function(){
		$("#moment_border").css("display","block");
		$("#project_list_border").css("display","none");
		$("#task_border").css("display","none");
		$("#article_border").css("display","none");

		$("#btn1").attr("class","btn_active");
		// $("#btn1 p:first").attr("class","num_active");
		$("#btn1").children("p:first").attr("class","num_active");
		$("#btn2").attr("class","btn");
		$("#btn2 p:first").attr("class","num");
		$("#btn3").attr("class","btn");
		$("#btn3 p:first").attr("class","num");
		$("#btn4").attr("class","btn");
		$("#btn4 p:first").attr("class","num");
	});

	$("#btn2").click(function(){
		$("#moment_border").css("display","none");
		$("#project_list_border").css("display","block");
		$("#task_border").css("display","none");
		$("#article_border").css("display","none");

		$("#btn1").attr("class","btn");
		$("#btn1 p:first").attr("class","num");
		$("#btn2").attr("class","btn_active");
		// $("#btn2 p:first").attr("class","num_active");
		$("#btn2").children("p:first").attr("class","num_active");
		$("#btn3").attr("class","btn");
		$("#btn3 p:first").attr("class","num");
		$("#btn4").attr("class","btn");
		$("#btn4 p:first").attr("class","num");
	});

	$("#btn3").click(function(){
		$("#moment_border").css("display","none");
		$("#project_list_border").css("display","none");
		$("#task_border").css("display","block");
		$("#article_border").css("display","none");

		$("#btn1").attr("class","btn");
		$("#btn1 p:first").attr("class","num");
		$("#btn2").attr("class","btn");
		$("#btn2 p:first").attr("class","num");
		$("#btn3").attr("class","btn_active");
		$("#btn3 p:first").attr("class","num_active");
		$("#btn4").attr("class","btn");
		$("#btn4 p:first").attr("class","num");
	});

	$("#btn4").click(function(){
		$("#moment_border").css("display","none");
		$("#project_list_border").css("display","none");
		$("#task_border").css("display","none");
		$("#article_border").css("display","block");

		$("#btn1").attr("class","btn");
		$("#btn1 p:first").attr("class","num");
		$("#btn2").attr("class","btn");
		$("#btn2 p:first").attr("class","num");
		$("#btn3").attr("class","btn");
		$("#btn3 p:first").attr("class","num");
		$("#btn4").attr("class","btn_active");
		$("#btn4 p:first").attr("class","num_active");
	});
});


// $(function(){
// 	// alert($(".btn").length);
// 	$(".btn").mouseover(function(){
// 		$(this).attr("class","btn_active");
// 		$(this).children("p:first").attr("class","num_active");
// 	});
// 	$(".btn").mouseleave(function(){
// 		$(this).attr("class","btn");
// 		$(this).children("p:first").attr("class","num");
// 	});
// });



/*20160428*/
//显示隐藏新建项目
$(function(){
	$("#project_createicon").click(function(){
		if($("#project_create_border").css("display") == "none"){
			$("#project_create_border").css("display","block");
			$(this).css("background","url(../images/4.12/添加项目按钮2.png) center no-repeat");
			$(this).css("background-size","contain");
		}else{
			$("#project_create_border").css("display","none");
			$(this).css("background","url(../images/4.12/添加项目按钮1.png) center no-repeat");
			$(this).css("background-size","contain");
		}
	});
});

// 项目详情
$(function(){
	$(document).on("click","p.title",function(){
		if($(this).parent().parent().find(".time_commentCount").css("display") == "block"){
			$(this).parent().parent().find(".time_commentCount").css("display","none");
			$(this).parent().parent().find(".sprinttime").css("display","block");
			$(this).parent().parent().find(".project_sprint_toScrum_commenticon").css("display","block");
			$(this).parent().parent().find(".project_gruop").css("display","block");

			$(this).parent().parent().find(".project_introduce").css("color","black");
		}else{
			$(this).parent().parent().find(".time_commentCount").css("display","block");
			$(this).parent().parent().find(".sprinttime").css("display","none");
			$(this).parent().parent().find(".project_sprint_toScrum_commenticon").css("display","none");
			$(this).parent().parent().find(".project_gruop").css("display","none");
			$(this).parent().parent().find(".project_comment_border").css("display","none");

			$(this).parent().parent().find(".project_introduce").css("color","gray");
			$(this).parent().parent().parent().find(".project_comment_border").css("display","none");
		}
	});
});
// 评论图标
$(function(){
		$(document).on("click",".pre_ommenticon_border",function(){
		if($(this).parent().parent().parent().find(".project_comment_border").css("display") == "none"){
			$(this).parent().parent().parent().find(".project_comment_border").css("display","block");
		}else{
			$(this).parent().parent().parent().find(".project_comment_border").css("display","none");

		}
	});
});
// 项目详情成员头像交互
$(function(){
	$(document).on("mouseover",".photo",function(){
		$(this).css("background","url(../images/4-10/组员头像.png) center no-repeat");
		$(".currentuser").css("background-size","contain");
	});
	$(document).on("mouseleave",".photo",function(){
		$(this).css("background","url(../images/4-10/组员头像Z.png) center no-repeat");
		$(".currentuser").css("background-size","contain");
	});
});
// 新建项目
$(function(){
	$(document).on("click","input.crebtn",function(){
		var project=document.createElement("div");
		$(project).addClass("project");

		var project_information=document.createElement("div");
		$(project_information).addClass("project_information");

		var project_title_sprint=document.createElement("div");
		$(project_title_sprint).addClass("project_title_sprint");
		var title=document.createElement("p");
		//需要获取
		$(title).addClass("title");
		$(title).html("新增项目");
		var sprinttime=document.createElement("p");
		//需要获取
		$(sprinttime).addClass("sprinttime");
		$(sprinttime).html("2016/3/1 - 2016/5/30");
		$(project_title_sprint).append(title);
		$(project_title_sprint).append(sprinttime);

		var project_introduce=document.createElement("p");
		$(project_introduce).addClass("project_introduce");
		$(project_introduce).html("项目简介，点击标题后展开详细介绍。项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介");

		var time_commentCount=document.createElement("div");
		$(time_commentCount).addClass("time_commentCount");
		var time=document.createElement("p");
		$(time).addClass("time");
		$(time).html("2016/4/11");
		var commenticon=document.createElement("p");
		$(commenticon).addClass("commenticon");
		var message=document.createElement("p");
		$(message).addClass("message");
		$(message).html("10");
		$(time_commentCount).append(time);
		$(time_commentCount).append(commenticon);
		$(time_commentCount).append(message);

		var project_sprint_toScrum_commenticon=document.createElement("div");
		$(project_sprint_toScrum_commenticon).addClass("project_sprint_toScrum_commenticon");
		var sprint=document.createElement("p");
		$(sprint).addClass("sprint");
		$(sprint).html("当前第<span>3</span>周期 第<span>5</span>天");
		var toScrum=document.createElement("p");
		$(toScrum).addClass("toScrum");
		var atoScrum=document.createElement("a");
		$(atoScrum).attr("href","Scrum.html");
		$(atoScrum).html("查看任务展板");
		$(toScrum).append(atoScrum);
		var pre_ommenticon_border=document.createElement("div");
		$(pre_ommenticon_border).addClass("pre_ommenticon_border");
		var pre_div=document.createElement("div");
		var pre_p=document.createElement("p");
		$(pre_p).html("评论");
		$(pre_ommenticon_border).append(pre_div);
		$(pre_ommenticon_border).append(pre_p);
		$(project_sprint_toScrum_commenticon).append(sprint);
		$(project_sprint_toScrum_commenticon).append(toScrum);
		$(project_sprint_toScrum_commenticon).append(pre_ommenticon_border);

		var project_gruop=document.createElement("div");
		$(project_gruop).addClass("project_gruop");
		var photo1=document.createElement("div");
		$(photo1).addClass("photo");
		var photo2=document.createElement("div");
		$(photo2).addClass("photo currentuser");
		var photo3=document.createElement("div");
		$(photo3).addClass("photo");
		var photo4=document.createElement("div");
		$(photo4).addClass("photo");
		$(project_gruop).append(photo1);
		$(project_gruop).append(photo2);
		$(project_gruop).append(photo3);
		$(project_gruop).append(photo4);

		$(project_information).append(project_title_sprint);
		$(project_information).append(project_introduce);
		$(project_information).append(time_commentCount);
		$(project_information).append(project_sprint_toScrum_commenticon);
		$(project_information).append(project_gruop);

		var project_comment_border=document.createElement("div");
		$(project_comment_border).addClass("project_comment_border");
		var project_comment_box_btn_border=document.createElement("div");
		$(project_comment_box_btn_border).addClass("project_comment_box_btn_border");
		var project_commentbox=document.createElement("div");
		$(project_commentbox).addClass("project_commentbox");
		var ainput=document.createElement("input");
		$(ainput).attr("type","text");
		$(ainput).attr("placeholder","请输入您的评论");
		$(project_commentbox).append(ainput);
		var oinput=document.createElement("input");
		$(oinput).addClass("project_commentbtn");
		$(oinput).attr("type","button");
		$(project_comment_box_btn_border).append(project_commentbox);
		$(project_comment_box_btn_border).append(oinput);
		var project_comment_list=document.createElement("div");
		$(project_comment_list).addClass("project_comment_list");
		$(project_comment_border).append(project_comment_box_btn_border);
		$(project_comment_border).append(project_comment_list);

		$(project).append(project_information);
		$(project).append(project_comment_border);

		$(this).parent().parent().next().prepend(project);
	});
});
//评论
$(document).on("click",".project_commentbtn",function(){
	
		var comment = $(this).prev().find("input").val();
		// console.log(comment);
		if(comment === ''){
			console.log("评论不能为空");
		}else{
			var curComentList = $(this).closest(".project").find(".project_comment_list");
			// console.log("评论不为空");
			var newComment ={};
			newComment.commentText = $.trim(comment);
			newComment.pnumber =$(this).closest(".project").attr("data-pnumber");
			newComment.projectName = $(this).closest(".project").find(".title").html();
			// console.log("projectName: "+ newComment.projectName);
			// console.log($(newComment.pnumber));
			$.post("/pcomment",newComment, function(result){
				console.log(result);
				var commentTime = new Date(result.date);
				var project_comment=document.createElement("div");
				$(project_comment).addClass("project_comment");

				var comment_top=document.createElement("div");
				$(comment_top).addClass("comment_top");
				var comment_photo=document.createElement("p");
				$(comment_photo).addClass("comment_photo");
				var comment_name=document.createElement("p");
				$(comment_name).addClass("comment_name");
				$(comment_name).html(result.evaluatorname);
				var from_prj=document.createElement("p");
				$(from_prj).addClass("from_prj");
				$(from_prj).html(result.projectname);
				$(comment_top).append(comment_photo);
				$(comment_top).append(comment_name);
				$(comment_top).append(from_prj);

				var comment_content=document.createElement("div");
				$(comment_content).addClass("comment_content");
				$(comment_content).html(result.content);

				var conment_bottom=document.createElement("div");
				$(conment_bottom).addClass("conment_bottom");
				var comment_time=document.createElement("p");
				$(comment_time).addClass("comment_time");
				$(comment_time).html(commentTime.getFullYear()+"/"+(commentTime.getMonth()+1)+"/"+commentTime.getDate()+" "+commentTime.getHours()+":"+commentTime.getMinutes());
				var replyicon=document.createElement("p");
				$(replyicon).addClass("replyicon");
				var reply=document.createElement("p");
				$(reply).addClass("reply");
				$(reply).html("回复");
				$(conment_bottom).append(comment_time);
				$(conment_bottom).append(replyicon);
				$(conment_bottom).append(reply);


				$(project_comment).append(comment_top);
				$(project_comment).append(comment_content);
				$(project_comment).append(conment_bottom);


				$(curComentList).prepend(project_comment);
			});
		}
	// var project_comment=document.createElement("div");
	// $(project_comment).addClass("project_comment");

	// var comment_top=document.createElement("div");
	// $(comment_top).addClass("comment_top");
	// var comment_photo=document.createElement("p");
	// $(comment_photo).addClass("comment_photo");
	// var comment_name=document.createElement("p");
	// $(comment_name).addClass("comment_name");
	// $(comment_name).html("John");
	// var from_prj=document.createElement("p");
	// $(from_prj).addClass("from_prj");
	// $(from_prj).html("project01");
	// $(comment_top).append(comment_photo);
	// $(comment_top).append(comment_name);
	// $(comment_top).append(from_prj);

	// var comment_content=document.createElement("div");
	// $(comment_content).addClass("comment_content");
	// $(comment_content).html("新评论内容");

	// var conment_bottom=document.createElement("div");
	// $(conment_bottom).addClass("conment_bottom");
	// var comment_time=document.createElement("p");
	// $(comment_time).addClass("comment_time");
	// $(comment_time).html("2016/4/12 15:57");
	// var replyicon=document.createElement("p");
	// $(replyicon).addClass("replyicon");
	// var reply=document.createElement("p");
	// $(reply).addClass("reply");
	// $(reply).html("回复");
	// $(conment_bottom).append(comment_time);
	// $(conment_bottom).append(replyicon);
	// $(conment_bottom).append(reply);


	// $(project_comment).append(comment_top);
	// $(project_comment).append(comment_content);
	// $(project_comment).append(conment_bottom);


	// $(this).parent().next().append(project_comment);

});



//回复
$(function(){
	$(document).on("click","p.reply",function(){
		var project_comment=document.createElement("div");
		$(project_comment).addClass("project_comment");

		var comment_top=document.createElement("div");
		$(comment_top).addClass("comment_top");
		var comment_photo=document.createElement("p");
		$(comment_photo).addClass("comment_photo");
		var comment_name=document.createElement("p");
		$(comment_name).addClass("comment_name");
		$(comment_name).html("John");
		var from_prj=document.createElement("p");
		$(from_prj).addClass("from_prj");
		$(from_prj).html("project01");
		$(comment_top).append(comment_photo);
		$(comment_top).append(comment_name);
		$(comment_top).append(from_prj);

		var comment_content=document.createElement("div");
		$(comment_content).addClass("comment_content");
		$(comment_content).html("@"+$(this).parent().parent().find("p.comment_name").html()+" 你说的有道理！！！");

		var conment_bottom=document.createElement("div");
		$(conment_bottom).addClass("conment_bottom");
		var comment_time=document.createElement("p");
		$(comment_time).addClass("comment_time");
		$(comment_time).html("2016/4/12 15:57");
		var replyicon=document.createElement("p");
		$(replyicon).addClass("replyicon");
		var reply=document.createElement("p");
		$(reply).addClass("reply");
		$(reply).html("回复");
		$(conment_bottom).append(comment_time);
		$(conment_bottom).append(replyicon);
		$(conment_bottom).append(reply);


		$(project_comment).append(comment_top);
		$(project_comment).append(comment_content);
		$(project_comment).append(conment_bottom);


		$(this).parent().parent().parent().append(project_comment);

	});
});








// 评论动态图标
$(function(){
		$(document).on("click",".comment_icon",function(){
		if($(this).parent().parent().next().css("display") == "none"){
			$(this).parent().parent().next().css("display","block");
		}else{
			$(this).parent().parent().next().css("display","none");
		}
	});
});