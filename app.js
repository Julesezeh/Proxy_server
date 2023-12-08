const express = require("express");
const axios = require("axios");
const port = 3000
const app = express();

app.use(express.json());

app.get("/api", (req, res) => {
    res.status(200).send("<h1>This Works</h1>")
})

app.post("/api", (req, res) => {
    const { country, city, query_string, api_key } = req.body;
    console.log(req.body);
    try {
        return axios.post(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query_string} in ${city} in ${country}&radius=2000&key=${api_key}`)
    } catch (e) {
        console.log(e)
    }
})

app.listen(3000, () => {
    console.log(`currently listening on port ${port}`)
})