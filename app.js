const express = require('express');
const https = require('node:https');

const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    const url = "https://api.openweathermap.org/data/2.5/weather?lat=39.7392&lon=-104.9903&appid=32d0e9db714ebb10af4f1549705568dd";
    
    https.get(url,
    (response) => {
        console.log(response.statusCode);

        response.on('data', (data) => {
            const weatherData = JSON.parse(data);
            console.log(weatherData);
        });
    });
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000, (err, res) => {
    console.log("Server running on port 3000");
});