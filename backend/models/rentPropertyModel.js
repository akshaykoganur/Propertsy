const mongoose = require('mongoose');

const rentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true    
    },
    price: {
        type: Integer,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    locality: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    ownerName: {
        type: String,
        required: true
    },
    ownerContact: {
        type: Integer,
        required: true
    },
    ownerEmail: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

const rentPropertyModel = mongoose.model('sell', rentSchema);

module.exports = rentPropertyModel;