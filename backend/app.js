require("dotenv").config();
const cors = require("cors");

const express = require("express");

require("./mongo-connection");

const app = express();
app.use(cors());

module.exports = app;
