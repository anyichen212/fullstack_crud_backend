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

//post a new campus
router.post("/", async(req,res) => {
    //console.log(req.body);

    if(!req.body.name || !req.body.address || !req.body.city || !req.body.state || !req.body.zip || !req.body.country)
        res.status(400).send(
            {message: "One or more of the field is empty"}
        );

    const newCampus = {
        name: req.body.name,
        description: req.body.description || "N/A",
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
        console.log("campus post error : ", error);
    }
});

//delete new campus by name
router.delete("/:name", async(req,res) => {
    const nameToDelete = req.params.name;
    console.log("DELETE campus", nameToDelete);

    //delete from campus
    Campus.destroy({
        where: { name: nameToDelete }
    })
    .then(response => {
        if( response==1 ){
            res.send({message: `${nameToDelete} was successfully deleted!`})
        } else {
            res.send({message: `name: ${nameToDelete} is not found`});
        }
    })
    .catch (error => {
        res.send(error);
    });

});

//delete new campus by id
router.delete("/:id", async(req,res) => {
    const id = req.params.name;
    console.log("DELETE campus(id)", nameToDelete);

    //delete from campus
    Campus.destroy({
        where: { id:id }
    })
    .then(response => {
        if( response==1 ){
            res.send({message: `campus id ${id} was successfully deleted!`})
        } else {
            res.send({message: `campus id ${id} is not found`});
        }
    })
    .catch (error => {
        res.send(error);
    });

});


module.exports = router;