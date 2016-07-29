var mysql=require('mysql');

//新增项目
 function insertPro(client , obj, callback){
     client.query('insert into project values(?,?,?,?,?,?,?,?)', 
        [obj.name, obj.intro, obj.cycle, obj.days, obj.content, obj.pnumber, obj.finish, obj.startdate], 
        function(err,result){
         if( err ){
             console.log( "error:" + err.message);
             return err;
         }
           callback(err);
     });
}     


//修改项目信息
function updatePro(client , obj , callback){
    client.query('update project set name =? ,intro =? ,cycle =? ,days =? ,content =? ,finish =? ,startdate =? where pnumber ="' + obj.pnumber + '"',
     [obj.name, obj.intro, obj.cycle, obj.days, obj.content, obj.finish, obj.startdate], 
     function(err,result){
         if( err ){
            console.log("error:"+err.message);
            return err;
         }
          callback(err);
    });
}

//删除项目
 function  deletePro(client,pnumber,callback){
     client.query('delete from project where pnumber="'+pnumber+'"',function(err,results,fields){
         if(err) throw err;
        
  callback(results);
     });
 }

//根据项目编号的精确查询
function  selectPnum(client,pnumber,callback){
     client.query('select name from project where pnumber="'+pnumber+'"',function(err,results,fields){
         if(err) throw err;
        
  callback(results);
     });
 }

//根据关键字的模糊查询
function  selectKwd(client,Kwd,callback){
     client.query('select name from project where name like %"'+Kwd+'"%',function(err,results,fields){
         if(err) throw err;
        
  callback(results);
     });
 }

//根据项目编号获取所有项目信息
function  selectPro(client,pnumber,callback){
     client.query('select * from project where pnumber="'+pnumber+'"',function(err,results,fields){
         if(err) throw err;
        
  callback(results);
     });
 }


      exports.insertPro = insertPro;
      exports.updatePro = updatePro;
      exports.deletePro = deletePro;
      exports.selectPnum = selectPnum;
      exports.selectKwd = selectKwd;
      exports.selectPro = selectPro;
 