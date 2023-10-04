
const express = require('express'); //express 모듈 사용
const app = express();
const bodyParser = require('body-parser');
//크롤링사용
const axios = require('axios');
const cheerio = require('cheerio');




//const ejs = require('ejs');

//ejs확장자 사용하기 위해 선언
app.set('view engine','ejs');
app.set('views','./views');

app.use(express.static('public')); //정적인 파일이 이미지
app.use(bodyParser.urlencoded({extended :false})); // 폼 데이터 post방식 사용위해 미들웨어설정

/*
//루트페이지 
app.get('/' , function(req,res){

  var move_page = `<a href ="/form">form</a>`;
    
  res.send(move_page);
});
*/
//url이 form 이면 form.ejs로 이동 
app.get('/form' , function(req,res){
  res.render('form');
});

//form 에서 post 방식으로 데이터 전송  body
app.post('/form_post' , function(req,res){
  var title = req.body.title;
  var textare = req.body.textare;
  res.send(title+','+textare);
});


//form 에서 get 방식으로 데이터 전송  query
app.get('/form_get' , function(req,res){
  var title = req.query.title; // 클라이언트에서 입력한 값을 쿼리 형식으로 가져온다  req 는 클라이언트에서 title값은 뭐라고 요청을 했음 
  var textare = req.query.textare;
  res.send(title+','+textare);
});

app.get('/topic/:id' , function(req,res){
  var topics = ['javascript i', 'nodejs', 'express'];

  var output =`<a href="topic/0">javascript i</a><br>
           <a href="topic/1">nodejs</a><br>
           <a href="topic/2">express</a><br>
           ${topics[req.params.id]}`;  //params 시멘트url 방식 query는 쿼리스트링 방식

  res.send(output);
});

app.get ('/topic/:id/:mode' , function(req,res){
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


/*
const http = require('http');
const hostname = '127.0.0.1'; // 로컬 호스트
const port = 8080;
const server = http.createServer((req, res) => {

  res.statusCode = 200;

  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

  

});

server.listen(port, hostname, () => {
  console.log(`Server is running at https://${hostname}:${port}/`);
});

//멜론 크롤링
const getHtml = async () => {
  try {
    // 1
    const html = await axios.get("https://www.melon.com/chart/index.htm");
    let ulList = [];
    // 2
    const $ = cheerio.load(html.data);
    // 3
    const bodyList = $("tr.lst50");
    bodyList.map((i, element) => {
      ulList[i] = {
        rank: i + 1,
        // 4
        title: $(element).find("td div.rank01").text().replace(/\s/g, ""),
        artist: $(element).find("td div.rank02 span").text().replace(/\s/g, ""),
      };
    });
    console.log(ulList);
    app.get('/' , function(req,res){

      res.send(ulList);
    });
  } catch (error) {
    console.error(error);
  }
};

getHtml();
*/

