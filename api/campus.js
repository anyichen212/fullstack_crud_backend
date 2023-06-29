//campus api

const express = require("express");
const router = express.Router();
const { Campus } = require("../db/models");

//8080/api/campus page

//get all campus
router.get("/", async (req, res) => {
    try {
        console.log("On Campus Api");
        //res.send("Land On Campus!");
        const allCampus = await Campus.findAll();
        allCampus
            ? res.status(200).json(allCampus)
            : res.status(400).send("Campus List NOT Found");

    } catch (error) {
        console.log("get all campus error :", error);
    };
});

router.post("/", async(req,res) => {
    //console.log(req.body);

    if(!req.body.name || !req.body.address || !req.body.city || !req.body.state || !req.body.zip || !req.body.country)
        res.status(400).send(
            {message: "One or more of the field is empty"}
        );

    const newCampus = {
        name: req.body.name,
        description: req.body.description,
        address: req.body.address,
        city: req.body.address,
        state: req.body.state,
        zip: req.body.zip,
        country: req.body.country,
        image: req.body.image || "https://www.brooklyn.edu/wp-content/uploads/NEWS-Default-1-Featured.jpg"
    };

    try {
        console.log("POST new Campus");

        Campus.create(newCampus)
            .then(response => res.json(response));
    } catch (error) {
        console.log("campus post : ", error);
    }
});



module.exports = router;