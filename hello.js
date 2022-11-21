const express = require('express');
const app = express();
app.set('view engine', 'pug');
require('dotenv').config()

/* const http = require('http');

const hostname = 'localhost'; */
const port = 3000;

app.get('/', (req, res) => {
  res.render('index');
});



const server = app.listen(port, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});

/* const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hellooo World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); */
