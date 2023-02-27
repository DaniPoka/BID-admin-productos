const mongoose = require('mongoose');


const ItemSchema = new mongoose.Schema({
    title: {

    },
    price: {

    },
    description: {

    }
    
}, { timestamps: true });

module.exports.Item = mongoose.model('Item', ItemSchema);



