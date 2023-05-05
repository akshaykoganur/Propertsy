const express = require('express');
const router = express.Router();
const rentModel = require('../models/rentPropertyModel')

router.post('/yourRentData', async (req, res) => {
    try {
        const yourRentData = await rentModel.find({ ownerEmail: req.body.ownerEmail });
        //user.password = undefined;
        if (!yourRentData) {
            return res({ message: "No properties listed for rent", success: false });
        } else {
            res.send(yourRentData);
            //console.log(user);
        }
    } catch (error) {
        res
            .status(500)
            .send({ message: "Error getting user info", success: false, error });
    }
})

module.exports = router;