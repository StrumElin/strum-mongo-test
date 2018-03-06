

1: connect you node application to the mongodb database :insert updata delete


2:
Mongo DB Native NodeJS Driver
https://github.com/mongodb/node-mongodb-native

The official MongoDB driver for Node.js.
Provides a high-level API on top of mongodb-core that is meant for end users.

npm install mongodb@2.2 --save


3:创建 mongodb-connect.js

3.1: pull something out of the library .
     mongo client let you connect a mongo server and issue[发布] commands to mainpulate the database

    const MongoClient = require('mongodb').MongoClient;

    通过 MongoClinet connect方法  to connect database

    MongoClient.connect(参数1,回调);

    参数1: a string going to be you url where you database lives now in a production like heroku URL 或者 localhost url;

    回调: 回调当 connection has either successed or failed

    'test'是mongodb 默认给你创建的

//如果想创建一个新的 database 给一个名字就可以的了 比如 TodoApp

但是TodeApp database was never create even thought we connected to it

Mongo is not goint to create the database until we start adding data into it

     MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db)=>{

            我们可以使用 db to issue commands to read and write data


        db命令:

            var collection = db.collection('strum');
            collection.find
            collection.insertOne

              创建collection
            :db.collection('Todostrum').insertOne({

                name:'strum2'

            },(err,result)=>{

                JSON.stringify(result.ops,undefined,2);

            });


            : db.close() 关闭与database服务 的连接


     });
     买的


 4: 使用 es6 的 destucturing change our require statement
    比如 :名称必须相同

       const {MongoClient,ObjectID} = require('mongodb');