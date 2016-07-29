var mysql=require('mysql');

//添加好友
 function insertFriend(client , obj, callback){
     client.query('insert into user-user values(?,?,?)', 
        [obj.user1, obj.user2,obj.isFriend], 
        function(err,result){
         if( err ){
             console.log( "error:" + err.message);
             return err;
         }
           callback(err);
     });
}     

//查询好友
function  selectFriend(client,email,callback){
     client.query('select * from user-user where user1 = "'+email+'" or user2 = "'+email+'"
     	and user1 not in (select user2 from user-user where user1 = "'+email+'")',
     	function(err,results,fields){
         if(err) throw err;
        
  callback(results);
     });
 }

  //删除好友关系
 function  deleteFriend(client,id,callback){
     client.query('delete from user-user where id="'+id+'"',
     	function(err,results,fields){
         if(err) throw err;
        
  callback(results);
     });
 }

exports.insertFriend = insertFriend;
exports.selectFriend = insertFriend;
exports.deleteFriend = deleteFriend;