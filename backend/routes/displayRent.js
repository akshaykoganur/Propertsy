const express = require('express');
const router = express.Router();
const rentModel = require('../models/rentPropertyModel')

router.post('/rentData', async(req,res) => {
    try{
        const rentData = await rentModel.find({city : req.body.city, type: req.body.type});
        res.send(rentData);
    }
    catch(error){
        console.error(error.message);
        res.send("Server error");
    }
})

module.exports = router;