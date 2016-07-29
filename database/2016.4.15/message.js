var mysql=require('mysql');

//添加消息
 function insertMsg(client , obj, callback){
     client.query('insert into message values(?,?,?,?,?)', 
        [obj.time,obj.sender, obj.receiver,obj.content,obj.isread], 
        function(err,result){
         if( err ){
             console.log( "error:" + err.message);
             return err;
         }
           callback(err);
     });
}     

//读取消息
function  selectMsg(client,obj,callback){
     client.query('select * from message where sender="'+obj.sender+'" and receiver="'+obj.receiver+'"',
     	[obj.sender,obj.receiver]
     	function(err,results,fields){
         if(err) throw err;
        
  callback(results);
     });
 }

 //区分已读未读
function updateMsg(client , obj , callback){
    client.query('update message set isread = true where sender ="' + obj.sender + '" and receiver = "' + obj.receiver + '"',
     [obj.sender, obj.receiver], 
     function(err,result){
         if( err ){
            console.log("error:"+err.message);
            return err;
         }
          callback(err);
    });
}

exports.insertMsg = insertMsg;
exports.selectMsg = selectMsg;
exports.updateMsg = updateMsg;