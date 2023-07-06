const express = require('express');
const cors = require('cors');
const db = require("./db")
const PORT = "8080";
require('dotenv').config();

const app = express();

// // To upload image to server
// const cloudinary = require("cloudinary").v2;

// // To extract data from incoming request
// const bodyParser = require('body-parser');

// // To get file paths, remove files
// const fs = require('fs')

// // body parser configuration
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET
// });

app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: false }));

//mount on api folder
app.use("/api", require("./api"));

//sync db folder
const syncDB = () => db.sync();
//const syncDB = () => db.sync({force: true});

// run server
const serverRun = () => {
    app.listen(PORT, () => {
        console.log(`LIVE on port: ${PORT}`);
    });
};

syncDB();
serverRun();