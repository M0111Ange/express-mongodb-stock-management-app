var mongoose = require('mongoose');

var StockModel= new mongoose.Schema(
    {
        stockSymbol: { required: true, type: String },
        companyName: { required: true, type: String },
        email: { required: true, type: String },
        phoneNumber: { required: true, type: String },
        industry: { required: true, type: String },
        registrationNumber: { required: true, type: String },
        stockType: {
            type: String,
            required: true,
            enum: {
                values: ["COMMON", "PREFERRED", "BOND"],
                message: "{value} is not a valid stock type",
            }
        },
        issuanceDate: { 
            required: true, 
            type: Date,
            default: new Date(), 
        },
        updateTime: { required: false, type: Date },
    });
 
module.exports=mongoose.model('stock', StockModel);