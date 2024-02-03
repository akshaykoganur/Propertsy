const express = require('express');
const router = express.Router();
const Sell = require('../models/sellPropertyModel');
const bcrypt = require('bcryptjs');
const prisma_client = require('@prisma/client');
const prisma = new prisma_client.PrismaClient()

router.post('/sell', async (req, res) => {
    try{
        const { name, type, image, price, age, street, locality, city, ownerName, ownerContact, ownerEmail } = req.body;
        await prisma.sell.create({
            data:{
              name: name,
              type: type,
              image: image,
              price: price,
              age: age,
              street: street,
              locality: locality,
              city: city,
              ownerName: ownerName,
              ownerContact: ownerContact,
              ownerEmail: ownerEmail,
            },
          });
        res.status(200).send({message: "Property added", success: true});
    }
    catch(error){
        res.status(500).send({message:"Error creating property", success: false});
    }
})

module.exports = router;
