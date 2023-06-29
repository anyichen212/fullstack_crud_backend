//campus api

const express = require("express");
const router = express.Router();

//8080/api/campus
router.get("/", async (req, res, next) => {
    try {
        res.send("Land On Campus!");
        console.log("Got Campus Api");
    } catch (error) {
        console.log(error);
    };
});

module.exports = router;