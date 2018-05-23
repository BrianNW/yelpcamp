var express = require("express");
var app = express();

// Setting view engine
app.set("view engine", "ejs");

// Render function for the landing template
app.get("/", function(req, res) {
    res.render("landing");
});

// Routes to show all campgrounds taht are made
app.get("/campgrounds", function(req, res) {
    var campgrounds = [
        {name: "Salmon Creek", image: ""},
        {name: "Granite Hill", image: ""},
        {name: "Goat's rest", image: ""},
    ]
});

app.get('/', (req, res) => res.send('Yelpcamp Server is running'));

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Yelpcamp server has started");
});