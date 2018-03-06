

1:增: db.collection(xx).insertOne({xx},()=>{});


2:Fetch data: TodoAPI

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

