connecting mongodb sever
q[
  {
    "name": "strum",
    "age": 29,
    "work": "no-work",
    "_id": "5a9ea1347eebbe8beebed790"
  }
]

_id : 由 创建时间+机器编码+随机数组成

:db.collection('Todostrum').insertOne({

                 _id:123,    会覆盖自动创建的id
                name:'strum2'

            },(err,result)=>{

                JSON.stringify(result.ops,undefined,2);

                result.ops[0].__id;

               获取数据创建的时间 result.ops[0].__id.getTimestamp();

            });


2: 创建自定义的 id
: 使用 es6 的 destucturing change our require statement
    比如 :名称必须相同

       const {MongoClient,ObjectID} = require('mongodb');

       var obj = new ObjectID();
       console.log(obj);


