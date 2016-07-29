// JavaScript Document

$(function(){
	$("#submit").mouseover(function(){
		$(this).attr("class","submit2");
	});
	$("#submit").mouseleave(function(){
		$(this).attr("class","submit1");
	});
	$("#submit").click(function(){
		alert("注册成功！");
	});
});