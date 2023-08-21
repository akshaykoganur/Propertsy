const mongoose = require('mongoose');

const hostelSchema = new mongoose.Schema({
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
    rent: {
        type: String,
        required: true
    },
    deposit: {
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
    },
    members: {
        type: Array,
    }
},{
    timestamps: true
})

const hostelPropertyModel = mongoose.model('hostel', hostelSchema);

module.exports = hostelPropertyModel;