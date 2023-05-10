const express = require('express');
const router = express.Router();
const sellModel = require('../models/sellPropertyModel')

router.post('/buyData', async(req,res) => {
    try{
        const buyData = await sellModel.find({city : req.body.city});
        //console.log(buyData);
        res.send(buyData);
    }
    catch(error){
        console.error(error.message);
        res.send("Server error");
    }
})

module.exports = router;