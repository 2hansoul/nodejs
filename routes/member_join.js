const express = require('express');
const router = express.Router();
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
//supervisor  서버 백그라운드 실행

const db  = mysql.createConnection({
  host : '192.168.5.133',
  port : '3306',
  user : 'lhs',
  password : '1234',
  database : 'nodejs'
});

db.connect((err) =>{
  if(err){
    console.error('connecting to dbatabase' + err.stack);
    return;
  }else{
    console.log('connection success')
  }
});

//ejs확장자 사용하기 위해 선언
app.set('views','./views');
app.set('view engine','ejs');


app.use(bodyParser.urlencoded({extended :false})); // 폼 데이터 post방식 사용위해 미들웨어설정


router.get('/' , function(req,res){
  res.render('join');
});

//form 에서 get 방식으로 데이터 전송  query
router.get('/form_get' , function(req,res){

  var id = req.query.id; // 클라이언트에서 입력한 값을 쿼리 형식으로 가져온다  req 는 클라이언트에서 title값은 뭐라고 요청을 했음 
  var pass = req.query.pass;
  res.send(id+','+pass);

});


//form 에서 post 방식으로 데이터 전송  body
router.post('/form_post' , function(req,res){

  if(req.method === 'POST'){
    const data_insert = { id:req.body.id, pass:req.body.pass};
    res.send(data_insert);
  }
  
  
});

module.exports = router; //모듈 내보내기