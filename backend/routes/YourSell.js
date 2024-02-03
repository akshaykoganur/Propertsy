const express = require('express');
const router = express.Router();
const sellModel = require('../models/sellPropertyModel')

router.post('/yourSellData', async(req,res) => {
    try {
        const yourSellData = await prisma.sell.findMany({ ownerEmail: req.body.ownerEmail });
        //user.password = undefined;
        if (!yourSellData) {
          return res({ message: "No properties listed for sell", success: false });
        } else {
          res.send(yourSellData);
          //console.log(user);
        }
      } catch (error) {
        res
          .status(500)
          .send({ message: "Error getting user info", success: false, error });
      }
})

module.exports = router;
