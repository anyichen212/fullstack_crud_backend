//student api

const express = require("express");
const router = express.Router();
const { Student } = require("../db/models");

//localhost:8080/api/student

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

//get single student by id
router.get("/:id", async (req,res) => {
    const id = req.params.id;

    try {
        console.log("On Student id : ", id, ", api");
        const student = await Student.findByPk(id);

        student
            ? res.status(200).json(student)
            : res.status(400).send(`Campus id, ${id}, is NOT found. `);
        
    } catch (error) {
        console.log(error);
    };
});

module.exports = router;