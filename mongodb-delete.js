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

    collection.deleteMany({name:'zpk'}).then((result)=>{
        console.log('deleteMany',result.result);  // result: { n: 3, ok: 1 },....
    })


    collection.deleteOne({name:'strum'}).then((result)=>{
        console.log('deleteOne',result.result); //deleteOne { n: 1, ok: 1 }
    })

    collection.findOneAndDelete({
        _id:new ObjectID('5a9eae015800d98f932aba00')
    }).then((result)=>{
        console.log(result);
    })

    db.close();
})