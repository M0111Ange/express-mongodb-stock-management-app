const express = require('express');
const allRoutes = express.Router();

const stockRoute = require('./stock.route');
allRoutes.use('/Items', stockRoute);

module.exports =allRoutes;