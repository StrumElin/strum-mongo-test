/**
 * Created by zhoupengkai on 2018/3/7.
 */

var {mongoose} = require('./database/mongoose');

var {Todo} = require('./models/todoModel');

var {User} = require('./models/userModel');

var express = require('express');

var bodyParser = require('body-parser');

var {ObjectID} = require('mongodb');

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{

    console.log(req.body);

    var reqData =  req.body;

    var todo = new Todo({
        text: reqData.text,
        completed:reqData.completed,
        completeAt:reqData.completeAt
    });

    todo.save().then((result)=>{
        res.status(200).send(result);
    },(e)=>{
        console.log(e);
        res.status(400).send('插入失败')
    })
});

app.get('/todos',(req,res)=>{

    Todo.find().then((todos)=>{

        res.status(200).send({
            todos,
            statusCode:1
        })

    },(e)=>{

        res.status(400).send({
            statusCode:0,
            msg:'cant find todo'
        })

    })

});

app.get('/todos/:id',(req,res)=>{

    var id = req.params.id;

    if(!ObjectID.isValid(id)){
        res.status(400).send('id is not valid');
    }

    Todo.findById(id).then((todo)=>{

        if(!todo){
            res.status(400).send(`${id} is exist`);
        }

        res.status(200).send({todo});

    })



})

app.listen(port,()=>{
    console.log('starting node server port 3000');
})

module.exports = {app};
