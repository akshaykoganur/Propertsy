const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true    
    },
    email: {
        type: String,
        required: true
    },
    contactno: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

const userModel = mongoose.model('users', userSchema);


module.exports = userModel;