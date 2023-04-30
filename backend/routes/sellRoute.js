const express = require('express');
const router = express.Router();
const Sell = require('../models/sellPropertyModel');
const bcrypt = require('bcryptjs');

router.post('/sell', async (req, res) => {
    try{
        const newSell = await Sell.create(req.body);
        newSell.save(); //save new user
        res.status(200).send({message: "Property added", success: true});
    }
    catch(error){
        res.status(500).send({message:"Error creating property", success: false});
    }
})

module.exports = router;