
 1:postman : let you create HTTP Request and fire them off and see how things work as you move throught you API

  https://www.getpostman.com

 下载 postman

 create our first requesr and we will be firing off a post man request to hit the url you are create

 在postman中去编辑函数的请求体

1: create a http post router for adding new todos


2: 安装 express: npm i express
   安装 body-parse :npm i body-parser : going to let us send json to the server,the server can then take that json and do
                                       sm with it
                                       and it parser body it take string body and turns it into a javascript object

                                       作用:将json转换成Object

   使用方法: middleware : app.user(bodyParser.json());


we can force on getting body data that got sent from the client to do this.



3: test post/todo
mocha tes