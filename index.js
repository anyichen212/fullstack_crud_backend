const express = require('express');
const cors = require('cors');
const db = require("./db")
const PORT = "8080";
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: false }));

//mount on api folder
app.use("/api", require("./api"));

app.get('/', (req, res) => {
    res.send('Heyyyyyy \n Student : /api/students  \n Campuses: /api/campuses')
  })

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