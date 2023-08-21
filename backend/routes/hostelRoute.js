const express = require('express');
const router = express.Router();
const Hostel = require('../models/hostelPropertyModel');
const bcrypt = require('bcryptjs');

router.post('/hostel', async (req, res) => {
    try{
        const newhostel = new Hostel(req.body);  //create new hostel
        await newhostel.save();     //save new hostel
        res.status(200).send({message: "Property added", success: true});
    }
    catch(error){
        res.status(500).send({message:"Error creating property", success: false});
    }
})

module.exports = router;