const mysql = require('mysql');  //어쩔때는 mysql 해야되고 어쩔때는 mysql2 해야되고 이유를

const connection  = mysql.createConnection({
  host : '192.168.5.133',
  port : '3306',
  user : 'lhs',
  password : '1234',
  database : 'nodejs'
});


// 데이터베이스에 연결합니다.
connection.connect((err) => {
    if (err) {
      console.error('데이터베이스 연결 오류: ' + err.stack);
      return;
    }
    console.log('데이터베이스에 연결되었습니다.');
  });




 connection.end();
  
  
  
  
  


