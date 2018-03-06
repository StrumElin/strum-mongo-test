
1:
安装MongoDB

https://www.mongodb.com

下载mongodb 然后加压 重新命名文件夹名称
比如 mongo
然后创建 mongo-data 文件夹 它将存储数据到数据库

打开命令行 进入  mongo 的 bin 文件夹中

几个买了: mongod 开启数据库服务
         mongo  让我们与数据库建立连接


步骤1: 在 bin 目录下:
dipath参数 指向之前创建的  mongo-data 文件夹
$ mongod --dbpath ~/mongo-data

> [thread1] waiting for connections on port 27017

步骤2:在 bin 目录下   与mongo db建立连接 测试是否正常工作
$ mongo

命令: 插入 语句
> db.Todos.insert({text:'strum node'})
WriteResult({ "nInserted" : 1 })

命令: 查询 语句
> db.Todos.find()
{ "_id" : ObjectId("5a9e8b3ad3f56960cacda582"), "text" : "strum node" }



2: 下载 roboMongo : user interface for managing your Mongo database
                    you are able to view the exact data saved in the database
https://robomongo.org/download

第一次打开 robomongo 有一个框 点击 create 然后输入名称


