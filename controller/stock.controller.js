// var mongoose = require('mongoose');
var  StockModel= require('../model/stock.model');

var createStock = async (req, res, next) => {
try {
    var newProduct =new StockModel(req.body);
    var savedProduct =await newProduct.save();

    console.log(savedProduct);
    res.status(201).json({
        message:'Product saved successfully',
        item: savedProduct
    })
} catch (error) {
    res.status(500).send('Failed to save product');
}

};

var listStock = async (req, res, next) => {
    try {
        var stock=await StockModel.find({});
        res.status(200).json(stock);

        
    } catch (error) {
        res.status(500).send('Failed to find stock product');
    }
}


module.exports ={
    createStock,
    listStock
}