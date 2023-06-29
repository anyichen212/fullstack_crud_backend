//campus api

const express = require("express");
const router = express.Router();
const { Campus } = require("../db/models");

//8080/api/campus
router.get("/", async (req, res, next) => {
    try {
        console.log("On Campus Api");
        //res.send("Land On Campus!");
        const allCampus = await Campus.findAll();
        allCampus
            ? res.status(200).json(allCampus)
            : res.status(400).send("Campus List NOT Found");

    } catch (error) {
        console.log(error);
    };
});

module.exports = router;