const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors());
require('dotenv').config();
const dbconfig = require('./config/dbConfig');
app.use(express.json());

const userRoute = require('./routes/userRoute');
app.use('/api/user', userRoute);

const port = 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
