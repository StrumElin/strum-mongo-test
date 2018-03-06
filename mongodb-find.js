/**
 * Created by zhoupengkai on 2018/3/6.
 */

const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/Strum0306',(err,db)=>{

    if(err){
        return console.log('cant connect mongodb');
    }

    var collection =  db.collection('Strum');

    collection.find().count(function(err,count){

        console.log(`collection Strum document count : ${count}`);

    })


    db.collection('Strum')
        .find({rich:false})
        .toArray()
        .then((result)=>{
            console.log('rich-->')
            console.log(JSON.stringify(result,undefined,2));
            //console.log(JSON.stringify(result,undefined,2));

    },(err)=>{
            console.log('cant find ')
        });

    db.collection('Strum')
        .find({_id:new ObjectID('5a9eae015800d98f932aba00')})
        .toArray()
        .then((result)=>{
            console.log('id-->')
            console.log(JSON.stringify(result,undefined,2));
            //console.log(JSON.stringify(result,undefined,2));

        },(err)=>{
            console.log('cant find ')
        });


    db.collection('Strum')
        .find({_id:new ObjectID('5a9eae015800d98f932aba0e')})
        .toArray()
        .then((result)=>{
            console.log('id-->')
            console.log(JSON.stringify(result,undefined,2));
            //console.log(JSON.stringify(result,undefined,2));

        },(err)=>{
            console.log('id-->cant find ')
        });


    db.close();


})