const express = require('express');
const router = express.Router();
const app = express();
const bodyParser = require('body-parser');
//const mysql = require('mysql');

//ejsȮ���� ����ϱ� ���� ����
app.set('views','./views');
app.set('view engine','ejs');
a

app.use(bodyParser.urlencoded({extended :false})); // �� ������ post��� ������� �̵�����


router.get('/' , function(req,res){
  res.render('form');
});

//form ���� get ������� ������ ����  query
router.get('form_get' , function(req,res){

  var title = req.query.title; // Ŭ���̾�Ʈ���� �Է��� ���� ���� �������� �����´�  req �� Ŭ���̾�Ʈ���� title���� ����� ��û�� ���� 
  var textare = req.query.textare;
  res.send(title+','+textare);

});

/*
//form ���� post ������� ������ ����  body
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
module.exports = router; //��� ��������