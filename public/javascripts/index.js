// JavaScrpt Document


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

// 鼠标悬浮，联系人图标变大
function contactButtonBigger(){
	var contactbutt=document.getElementById("contactButton");
	contactbutt.onmouseover=function(){
		// this.style.src="images/展板/联系人（鼠标在上面时）.png"; 
		// alert(this.style.src);
		this.setAttribute("src","images/展板/联系人（鼠标在上面时）.png");
	}
	contactbutt.onmouseout=function(){
		// this.style.src="images/展板/联系人.png"; 
		this.setAttribute("src","images/展板/联系人.png");
	}
}


// 获取下一元素节点
function getNextElement(elem){
	var n=elem.nextSibling;
	while(n.nodeType!=1){
		n=n.nextSibling;
	}
	return n;
}


// 添加按钮
// function displayAddItemButton(){
// 	var contentParas=document.getElementsByTagName("p");
// 	for(var i=0; i<contentParas.length; i++){
// 		if(contentParas[i].className=="content"){
// 			contentParas[i].onmouseover=function(){
// 				var nextList=getNextElement(this.parentNode.parentNode);
// 				nextList.className="addbutton";
// 			}
// 			contentParas[i].onmouseout=function(){
// 				var nextList=getNextElement(this.parentNode.parentNode);
// 				// ???
// 				nextList.onmouseover=function(){
// 					this.className="addbutton";
// 				}
// 				nextList.onmouseout=function(){
// 					this.className="none addbutton";
// 				}
// 				nextList.className="none addbutton";
// 			}
// 		};
// 	}
// }



// 添加便签
function insertDiv(){
	var listElems=document.getElementsByTagName("li");
	for(var i=0;i<listElems.length;i++){
		if(listElems[i].className=="none addbutton"){
			listElems[i].onclick=function(){
				var newPara1=document.createElement("p");
				newPara1.setAttribute("class","title");
				newTextarea1=document.createElement("textarea");
				newTextarea1.setAttribute("placeholder","INSERT TITLE");
				newPara1.appendChild(newTextarea1);

				var newPara2=document.createElement("p");
				newPara2.setAttribute("class","content");
				newTextarea2=document.createElement("textarea");
				newTextarea2.setAttribute("placeholder","INSERT CONTENT");
				newPara2.appendChild(newTextarea2);	

				var newDiv=document.createElement("div");
				newDiv.appendChild(newPara1);
				newDiv.appendChild(newPara2);
				var newListBoard=document.createElement("li");
				newListBoard.setAttribute("class","board");
				newListBoard.appendChild(newDiv);
				this.parentNode.insertBefore(newListBoard,this);

				var newImg=document.createElement("img");
				newImg.setAttribute("src","images/展板/添加.png");
				newImg.setAttribute("alt","添加");
				var newListAddButton=document.createElement("li");
				newListAddButton.setAttribute("class","none addbutton");
				newListAddButton.appendChild(newImg);
				this.parentNode.insertBefore(newListAddButton,newListBoard);
			}
		}
	}
}

addLoadEvent(contactButtonBigger);
// addLoadEvent(displayAddItemButton);
addLoadEvent(insertDiv);