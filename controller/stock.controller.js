const stockModel = require('../model/stock.model');

const createStock = async (req, res, next) => { 
    try {
        const newStock = new stockModel(req.body);
        const savedStock = await newStock.save();
        
        console.log(savedStock);

        res.status(201).json({
            message: 'Stock created',
            stock: savedStock
        });
    } catch (error) {
        console.error(error);
        res.status(500).send("Failed to save stock!!");
    }
}

const listStocks = async (req, res, next) => { 
    try {
        const stocks = await stockModel.find({});
        res.status(200).json({ stocks });
    } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching stocks!!");
    }
}

module.exports = {
    createStock,
    listStocks
};
