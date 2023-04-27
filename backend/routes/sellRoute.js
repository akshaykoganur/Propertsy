const express = require('express');
const router = express.Router();
const Sell = require('../models/sellPropertyModel');
const bcrypt = require('bcryptjs');

router.post('/sell', async (req, res) => {
    try{
        const newsell = new Sell(req.body);  //create new user
        await newsell.save();     //save new user
        res.status(200).send({message: "Property added", success: true});
    }
    catch(error){
        res.status(500).send({message:"Error creating property", success: false});
    }
})

module.exports = router;