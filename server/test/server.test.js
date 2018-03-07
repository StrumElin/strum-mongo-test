/**
 * Created by zhoupengkai on 2018/3/7.
 */

var expect = require('expect');

var request = require('supertest'); //专门为express而生

var {app} = require('./../server');

var {Todo} =  require('./../models/todoModel')

const todos = [{
    text:'first test todo',
},{
    text:'second test todo'
}]

//如果测试之前 删除所有的Todo数据
beforeEach((done)=>{

   Todo.remove({}).then(()=>{

      return  Todo.insertMany(todos);

   }).then(()=>{
       // insertMany的 promise回调
       done();
   })
});


describe('POST/todos',()=>{

    it('should create a new todo',(done)=>{

        var text = 'test todo text';

        request(app)
            .post('/todos')
            .send({text})
            .expect(200)
            .expect((res)=>{
                expect((res.body.text)).toBe(text);
        }).end((err,res)=>{

            if(err){
                return done(err);
            }

            Todo.find().then((todos)=>{

                expect(todos[0].text).toBe(text);
                done();
            }).catch((e)=>{
                done(e);
            })


        })

    })

})





