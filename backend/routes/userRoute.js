const express = require('express');
const router = express.Router();
//const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authMiddleware = require('../middleware/authMiddleware');
const prisma_client = require('@prisma/client');
const prisma = new prisma_client.PrismaClient()

router.post('/register', async (req, res) => {
  try {
    const userExists = await prisma.user.findUnique({ where: { email: req.body.email }, });  //get the mail id to check if account on same mail id exists
    if (userExists) {
      return res.status(400).send({ message: "User already exists", success: false }); //send the error that user with mail id already exists and we will not create another user with same id
    }
    const { name, email, contactno, password } = req.body;
    const salt = await bcrypt.genSalt(10);   //bcrpyt password
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;
    await prisma.user.create({
      data:{
        email: email,
        name: name,
        contactno: contactno,
        password: hashedPassword,
      },
    });  //create new user
    console.log(email);
    res.status(200).send({ message: "User created successfully", success: true }); //send message when user is created successfully
  } catch (error) {
    res.status(500).send({ message: "Error creating message", success: false });
  }
})

/*router.post('/deleteuser', async (req, res) => {
  try {
    const user = await UserModal.findByIdAndRemove(req.body.email);
    res.status(200).send({ message: "User deleted", success: true });
  } catch (error) {
    res.status(500).send({ message: "Error deleting message", success: false });
  }
})*/

router.post("/login", async (req, res) => {
  try {
    const user = await prisma.user.findUnique({ where: { email: req.body.email }, });  //get the mail id to check if account on same mail id exists
    if (!user) {
      return res
        .status(200)
        .send({ message: "User does not exist", success: false });
    }
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res
        .status(200)
        .send({ message: "Password is incorrect", success: false });
    } else {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });
      res
        .status(200)
        .send({ message: "Login successful", success: true, data: token });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ message: "Error logging in", success: false, error });
  }
});

router.post('/profile', async (req, res) => {
  try {
    const user = await prisma.user.findOne({ email: req.body.email });
    //user.password = undefined;
    if (!user) {
      return res
        .status(200)
        .send({ message: "User does not exist", success: false });
    } else {
      res.send(user);
      //console.log(user);
    }
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error getting user info", success: false, error });
  }
});

module.exports = router;
