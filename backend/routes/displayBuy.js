const express = require('express');
const router = express.Router();
const sellModel = require('../models/sellPropertyModel')

router.get('/buyData', async(req,res) => {
    try{
        const buyData = await sellModel.find({});
        //console.log(buyData);
        res.send(buyData);
    }
    catch(error){
        console.error(error.message);
        res.send("Server error");
    }
})

module.exports = router;