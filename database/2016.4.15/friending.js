var mysql=require('mysql');

//添加好友申请
 function insertApply(client , obj, callback){
     client.query('insert into friending values(?,?,?,?,?)', 
        [obj.applyer, obj.receiver,obj.result,obj.sendtime,obj.dealtime], 
        function(err,result){
         if( err ){
             console.log( "error:" + err.message);
             return err;
         }
           callback(err);
     });
}     

//查询好友申请（含去除applyer和receiver相同的查询）
function  selectcomment(client,receiver,callback){
     client.query('select distinct applyer,receiver from friending where receiver="'+receiver+'"',
     	function(err,results,fields){
         if(err) throw err;
        
  callback(results);
     });
 }

 //更新申请信息
function updateApply(client , obj , callback){
    client.query('update friending set result =? ,dealtime =? 
    	where applyer ="' + obj.applyer + '" and receiver ="' + obj.receiver + '" and result = null',
     [obj.result, obj.dealtime], 
     function(err,result){
         if( err ){
            console.log("error:"+err.message);
            return err;
         }
          callback(err);
    });
}

   exports.insertApply = insertApply;
   exports.selectcomment = selectcomment;
   exports.updateApply = updateApply;