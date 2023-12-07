const express = require("express");

const app = express();

app.use(express.json());

app.post("/", (req, res) => {
    const { country, city, query_string, api_key } = req.body;
    return axios.post(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query_string} in ${city} in ${country}&radius=2000&key=${api_key}`)
})

app.listen(3000, () => {
    console.log(`currently listening on port ${port}`)
})