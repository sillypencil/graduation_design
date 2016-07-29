function getAjax(url, callback, fnFaild){
	if(window.XMLHttpRequest){
		 var oAjax = new XMLHttpRequest();
	}
	else{
		var oAjax= new ActiveXObject("Microsoft.HMLHTTP");
	}
	oAjax.opne('GET', url, ture);

	oAjax.send();

	oAjax.onreadystatechange = function(){
		if(oAjax.readyState ==4 && oAjax.status ==200){
			callback(responseTest);
		}else{
			if(fnFaild){
				fnFaild(oAjax.status);
			}
		}
	}
}

function postAjax(url, data, callback, fnFaild){
	if(window.XMLHttpRequest){
		 var oAjax = new XMLHttpRequest();
	}
	else{
		var oAjax= new ActiveXObject("Microsoft.HMLHTTP");
	}
	oAjax.opne('POST', url, ture);

	oAjax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

	oAjax.send(data);

	oAjax.onreadystatechange = function(){
		if(oAjax.readyState ==4 && oAjax.status ==200){
			callback(responseTest);
		}else{
			if(fnFaild){
				fnFaild(oAjax.status);
			}
		}
	}
}

// ul   
//   li
//   	a 
//   li
//     b


//  button(onlick=getAjax(url, funcyion(result){
//  		//result: {
//  		// 	[d,e,h,h,l]
//  		// }
//  		// zai ul ba result biancheng li d neirong xianshi
//  }, function(error){
//  	当请求出错的时候需要的效果
//  }))   