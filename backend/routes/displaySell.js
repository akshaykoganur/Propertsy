const express = require('express');
const router = express.Router();

router.get('/sellData', async(req,res) => {
    try{
        console.log(global.sellData);
        res.send(global.sellData);
    }
    catch(error){
        console.error(error.message);
        res.send("Server error");
    }
})

module.exports = router;