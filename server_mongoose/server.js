/**
 * Created by zhoupengkai on 2018/3/7.
 */

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

console.log('connect start');

mongoose.connect('mongodb://localhost:27017/Strum0307');

//创建一个model
var Cat = mongoose.model('Cat',{
    name:{
        type:String,
    },
    age:{
        type:Number,
    },
    health:{
        type:Boolean
    }
})

//实例化modle
var cat = new Cat({name:'strum',age:0,health:true});

//将modle存储至数据了
cat.save().then((res)=> {
    console.log('save cat 1' ,res);
}
)

var cat2 = new Cat({name:'strum2',age:1,health:true});

//将modle存储至数据了
cat2.save().then((res)=> {
        console.log('save cat 2' ,res);
    }
)

//************  validator 验证器 *************

var  Dog = mongoose.model('Dog',{
    name:{
        type:String,
        required:true,
        trim:true,
        minlength:1,
        unique:true
    },

    age:{
        type:Number,
        required:true,
        mix:[1,'why not live']

    },

    nationality:{
        type:String,
        default:'China',
    },

    health:{
        type:Boolean,
        default:true
    }

});

var d1 = new Dog({

    age:0,
})

d1.save().then((res)=>{console.log('d1',res)})
//
//var d2 = new Dog({
//    name:'strum',
//    age:2,
//    nationality:'usa',
//    health:false
//})
//
//d2.save().then((res)=>{console.log('d2',res)})

console.log('connect success');
