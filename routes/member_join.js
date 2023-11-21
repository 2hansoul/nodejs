const express = require('express');
const router = express.Router();
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
//supervisor  ���� ��׶��� ����

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

//ejsȮ���� ����ϱ� ���� ����
app.set('views','./views');
app.set('view engine','ejs');


app.use(bodyParser.urlencoded({extended :false})); // �� ������ post��� ������� �̵�����


router.get('/' , function(req,res){
  res.render('join');
});

//form ���� get ������� ������ ����  query
router.get('/form_get' , function(req,res){

  var id = req.query.id; // Ŭ���̾�Ʈ���� �Է��� ���� ���� �������� �����´�  req �� Ŭ���̾�Ʈ���� title���� ����� ��û�� ���� 
  var pass = req.query.pass;
  res.send(id+','+pass);

});


//form ���� post ������� ������ ����  body
router.post('/form_post' , function(req,res){

  if(req.method === 'POST'){
    const data_insert = { id:req.body.id, pass:req.body.pass};
    res.send(data_insert);
  }
  
  
});

module.exports = router; //��� ��������