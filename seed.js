const db = require("./db");
const { Campus } = require("./db/models");

const seedCampus = [
    {
        name: "Brooklyn College", 
        description: "poor man harvard", 
        address: "2900 Bedford Ave", 
        city: "Brooklyn",
        state: "NY",
        zip: "11210",
        country: "US"
      },
    { 
        name: "Harvard", 
        description: "expensive", 
        address: "123 harvard st", 
        city: "Boston",
        state: "MA",
        zip: "56780",
        country: "US"
    },
    { 
        name: "TTP Academy", 
        description: "yayyyyy", 
        address: "123 atHome st", 
        city: "Brooklyn",
        state: "NY",
        zip: "54321",
        country: "US"
    },
];


const seed = async () => {
  await Campus.bulkCreate(seedCampus);
};

seed().then(() => process.exit());