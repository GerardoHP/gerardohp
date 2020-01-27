const express = require('express');
const functions = require('firebase-functions');
const debug = require('debug')('app:server');
const serverRender = require('../src/renderers/dom');

const d = debug('app:server');
const app = express();

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const { initialMarkup } = serverRender();
  res.render('index', { initialMarkup });
});

exports.app = functions.https.onRequest(app);
