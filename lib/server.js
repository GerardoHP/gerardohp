const express = require('express');
const debug = require('debug')('app:server');

const app = express();
app.get('/', (req, res) => {
  res.send('Ah perro');
});

app.listen(80, () => debug('Iniciando en puerto 80'));
