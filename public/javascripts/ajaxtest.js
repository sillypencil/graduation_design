window.onload = function(){
	document.getElementById('button').onclick = function(){
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange=function(){
		  if (xmlhttp.readyState==4 && xmlhttp.status==200){
		    	// document.getElementById('obj').innerHTML = xmlhttp.responseText;
		    	console.log(xmlhttp.responseText)
		    }
		}
		xmlhttp.open("GET", "/ajaxtest/a?t=a&b=c", true);
		xmlhttp.send();
		// xmlhttp.open("POST","/ajaxtest",true);
		// xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		// var data={name:"aaa", attr:"bbb"}
		// xmlhttp.send(params(data));
		// var data='b=c';
		// xmlhttp.send(data);
	}
}

function params(data){
  var arr = [];
  for(var i in data){
    arr.push(encodeURIComponent(i) + "=" + encodeURIComponent(data[i]));
  }
  return arr.join("&");
}