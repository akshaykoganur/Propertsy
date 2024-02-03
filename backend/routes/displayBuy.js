const express = require('express');
const router = express.Router();
const sellModel = require('../models/sellPropertyModel')
const prisma_client = require('@prisma/client');
const prisma = new prisma_client.PrismaClient();

router.post('/buyData', async(req,res) => {
    try{
        const buyData = await prisma.sell.findMany({ where: {city : req.body.city, type: req.body.type},});
        //console.log(buyData);
        res.send(buyData);
    }
    catch(error){
        console.error(error.message);
        res.send("Server error");
    }
})

module.exports = router;
