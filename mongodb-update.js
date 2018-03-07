/**
 * Created by zhoupengkai on 2018/3/7.
 */
/**
 * Created by zhoupengkai on 2018/3/7.
 */

const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Strum0306',(err,db)=>{

    if(err){
        return console.log('cant connect mongodb');
    }

    console.log('connecting mongodb');

    var collection = db.collection('Strum');

    collection.findOneAndUpdate(

        {_id:new ObjectID('5a9f43212ac22d88e5834a70')},

        {$set:{name:'strumzpk_zpk'}}, //修改属性值

        {returnOriginal:false },

         (err,res)=>{

            console.log('update set',res);
         }
    )

    collection.findOneAndUpdate(

        {_id:new ObjectID('5a9f43212ac22d88e5834a70')},

        {$inc:{age:2}},     //属性值+2

        {returnOriginal:false },

        (err,res)=>{

            console.log('update inc',res);
        }
    )

    collection.findOneAndUpdate(

        {_id:new ObjectID('5a9f43212ac22d88e5834a70')},

        {$rename:{work:'strumwork'}}, //属性重命名

        {returnOriginal:false },

        (err,res)=>{

            console.log('update rename ',res);
        }
    )
    db.close();
})