const mongoose = require('mongoose');

let sellSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true    
    },
    type:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    age: {
        type: String,
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
        type: String,
        required: true
    },
    ownerEmail: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

let sellPropertyModel = mongoose.model('sell', sellSchema);

//console.log(sellPropertyModel.toJSON());

module.exports = sellPropertyModel;