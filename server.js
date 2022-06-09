
var express = require('express');
var app = express();
var dict = new Map();
var famousComics = [];
var cors = require("cors");
const bodyParser = require('body-parser')
const path = require("path")
const axios = require('axios')


app.use(cors());
app.use(bodyParser.json());

app.listen(process.env.PORT || 3000, function () {
  console.log('App listening on port 3000!');
});


app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/:address/txs', function(req, res) {
  axios
    .get('https://blockchain.info/rawaddr/3E8ociqZa9mZUSwGdSmAEMAoAxBK3FNDcd')
    .then(res => {
      let transactions = res.data.txs
      let getTransactionsDataa = []
      for (let i = 0; i < transactions.length; i++) {
        getTransactionsDataa += [transactions[i].hash, transactions[i].fee]
      }
      res.send({transactions: getTransactionsData})
    });
});

app.get('/:address/balance', function(req, res) {
  axios
    .get('https://blockchain.info/rawaddr/3E8ociqZa9mZUSwGdSmAEMAoAxBK3FNDcd')
    .then(r => {  
          //balance = r.data.final_balance
          res.send('{balance: }')
      });
});


