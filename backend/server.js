const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors());
require('dotenv').config();
const dbconfig = require('./config/dbConfig');

const displayBuy = require('./routes/displayBuy');
const displayRent = require('./routes/displayRent');

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true , parameterLimit:50000}));

const userRoute = require('./routes/userRoute');
app.use('/api/user', userRoute);

const sellRoute = require('./routes/sellRoute');
app.use('/api', sellRoute);

const rentRoute = require('./routes/rentRoute');
app.use('/api', rentRoute);

app.use('/api', displayBuy);

app.use('/api', displayRent);


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

const port = 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
