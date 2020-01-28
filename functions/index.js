const express = require('express');
const functions = require('firebase-functions');
const path = require('path');
const fs = require('fs');
// const serverRender = require('../src/renderers/server');

const app = express();

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/cv', (req, res) => {
  const pdf = path.resolve(__dirname, 'GeardoHernandez_CV.pdf');
  console.log(pdf);
  const stream = fs.createWriteStream(pdf);
  res
    .pipe(stream)
    .on('finish', () => {
      console.log(`The file is finished downloading.`);
      resolve();
    })
    .on('error', error => {
      reject(error);
    });
});

app.get('/', (req, res) => {
  // const { initialMarkup } = serverRender();
  res.render('index');
});

exports.app = functions.https.onRequest(app);
