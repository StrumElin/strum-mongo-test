
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


4: 更新














