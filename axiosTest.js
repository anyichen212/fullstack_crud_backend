const axios = require("axios");

const text = async() => {

    const bodyTest = {
        
            "name": "Image example",
            "description": "example",
            "address": "example",
            "city": "Brooklyn",
            "state": "NY",
            "zip": "12345",
            "country": "US",
            "image" : null,
        
    };

    const res = await axios.post('http://localhost:8080/api/campus', bodyTest );
    console.log(res.data);
}

text();