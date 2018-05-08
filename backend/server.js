const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const api = require('./api/api');

const data = api();

data.newProvider("provider1", require('./data/provider1'));
data.newProvider("provider2", require('./data/provider2'));
data.newProvider("provider3", require('./data/provider3'));

data.treatData();
