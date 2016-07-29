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

	data = params(data);
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

function params(data){
  var arr = [];
  for(var i in data){
    arr.push(encodeURIComponent(i) + "=" + encodeURIComponent(data[i]));
  }
  return arr.join("&");
}