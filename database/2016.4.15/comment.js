var mysql=require('mysql');

//新建评论
 function insertComment(client , obj, callback){
     client.query('insert into comment values(?,?,?,?)', 
        [obj.content, obj.time, obj.tnumber, obj.evaluator], 
        function(err,result){
         if( err ){
             console.log( "error:" + err.message);
             return err;
         }
           callback(err);
     });
}     

//查询评论
function  selectcomment(client,tnumber,callback){
     client.query('select content,time,tnumber,evaluator from comment where tnumber="'+tnumber+'"',function(err,results,fields){
         if(err) throw err;
        
  callback(results);
     });
 }

 //删除评论
 function  deleteComment(client,id,callback){
     client.query('delete from comment where id="'+id+'"',function(err,results,fields){
         if(err) throw err;
        
  callback(results);
     });
 }

 exports.insertComment = insertComment;
 exports.selectcomment = selectcomment;
 exports.deleteComment = deleteComment;