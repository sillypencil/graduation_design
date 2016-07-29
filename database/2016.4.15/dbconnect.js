var mysql=require('mysql');
  
  function connectServer(){
 
      var client=mysql.createConnection({
          host:'localhost',
          user:'root',
          password:'root',
          database:'setms'
     })
 
     return client;
 }
 exports.connect = connectServer;