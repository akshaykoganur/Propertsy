const express = require('express');
const router = express.Router();
const Rent = require('../models/rentPropertyModel');
const bcrypt = require('bcryptjs');

router.post('/rent', async (req, res) => {
    try{
        const { name, type, image, rent, deposit, street, locality, city, ownerName, ownerContact, ownerEmail } = req.body;
        await prisma.rent.create({
            data:{
              name: name,
              type: type,
              image: image,
              rent: rent,
              deposit: deposit,
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
