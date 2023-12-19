var { createStock,listStock }=require('../controller/stock.controller');
var express = require('express');
var stockRoute = express.Router();
  
stockRoute.post('/add',createStock);
stockRoute.post('/list',listStock);
 module.exports = stockRoute;