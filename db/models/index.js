const Campus = require("./campus");
const Student = require("./student");

//associations
Student.belongsTo(Campus);
Campus.hasMany(Student);

module.exports = {
    Campus,
    Student,
}