
/*
const express = require('express');
const app = express();



app.listen(8080, function(){
    console.log('listening on 8080');
});
*/




const { assert } = require('console');
const http = require('http');

const hostname = '127.0.0.1'; // 로컬 호스트

const port = 8080;

const server = http.createServer((req, res) => {

  res.statusCode = 200;

  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  

  res.get("/dbconnect.js" ,(req,res) => {
    res
  })

  

});


server.listen(port, hostname, () => {

  console.log(`Server is running at https://${hostname}:${port}/`);

});




