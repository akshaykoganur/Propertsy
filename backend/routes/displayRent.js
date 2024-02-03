const express = require('express');
const router = express.Router();
const rentModel = require('../models/rentPropertyModel')
const prisma_client = require('@prisma/client');
const prisma = new prisma_client.PrismaClient();

router.post('/rentData', async(req,res) => {
    try{
        const buyData = await prisma.rent.findMany({ where: {city : req.body.city, type: req.body.type},});
        res.send(rentData);
    }
    catch(error){
        console.error(error.message);
        res.send("Server error");
    }
})

module.exports = router;
