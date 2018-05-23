var express = require("express");
var app = express();





app.get('/', (req, res) => res.send('Yelpcamp Server is running'));

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Yelpcamp server has started");
});