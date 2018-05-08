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

console.log(JSON.stringify(data.allLocations("departure")));
console.log(JSON.stringify(data.allLocations("destination")));
console.log(JSON.stringify(data.searchProviders("YYC", "YYZ")));

app.get('/locations', (req, res) => {
  res.json({"departure": data.allLocations("departure"),
            "destination": data.allLocations("destination")});
});

app.listen(8080, () => {
  console.log('server on 8080');
})