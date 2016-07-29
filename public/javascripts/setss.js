// JavaScript Document


function changeBgc(){
	var dl1=document.getElementById("dl1");
	var zc=document.getElementById("zc");
	dl1.onclick=function(){
		var divEle=document.getElementById("mainbody");
		divEle.style.background="url(images/登录bg.png) no-repeat";
		divEle.style.backgroundSize="contain";
	}
	zc.onclick=function(){
		var divEle=document.getElementById("mainbody");
		divEle.style.background="url(images/注册1bg.png) no-repeat";
		divEle.style.backgroundSize="contain";
	}
}
changeBgc();