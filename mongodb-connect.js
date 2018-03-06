
/**
 * Created by zhoupengkai on 2018/3/6.
 */


const MongoClient = require('mongodb').MongoClient;

var user = {name:'strum',age:29};
var {name} = user;
console.log(name); //strum

var {namex} = user;
console.log(name); //undeined

MongoClient.connect('mongodb://localhost:27017/Strum0306',(err,db)=>{

    if(err){

        return console.log('err :cant connect mongodb sever');
    }

    console.log('connecting mongodb sever');

    db.collection('Strum').insertOne(
        {name:'strum3',age:29,work:'no-work',rich:false},
        (err,result)=>{
            if(err){
                return console.log(`db:insert error ${err}`);
            }

            console.log(JSON.stringify(result.ops,undefined,2));
    });

    db.close();

})



