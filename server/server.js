const express = require('express');
const app = express();

const mongoose = require('mongoose');

const cors = require('cors');

require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }), cors());

const PirateRoutes = require('./routes/pirates.routes');
PirateRoutes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));