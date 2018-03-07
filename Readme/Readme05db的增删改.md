
启动mongodb  cd 到 bin目录 然后 mongod --dbpath ~/mongo-data

1:增: db.collection(xx).insertOne({xx},()=>{});


2:查询 Fetch data: TodoAPI

  获取 xxx collections 的所有Document

   // Creat collection
    var collection = db.collection('strum');

  db.collection('xxx').find().toArray().then((docs)=>{

    console.log(JSON.stringify(docs,undefined,2);

  },(err)=>{
      console.log(xyyyyy)
  });

  find 里面可以有查询条件  .find({xxx:true})

  find _id 查询 5a9eae015800d98f932aba00  find({_id:new ObjectID('5a9eae015800d98f932aba00')})

   //如果查询条件没有找到 不会进入 then 的 错误回调 ,会返回一个空数组


3:删除delete

deleteMany:
collection.deleteMany({name:'zpk'}).then((result)=>{

});

deleteOne:
collection.deleteOne({name:'zpk'}).then((result)=>{
    console.log(result);
})


findOneAndDelete: 常用 比如使用_id去删除
collection.findOneAndDelete({rich:false}).then((result)=>{
    console.log(result)
})


4: 更新update

findOneAndUpdate(filter,update,options,callback) 返回promise 如果没有 callback

update:
https://docs.mongodb.com/manual/reference/operator/update/min/
{$inc:{age:2}}, 表示对原来属性 age的值 +2
{$set:{name:'strum'}} 将原来属性 name 改为strum
{$rename:{work:'swork'}}


optional
Optional settings.
Name	         Type	Default  	Description
projection	    object	  null	    Limits the fields to return for all matching documents.

sort	        object	  null	    Determines which document the operation modifies if the query selects multiple documents.

maxTimeMS	    number    null	    The maximum amount of time to allow the query to run.

upsert	        boolean	  false	    Upsert the document if it does not exist.

returnOriginal	boolean	   true	    When false, returns the updated document rather than the original. The default is true.

Returns:

Promise if no callback passed


var MongoClient = require('mongodb').MongoClient,

test = require('assert');

MongoClient.connect('mongodb://localhost:27017/test', function(err, db) {

  // Get the collection
  var col = db.collection('find_one_and_update');

  col.insertMany([{a:1, b:1}], {w:1}, function(err, r) {
    test.equal(null, err);
    test.equal(1, r.result.n);


   col.findOneAndUpdate({a:1}
      , {$set: {d:1}}
      , {
            projection: {b:1, d:1}
          , sort: {a:1}
          , returnOriginal: false   // 如果 true 打印出来的就是更新前的数据    false 打印出来是更新后的数据
          , upsert: true
        }
      , function(err, r) {

        db.close();
    });
  });
});

https://docs.mongodb.com/manual/reference/operator/update/











