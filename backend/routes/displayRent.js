const express = require('express');
const router = express.Router();
const rentModel = require('../models/rentPropertyModel')

router.get('/rentData', async(req,res) => {
    try{
        const buyData = await sellModel.find({city : req.body.city});
        //console.log(buyData);
        res.send(rentData);
    }
    catch(error){
        console.error(error.message);
        res.send("Server error");
    }
})

module.exports = router;