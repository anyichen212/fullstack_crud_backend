//student api

const express = require("express");
const router = express.Router();
const { Student } = require("../db/models");

//api/student

//get all students
router.get("/", async (req, res) => {
    try {
        console.log("On AllStudent api page");
        const allStudent = await Student.findAll();
        allStudent
            ? res.status(200).json(allStudent)
            : res.status(400).send("Student list NOT found");
    } catch (error) {
        console.log("GET all Student error: ", error);
    }
});

module.exports = router;