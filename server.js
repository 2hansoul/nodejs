const express = require('express');
const router_test = require('./routes/router');
const join = require('./routes/join_act');
const app = express();
const ejs = require('ejs');


//ejs 사용하기 위함
/*
app.set('view engine','ejs');
app.set('views','./views');
*/


//app.use(require('./routes/router'));
app.use(router_test);
//app.use('/join_act' , join);



app.listen(8080, function(){
  console.log('listening on 8080');
});



/*
const http = require('http');

const hostname = '127.0.0.1'; // 로컬 호스트

const port = 8080;

const server = http.createServer((req, res) => {

  
});

server.listen(port, hostname, () => {

  console.log(`Server is running at https://${hostname}:${port}/`);

});
*/

