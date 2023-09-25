const express = require('express');
const app = express();
const ejs = require('ejs');

app.set('view engine','ejs');
app.set('views','./views');




app.get('/',(req,res) => {
  res.render('index');
});

app.get('/join.ejs',(req,res) => {
  res.render('join');
});

app.listen(8080, function(){
    console.log('listening on 8080');
});


/*
const http = require('http');

const hostname = '127.0.0.1'; // 로컬 호스트

const port = 8080;

const server = http.createServer((req, res) => {
  var _url = request.url;
  
});

server.listen(port, hostname, () => {

  console.log(`Server is running at https://${hostname}:${port}/`);

});
*/

