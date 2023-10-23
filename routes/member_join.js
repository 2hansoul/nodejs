const express = require('express');
const router = express.Router();
const app = express();
const bodyParser = require('body-parser');
//const mysql = require('mysql');

//ejs확장자 사용하기 위해 선언
app.set('views','./views');
app.set('view engine','ejs');
a

app.use(bodyParser.urlencoded({extended :false})); // 폼 데이터 post방식 사용위해 미들웨어설정


router.get('/' , function(req,res){
  res.render('form');
});

//form 에서 get 방식으로 데이터 전송  query
router.get('form_get' , function(req,res){

  var title = req.query.title; // 클라이언트에서 입력한 값을 쿼리 형식으로 가져온다  req 는 클라이언트에서 title값은 뭐라고 요청을 했음 
  var textare = req.query.textare;
  res.send(title+','+textare);

});

/*
//form 에서 post 방식으로 데이터 전송  body
router.post('./form_post' , function(req,res){

  const data_insert = { id:req.body.id, pass:req.body.pass, name:req.body.name, email:req.body.email}
  const query = 'INSERT INTO member VALUE ?';


  db.query(query,data_insert, function (error, results) {
    if (error) {
      res.render(error.message);
    }
    res.render(results);
    db.end();
});

  //const query = insert into 
  //res.send(id+','+pass );
});
*/
module.exports = router; //모듈 내보내기