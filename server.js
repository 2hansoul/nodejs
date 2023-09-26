const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//const ejs = require('ejs');

//ejs확장자 사용하기 위해 선언
app.set('view engine','ejs');
app.set('views','./views');

app.use(express.static('public')); //정적인 파일이 이미지
app.use(bodyParser.urlencoded({extended :false})); // 폼 데이터 post방식 사용위해 미들웨어설정

//루트페이지 
app.get('/' ,  function(req,res){

  var move_page = `<a href ="/form">form</a>`;
    
  res.send(move_page);
});

//url이 form 이면 form.ejs로 이동 
app.get('/form' ,  function(req,res){
  res.render('form');
});

//form 에서 post 방식으로 데이터 전송  body
app.post('/form_post' ,  function(req,res){
  var title = req.body.title;
  var textare = req.body.textare;
  res.send(title+','+textare);
});


//form 에서 get 방식으로 데이터 전송  query
app.get('/form_get' ,  function(req,res){
  var title = req.query.title;
  var textare = req.query.textare;
  res.send(title);
});

app.get('/topic/:id' ,  function(req,res){
  var topics = ['javascript i', 'nodejs', 'express'];

  var output =`<a href="topic/0">javascript i</a><br>
           <a href="topic/1">nodejs</a><br>
           <a href="topic/2">express</a><br>
           ${topics[req.params.id]}`;  //params 시멘트url 방식 query는 쿼리스트링 방식

  res.send(output);
});

app.get ('/topic/:id/:mode' ,function(req,res){
    res.send(req.params.id+','+req.params.mode);
});


app.get('/dynamic' ,  function(req,res){
  var lis ='';
  for (var i=0; i<5; i++){
    lis = lis +'<li>coding</li>';
  }
  var time = Date();
  var output = `<!DOCTYPE html>
                <html lang="en">
                  <head>
                      <meta charset="UTF-8">
                      <meta http-equiv="X-UA-Compatible" content="IE=edge">
                      <meta name="viewport" content="width=device-width, initial-scale=1.0">
                      <title>Node.js Test</title>
                  </head>
                  <body>
                      <div>
                         <h2>aaaaa</h2>
                         <ul>
                         ${lis}
                         </ul>
                         ${time}
                        <div>
                  </body>
                </html>`
  res.send(output);
});

app.get('/route' ,  function(req,res){
  res.send('hello router <img src="/imgfile.png">');
});



app.listen(8080, function(){
  console.log('listening on 8080');
});




