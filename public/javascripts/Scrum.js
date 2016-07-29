// JavaScrpt Document


// 信息栏小组信息图标交互
function group_info_ranjintu_icon(){
	var group_info_icon=document.getElementById("group_info_icon");
	var ranjintu_icon=document.getElementById("ranjintu_icon");

	var group_info=document.getElementById("group_info");
	var ranjintu=document.getElementById("ranjintu");

	group_info_icon.onclick=function(){
		if(group_info.style.display=="block"){
			group_info.style.display="none";
			this.style.background="url(../public/images/展板/项目链接1.png) center no-repeat";
			ranjintu.style.display="none";
			ranjintu_icon.style.background="url(../public/images/展板/项目链接2.png) center no-repeat";
		}else{
			group_info.style.display="block";
			this.style.background="url(../public/images/展板/项目链接1.1.png) center no-repeat";
			ranjintu.style.display="none";
			ranjintu_icon.style.background="url(../public/images/展板/项目链接2.png) center no-repeat";
		}
	}

	ranjintu_icon.onclick=function(){
		if(ranjintu.style.display=="block"){
			ranjintu.style.display="none";
			this.style.background="url(../public/images/展板/项目链接2.png) center no-repeat";
			group_info.style.display="none";
			group_info_icon.style.background="url(../public/images/展板/项目链接1.png) center no-repeat";
		}else{
			ranjintu.style.display="block";
			// this.style.background="url(../public/images/展板/项目链接2.1.png) center no-repeat";
			group_info.style.display="none";
			group_info_icon.style.background="url(../public/images/展板/项目链接1.png) center no-repeat";
		}
	}
}
$(function(){
	$("#ranjintu_hidebtn").click(function(){
		$("#ranjintu").hide();
	});
});

// 小组信息_项目成员头像交互
function changePhoto(){
	var divs=document.getElementsByTagName("div");
	for(var i=0; i<divs.length; i++){
		if(divs[i].className=="photo"){
			divs[i].onmouseover=function(){
				this.style.background="url(../public/images/4-10/组员头像.png) center no-repeat";
			}
			divs[i].onmouseleave=function(){
				this.style.background="url(../public/images/4-10/组员头像Z.png) center no-repeat";
			}
		}
	}
}

// function addJQClass(ele,newClass){
// 	var classValue = ele.attr("class");
// 	classValue += " ";
// 	classValue += newClass;
// 	ele.attr("class",classValue);
// }



// 设置堆叠便签位置
function setTagPosition(){
	// alert($(document).width());  // 1349  ?1366-17
	var clientWidth=$(document).width();
	var Z1_left=(clientWidth-1024)/2 + 9;
	Z1_left += "px";
	$("#task").attr("class","Z1");
	$("#task").css("left",Z1_left);

	var Z2_left=(clientWidth-1024)/2 + 6;
	Z2_left += "px";
	$("#requirement").attr("class","Z2");
	$("#requirement").css("left",Z2_left);


	var Y1_left=(clientWidth-1024)/2 + 1024 - 200 - 9;
	Y1_left += "px";
	$("#finish").attr("class","Y1");
	$("#finish").css("left",Y1_left);

	var Y2_left=(clientWidth-1024)/2 + 1024 - 200 - 6;
	Y2_left += "px";
	$("#check").attr("class","Y2");
	$("#check").css("left",Y2_left);	
}
$(function(){
	setTagPosition();
});
$(window).resize(function() {
	setTagPosition();
});


// 插入便签列表_icon
$(function(){
	$(document).on("mouseover",".boardbg_header_title",function(){
		$(this).prev().css("visibility","visible");
		$(this).next().css("visibility","visible");
	});
});
$(function(){
	$(document).on("mouseleave",".boardbg_header",function(){
		$(this).find("img").css("visibility","hidden");
	});
});


// 插入便签列表
$(function(){
	$(document).on("click","img.addnotelisticonZ",function(){
		this.parentNode.parentNode.parentNode.insertBefore(createBoardbg(),this.parentNode.parentNode);
	})
});

$(function(){
	$(document).on("click","img.addnotelisticonY",function(){
		insertAfter(createBoardbg(),this.parentNode.parentNode);
	})
});


// 插入便签_icon
$(function(){
	$(document).on("mouseover",".border_content",function(){
		$(this).next().css("visibility","visible");
	});
});
$(function(){
	$(document).on("mouseleave",".board_border",function(){
		$(this).find("img").css("visibility","hidden");
	});
});


// 插入便签,同时增加当前便签列高
$(function(){
	$(document).on("click",".addnoteicon",function(){
		insertAfter(createLi(),this.parentNode);

		// var boardbg_body=$(".boardbg_body");
		// var oHeight=parseInt($(boardbg_body).css("height"));
		// oHeight += 200;
		// oHeight += "px";
		// $(boardbg_body).css("height",oHeight)

		var current_boardbg_body=$(this).parent().parent().parent();
		var current_height=parseInt($(current_boardbg_body).css("height"));
		current_height += 200;
		current_height += "px";
		$(current_boardbg_body).css("height",current_height);
	});
});






// 堆叠
	// 新建便签列表数组，编号
	// 新建便签列表增加按钮数组，编号 与便签对应
	// 点击左增加按钮，在当前增加按钮前插入按钮，在当前便签列前插入便签列 删除0号
	// 点击右增加按钮，在当前增加按钮后插入按钮，在当前便签列后插入便签列 

	// 便签列固定编号行为固定

// $(function(){
// 	$(document).on("click","img.addnotelisticonZ",function(){
// 		var boardbg=$(".boardbg");
// 		var nodeListArr=new Array(2004);
// 		var index=1000;
// 		for(var i=0; i<boardbg.length; i++){
// 			nodeListArr[index]=boardbg[i];
// 			index++;
// 		}
		
// 		// for(var i=0; i<nodeListArr.length; i++){
// 		// 	var imgs=nodeListArr[i].childNodes;

// 		// 	alert(imgs.length);
// 		// }
// 		this.parentNode.parentNode.parentNode.insertBefore(createBoardbg(),this.parentNode.parentNode);
// 		nodeListArr.splice(0,1);
		
// 		addJQClass(nodeListArr[999],"Z1");
// 		for(var i=0; i<999; i++){
// 			addJQClass(nodeListArr[i],"Z2");
// 		}
// 		addJQClass(nodeListArr[1005],"Y1");
// 		for(var i=1005; i<2004; i++){
// 			addJQClass(nodeListArr[i],"Y2");
// 		}
		
// 	})
// });

// $(function(){
// 	$(document).on("click","img.addnotelisticonY",function(){
// 		var boardbg=$(".boardbg");
// 		var nodeListArr=new Array(2004);
// 		var index=1000;
// 		for(var i=0; i<boardbg.length; i++){
// 			nodeListArr[index]=boardbg[i];
// 			index++;
// 		}
// 		insertAfter(createBoardbg(),this.parentNode.parentNode);
// 		nodeListArr.splice(nodeListArr[nodeListArr.length],0,createBoardbg());
		
// 		addJQClass(nodeListArr[999],"Z1");
// 		for(var i=0; i<999; i++){
// 			addJQClass(nodeListArr[i],"Z2");
// 		}
// 		addJQClass(nodeListArr[1005],"Y1");
// 		for(var i=1005; i<2004; i++){
// 			addJQClass(nodeListArr[i],"Y2");
// 		}
// 	})
// });







// 计算子元素个数,分配class值
// index=1000  设置堆叠索引值
// 在前面插，会取代自身位置； 在前面删一个元素
// 在后面插，自身位置不变        直接在该位置插入一个 都用splice（）
// 但数组没法获取插入的元素

// 如何让一个元素相对另一元素定位？？？？？？？？？？？？？
// jquery里的on？？？？？？？？？？？？？？？？？？？未来事件

// function func(){
// 	var scrum = document.getElementById("scrum");
// 	var nodeList=scrum.childNodes;
// 	var count=0;
	
// 	var boardbgArr=new Array();
// 	// var index=1000;
// 	var index=0;

// 	for(var i=0; i<nodeList.length; i++){
// 		if(nodeList[i].nodeName=="DIV"){
// 			count++;
// 			boardbgArr[index]=nodeList[i];
// 			index++;
// 		}
// 	}

// 	// for(var i=1000; i<boardbgArr.length; i++){
// 	// 	// alert(boardbgArr[i]);
// 	// }
// 	// document.getElementsByTagName("body")[0].onclick=function(){
// 	// 	alert(count);
// 	// }

// 	if(count == 6){
// 		addClass(boardbgArr[0],"Z1");
// 	}
// 	if(count == 7){
// 		addClass(boardbgArr[0],"Z2");
// 		addClass(boardbgArr[1],"Z1");
// 	}
// 	if(count == 8){
// 		addClass(boardbgArr[0],"Z2");
// 		addClass(boardbgArr[1],"Z1");
// 		addClass(boardbgArr[7],"Y1");
// 	}
// 	if(count == 9){
// 		addClass(boardbgArr[0],"Z2");
// 		addClass(boardbgArr[1],"Z1");
// 		addClass(boardbgArr[7],"Y1");
// 		addClass(boardbgArr[8],"Y2");
// 	}
// 	if(count > 9){
// 		addClass(boardbgArr[0],"Z2");
// 		addClass(boardbgArr[1],"Z1");
// 		addClass(boardbgArr[7],"Y1");
// 		addClass(boardbgArr[8],"Y2");
// 		for(var i=9; i< count;i++){
// 			addClass(boardbgArr[i],"Y2");
// 		}
// 	}
// }













// 创建一个新boardbg
function createBoardbg(){
	// boardbg_header
	var addnotelisticonZ=document.createElement("img");
	addnotelisticonZ.setAttribute("class","addnotelisticonZ");
	addnotelisticonZ.setAttribute("src","../public/images/展板/添加Z.png");
	addnotelisticonZ.setAttribute("alt","添加");

	var newText=document.createTextNode("INSERT TITLE");
	var boardbg_header_title=document.createElement("h1");
	boardbg_header_title.setAttribute("class","boardbg_header_title");
	boardbg_header_title.appendChild(newText);

	var addnotelisticonY=document.createElement("img");
	addnotelisticonY.setAttribute("class","addnotelisticonY");
	addnotelisticonY.setAttribute("src","../public/images/展板/添加Y.png");
	addnotelisticonY.setAttribute("alt","添加");

	var boardbg_header=document.createElement("div");
	boardbg_header.setAttribute("class","boardbg_header");
	boardbg_header.appendChild(addnotelisticonZ);
	boardbg_header.appendChild(boardbg_header_title);
	boardbg_header.appendChild(addnotelisticonY);

	// boardbg_body
	var newUl=document.createElement("ul");
	newUl.appendChild(createLi());
	newUl.appendChild(createLi());

	var boardbg_body=document.createElement("div");
	boardbg_body.setAttribute("class","boardbg_body");
	boardbg_body.appendChild(newUl);

	// boardbg
	var boardbg=document.createElement("boardbg");
	boardbg.setAttribute("class","boardbg");
	boardbg.appendChild(boardbg_header);
	boardbg.appendChild(boardbg_body);

	return boardbg;
}
// 创建一个便签
function createLi(){
	// border_cont
	var newText1=document.createTextNode(" ");
	var newPara1=document.createElement("p");
	newPara1.setAttribute("class","title");
	newPara1.setAttribute("contenteditable","false");
	newPara1.appendChild(newText1);

	var newText2=document.createTextNode(" ");
	var newPara2=document.createElement("p");
	newPara2.setAttribute("class","content");
	newPara2.setAttribute("contenteditable","false");
	newPara2.appendChild(newText2);

	var newText3=document.createTextNode("修改便签");
	var newPara3=document.createElement("p");
	newPara3.setAttribute("class","modify");
	newPara3.appendChild(newText3);

	var newText4=document.createTextNode("完成");
	var newPara4=document.createElement("p");
	newPara4.setAttribute("class","modifydone");
	newPara4.appendChild(newText4);

	var newDiv=document.createElement("div");
	newDiv.setAttribute("class","border_content");
	newDiv.appendChild(newPara1);
	newDiv.appendChild(newPara2);
	newDiv.appendChild(newPara3);
	newDiv.appendChild(newPara4);

	// addnoteicon
	var addnoteicon=document.createElement("img");
	addnoteicon.setAttribute("class","addnoteicon");
	addnoteicon.setAttribute("src","../public/images/展板/添加.png");
	addnoteicon.setAttribute("alt","添加");

	// board_border
	var newLi=document.createElement("li");
	newLi.setAttribute("class","board_border");
	newLi.appendChild(newDiv);
	newLi.appendChild(addnoteicon);

				
	return newLi;
}


// // 添加便签内容
// function addTagContent(){
// 	var listElems=document.getElementsByTagName("li");
// 	for(var i=0; i<listElems.length; i++){
// 		if(listElems[i].className="board"){
// 			listElems[i].onclick=function(){
// 				var addBox=document.getElementById("addbox");
// 				addbox.style.display="block";
// 				document.getElementById("cancle").onmouseover=function(){
// 					// addbox.style.display="none";
// 					alert("hello");
// 				}
// 				// document.getElementById("sure").onclick=function(){
// 					// addbox.style.display="none";
// 				// }
// 			}			
// 		}
// 	}
// }
// addLoadEvent(addTagContent);





// 信息栏小组信息图标交互
addLoadEvent(group_info_ranjintu_icon);
addLoadEvent(changePhoto);


















// test   
// sucss?
// $(function(){
// 	while($(document).width() != 1349){
// 		alert($(document).width());
// 	}
// });






$(function(){
	$("#group_info").css("left",($(window).width()-876)/2);
});
$(window).resize(function(){
	$("#group_info").css("left",($(window).width()-876)/2);
});