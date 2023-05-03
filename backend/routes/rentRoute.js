const express = require('express');
const router = express.Router();
const Rent = require('../models/rentPropertyModel');
const bcrypt = require('bcryptjs');

router.post('/rent', async (req, res) => {
    try{
        const newrent = new Rent(req.body);  //create new user
        await newrent.save();     //save new user
        res.status(200).send({message: "Property added", success: true});
    }
    catch(error){
        res.status(500).send({message:"Error creating property", success: false});
    }
})

module.exports = router;