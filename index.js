const express = require('express');
const db = require("./db")
const PORT = "8080";

const app = express();

app.use(express.json());

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