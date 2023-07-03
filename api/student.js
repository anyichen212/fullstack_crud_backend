//student api

const express = require("express");
const router = express.Router();
const { Student, Campus } = require("../db/models");

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
        console.log("On Student id :", id, ", api");
        const student = await Student.findByPk(id, {include: Campus});

        student
            ? res.status(200).json(student)
            : res.status(400).send(`Student id, ${id}, is NOT found. `);
        
    } catch (error) {
        console.log(error);
    };
});

//POST a new student
router.post("/", async(req,res) => {

    try {
        console.log("POST a new Student");
        await Student.create(req.body)
            .then(response => res.json(response));
    } catch (error) {
        console.log("POST a new student error :", error);
    }
});

//DELETE a new student by id
router.delete("/:id", async(req, res) => {
    const id = req.params.id;
    console.log(`DELETE student ${id}`);

    //delete from student
    Student.destroy({
        where: { id:id }
    })
    .then(response => {
        if( response == 1) {
            res.send({message: `student ${id} was deleted successfully!` })
        } else {
            res.send({message: `student ${id} is not found.`})
        }
    })
    .catch (error => {
        res.send(error);
    });

});

//Update a student info
router.put("/:id", async (req, res) => {
    const id = req.params.id;

    try {
        const updateStudent = await Student.update(req.body, {where: {id: id}});
        res.json(updateStudent);
        //.then(response => response ? res.json("Update Student Sucesss") : res.json(`Update Fail, id ${id}`));
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;