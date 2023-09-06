

const express = require('express');
const app = express();


app.get("/", (req,res) => {

  res.send("root page");

});


app.get("/user/:id", (req,res) => {
  const q = req.params
  console.log(q);

  res.json({'userid' : q.id});

});

app.get("/sound/:name", (req,res) => {
  const { name } = req.params

  console.log(name);

  if(name == "dog"){
    res.json({'sound' : 'warwar'});
  }else if (name == "cat"){
    res.json({'sound' : 'mimi'});
  }

  

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

  res.setHeader('Content-Type', 'text/plain');

  res.end('Hello, World111111111111!\n');

});

server.listen(port, hostname, () => {

  console.log(`Server is running at https://${hostname}:${port}/`);

});
*/