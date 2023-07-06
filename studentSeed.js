const db = require("./db");
const { Student } = require("./db/models");

const seedStudent = [
    {
        firstName: "First",
        lastName: "Last",
        quote: "This is a quote",
        email: "123@gamil.com",
        //campus: "Brooklyn College",
    },
    {
        firstName: "First2",
        lastName: "Last2",
        quote: "This is a quote",
        email: "nameLast@gamil.com",
        //campus: "Brooklyn College",
    },
    {
        firstName: "First3",
        lastName: "Last3",
        email: "123@gamil.com",
        //campus: "Havard",
    }
]

const seed = async () => {
    await Student.bulkCreate(seedStudent);
};

seed().then(() => process.exit());