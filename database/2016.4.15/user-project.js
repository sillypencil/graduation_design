var mysql=require('mysql');

//新建用户与项目之间的关系
 function insertRup(client , obj, callback){
     client.query('insert into user-project values(?,?)', 
        [obj.email, obj.pnumber], 
        function(err,result){
         if( err ){
             console.log( "error:" + err.message);
             return err;
         }
           callback(err);
     });
}     

//根据用户查询其参与的项目
function  selectProByUser(client,email,callback){
     client.query('select name,pnumber from project where pnumber in 
     	(select pnumber from user-project where email="'+email+'")',
     	function(err,results,fields){
         if(err) throw err;
        
  callback(results);
     });
 }


//根据项目查询其参与者
function  selectProByPro(client,pnumber,callback){
     client.query('select name,email from user where email in 
     	(select email from user-project where pnumber="'+pnumber+'")',
     	function(err,results,fields){
         if(err) throw err;
        
  callback(results);
     });
 }


exports.insertRup = insertRup;
exports.selectProByUser = selectProByUser;
exports.selectProByPro = selectProByPro;
