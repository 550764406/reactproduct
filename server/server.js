const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParse = require('body-parser');
const router = express.Router();//配置路由
var app = express();
//创建 application/x-www-form-urlencoded 解析
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: true }));

//访问静态资源
app.use(express.static(path.resolve(__dirname,'../../public/')));

//路由中间件
router.use((req,res,next)=>{
    //任何路由都会执行这里
    console.log('api req');
    next();
    //交给下一个中间件
})

router.get('/list',(req,res)=>{
    const list = [
        {
            name: "张三",
            age: 20
        },
        {
            name: "李四",
            age: 18
        },
    ]
    //console.log(res.json(list))
    res.json(list);
});
app.use('/api',router); //为所有路由添加api前缀

//访问单页
app.get('*',function (req,res) {
    //读取文本
    // res.send('<h1>ggggg</h1>');

    //读取文件
    // let html = fs.readFileSync((
    //     path.resolve(__dirname,'../public/robots.txt')
    // ),'utf-8');
    // res.send(html);

    //读取图片
    fs.readFile('../public/logo192.png','binary',function (err,file) {
        if(err){
            console.log(err);
            return;
        }
        else {
            res.write(file,'binary');
            res.end();
        }
    })
})

app.listen('9001',function () {
    console.log('9001 start');
})