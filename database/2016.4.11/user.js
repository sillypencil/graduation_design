var mysql=require('mysql');

//登录密码验证（查找）
 function  selectPassword(client,email,callback){
     //client为一个mysql连接对象
     client.query('select password from user where email="'+email+'"',function(err,results,fields){
         if(err) throw err;
        
  callback(results);
     });
 }
 
 //添加用户信息(注册)
 function insertUser(client , obj, callback){
     client.query('insert into user values(password,email,phone,name,sex,snumber,identity)', 
        [obj.password, obj.email, obj.phone, obj.name, obj.sex, obj.snumber, obj.identity], 
        function(err,result){
         if( err ){
             console.log( "error:" + err.message);
             return err;
         }
           callback(err);
     });
 }
 
//修改用户信息
function updateUser(client , obj , callback){
    client.query('update user set password =? ,phone =? ,name =? ,sex =? ,snumber =? ,identity =? where email ="' + obj.email + '"',
     [obj.password, obj.phone, obj.name, obj.sex, obj.snumber, obj.identity], 
     function(err,result){
         if( err ){
            console.log("error:"+err.message);
            return err;
         }
          callback(err);
    });
}
 exports.selectPassword  = selectPassword;
 exports.insertUser = insertUser;
 exports.updateUser = updateUser;

//select类的
 //  function  funName(client,items...,callback){
 //     //client为一个mysql连接对象
 //     client.query('',function(err,results,fields){
 //         if(err) throw err;
        
 //  callback(results);
 //     });
 // }

