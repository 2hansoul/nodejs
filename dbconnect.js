const mysql = require('mysql2');

const connection  = mysql.createConnection({
  host : '3.37.132.55',
  port : '3306',
  user : 'hansol',
  password : 'Adda7494*0',
  database : 'nodedata'
});


// 데이터베이스에 연결합니다.
connection.connect((err) => {
    if (err) {
      console.error('데이터베이스 연결 오류: ' + err.stack);
      return;
    }
    console.log('데이터베이스에 연결되었습니다.');
  });

 connection.query('select id from test', function(error,results,fields) {

    if (error) throw error;
    console.log('id',results);
 });;


 connection.end();
  
  
  
  
  


