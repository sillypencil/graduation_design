// JavaScript Doculment

// 功能函数
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != "function"){
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}
function getNextElement(elem){
	var n=elem.nextSibling;
	while(n.nodeType!=1){
		n=n.nextSibling;
	}
	return n;
}
function getPreElement(elem){
	var n=elem.previousSibling;
	while(n.nodeType!=1){
		n=n.previousSibling;
	}
	return n;
}
function getLastElementChild(n){
	var x=n.lastChild;
	while(x.nodeType!=1){
		x=x.previousSibling;
	}
	return x;
}
function insertAfter(new_elem,target_elem){
	if(target_elem.parentNode.lastChild != target_elem){
		target_elem.parentNode.insertBefore(new_elem,target_elem.nextSibling);
	}else{
		target_elem.parentNode.appendChild(new_elem);
	}
} 
function get_ele_attr(eleId,attr){
	var ele=document.getElementById(eleId);
	var eleCSSStyleDeclarationObject=ele.currentStyle ? ele.currentStyle : getComputedStyle(ele, null);
	return eleCSSStyleDeclarationObject[attr];
}
function addClass(ele,newClass){
	if(ele.className){
		ele.className += " ";
		ele.className += newClass;
	}else{
		ele.className = newClass;
	}
}


//logo悬浮
window.onmousewheel = function () {
	var header_border=document.getElementById("header_border");
	var box=getNextElement(header_border);
	console.log(box.id)
	var oHeight=box.getBoundingClientRect().top;
	var prehide=document.getElementById("prehide");
	var logo=document.getElementById("logo");
	var header=document.getElementById("header");
	// if(oHeight < 76){
	if(oHeight < 50){
		prehide.style.display="none";
		$("#header_searchbox").css("display","none");
		$("#header_remindlist1").css("display","none");
		$("#header_remindlist2").css("display","none");
		logo.onmouseover=function(){
			prehide.style.display="block";
		}
		header.onmouseleave=function(){
			prehide.style.display="none";
			$("#header_searchbox").css("display","none");
			$("#header_remindlist1").css("display","none");
			$("#header_remindlist2").css("display","none");
		}
	}else{
		prehide.style.display="block";
		logo.onmouseover=null;
		header.onmouseleave=null;
	}
}
// or
// $(function(){
// 	$(document).scroll(function(){
// 		...
// });


// 项目&联系人列表-图标交互
function contactsIcon(){
	var contactsicon=document.getElementById("contactsicon");
	contactsicon.onclick=function(){
		document.getElementById("contactslist1").style.display="block";
		document.getElementById("hidecontactsicon").style.display="block";
	}
}
function hidecontactlist(){
	document.getElementById("hidecontactsicon").onclick=function(){
		document.getElementById("contactslist1").style.display="none";
		document.getElementById("contactslist2").style.display="none";
		document.getElementById("hidecontactsicon").style.display="none";
	}
}
// 项目&联系人列表-切换成员列表&好友列表
function changepro_fri(){
	document.getElementById("pro1").onclick=function(){
		document.getElementById("contactslist1").style.display="block";
		document.getElementById("contactslist2").style.display="none";
	}
	document.getElementById("fri1").onclick=function(){
		document.getElementById("contactslist2").style.display="block";
		document.getElementById("contactslist1").style.display="none";
	}
	document.getElementById("pro2").onclick=function(){
		document.getElementById("contactslist1").style.display="block";
		document.getElementById("contactslist2").style.display="none";
	}
	document.getElementById("fri2").onclick=function(){
		document.getElementById("contactslist2").style.display="block";
		document.getElementById("contactslist1").style.display="none";
	}
}
// 头部搜索图标交互
function get_header_searchicon_position(){
	// $("#id") $(".class") $(obj)
	var top=$("#header_searchicon").offset().top;
	var left=$("#header_searchicon").offset().left;
	$("#header_searchbox").style.top = top + "px";
	$("#header_searchbox").style.right = right + "px";
	// alert(top);
	// alert(left);
}
function click_header_searchicon(){
	document.getElementById("header_searchicon").onclick=function(){
		document.getElementById("header_searchbox").style.display="block";
		document.getElementById("header_remindlist1").style.display="none";
		document.getElementById("header_remindlist2").style.display="none";
	}
}
// $(function(){
// 	$("#header-searchicon").click(function(){
// 		$("#header-searchbox").css("display","block");
// 		$("#header-remindlist1").css("display","none");
// 		$("#header-remindlist2").css("display","none");
// 	});
// });
function hide_header_searchbox(){
	document.getElementById("header_searchbox").onmouseleave=function(){
		this.style.display="none";
	}
}
// 头部私信图标交互
function get_header_remindicon_position(){

}


//设置header_searchbox / header_remindlist左边距
function set_searchbox_remindlist_position(){
	document.getElementById("header_searchbox").style.left=(document.body.clientWidth-1024)/2 + 798 + "px";
	document.getElementById("header_remindlist1").style.left=(document.body.clientWidth-1024)/2 + 753 + "px";
	document.getElementById("header_remindlist2").style.left=(document.body.clientWidth-1024)/2 + 753 + "px";
}
$(function(){
	set_searchbox_remindlist_position();
});
$(window).resize(function() {
	set_searchbox_remindlist_position();
});

function click_header_remindicon(){
	document.getElementById("header_remindicon").onclick=function(){
		document.getElementById("header_remindlist1").style.display="block";
		document.getElementById("header_searchbox").style.display="none";
	}
}
function hide_header_remindlist(){
	document.getElementById("header_remindlist1").onmouseleave=function(){
		this.style.display="none";
	}
	document.getElementById("header_remindlist2").onmouseleave=function(){
		this.style.display="none";
	}
}

// 头部私信列表
function change_header_remindlist(){
	document.getElementById("top_pro1").onclick=function(){
		document.getElementById("header_remindlist1").style.display="block";
		document.getElementById("header_remindlist2").style.display="none";
	}
	document.getElementById("top_cont1").onclick=function(){
		document.getElementById("header_remindlist1").style.display="none";
		document.getElementById("header_remindlist2").style.display="block";
	}
	document.getElementById("top_pro2").onclick=function(){
		document.getElementById("header_remindlist1").style.display="block";
		document.getElementById("header_remindlist2").style.display="none";
	}
	document.getElementById("top_cont2").onclick=function(){
		document.getElementById("header_remindlist1").style.display="none";
		document.getElementById("header_remindlist2").style.display="block";
	}
}

addLoadEvent(contactsIcon);
addLoadEvent(changepro_fri);
addLoadEvent(hidecontactlist);

// addLoadEvent(get_header_searchicon_position);
addLoadEvent(click_header_searchicon);
addLoadEvent(hide_header_searchbox);

// addLoadEvent(get_header_remindicon_position);
addLoadEvent(click_header_remindicon);
addLoadEvent(hide_header_remindlist);
addLoadEvent(change_header_remindlist);





// function click_header_searchicon(){
// 	document.getElementById("header_searchicon").onclick=function(){
// 		document.getElementById("header_searchbox").style.display="block";
// 		document.getElementById("header_remindlist1").style.display="none";
// 		document.getElementById("header_remindlist2").style.display="none";
// 		return true;
// 	}
// }

// addLoadEvent(click_header_searchicon);


// function hide_header(){
// 	document.getElementsByTagName("body")[0].onclick=function(){
// 		// document.getElementById("header_searchbox").style.display="block";
// 		// document.getElementById("header_remindlist1").style.display="none";
// 		// document.getElementById("header_remindlist2").style.display="none";
// 		// return true;
// 		if(document.getElementById("header_searchicon").onclick){
// 			alert("hi");
// 		}else{
// 			alert("hello");
// 		}
		
// 	}
// }
// addLoadEvent(hide_header);