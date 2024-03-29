const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const requireDir = require('require-dir')

const app = express();
app.use(express.json())
app.use(cors());


mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    { useNewUrlParser: true}
);
requireDir('./src/model');

app.use("/api", require("./src/controllers/UserController"))
app.use("/api", require("./src/controllers/AuthController"))
app.use("/api", require("./src/routes"));

app.listen(3001);

