
const express = require('express'); //express 모듈 사용
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql'); 
//Router
const indexRouter = require('./routes/index');
const joinRouter = require('./routes/member_join');
const itemsRouter = require('./routes/restapi_test');

/*
const db  = mysql.createConnection({
  host : '192.168.5.133',
  port : '3306',
  user : 'lhs',
  password : '1234',
  database : 'nodejs'
});

db.connect();
*/
//ejs확장자 사용하기 위해 선언
app.set('views','./views');
app.set('view engine','ejs');

app.use(express.static('public')); //정적인 파일이 이미지
app.use(bodyParser.urlencoded({extended :false})); // 폼 데이터 post방식 사용위해 미들웨어설정

//Router 설정
app.use('/',indexRouter);
app.use('/join', joinRouter);
app.use('/api', itemsRouter);





//page 404 이면 해당 내역 출력 서버 실행 위에 배치해야 정상작동
app.use(function(req, res, next) {
  res.status(404).send('404 Sorry cant find that!!');
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

  res.end('Hello World\n');

});


server.listen(port, hostname, () => {
  console.log(`Server is running at https://${hostname}:${port}/`);
});
*/


/*
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

