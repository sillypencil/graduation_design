var mysql=require('mysql');

//新增任务
 function insertTask(client , obj, callback){
     client.query('insert into task values(?,?,?,?,?,?,?)', 
        [obj.name, obj.content, obj.days, obj.personnum, obj.stage, obj.startdate,obj.pnumber], 
        function(err,result){
         if( err ){
             console.log( "error:" + err.message);
             return err;
         }
           callback(err);
     });
}     


//修改任务信息
function updateTask(client , obj , callback){
    client.query('update task set name =? ,content =? ,days =? ,personnum =? ,stage =? ,startdate =? ,pnumber =? where tnumber ="' + obj.tnumber + '"',
     [obj.name, obj.content, obj.days, obj.personnum, obj.finish, obj.startdate, obj.pnumber], 
     function(err,result){
         if( err ){
            console.log("error:"+err.message);
            return err;
         }
          callback(err);
    });
}

//删除任务
 function  deleteTask(client,tnumber,callback){
     client.query('delete from task where tnumber="'+tnumber+'"',function(err,results,fields){
         if(err) throw err;
        
  callback(results);
     });
 }

//根据所属项目编号的精确查询
function  selectTnum(client,pnumber,callback){
     client.query('select name,content,stage,startdate from task where pnumber="'+pnumber+'"',function(err,results,fields){
         if(err) throw err;
        
  callback(results);
     });
 }


//根据任务编号获取任务的所以信息
function  selectAtask(client,tnumber,callback){
     client.query('select * from task where tnumber="'+tnumber+'"',function(err,results,fields){
         if(err) throw err;
        
  callback(results);
     });
 }





exports.insertTask = insertTask;
exports.updateTask = updateTask;
exports.deleteTask = deleteTask;
exports.selectTnum = selectTnum;
exports.selectAtask = selectAtask;
 