var express = require("express");
var app = express();
var bodyParser = require("body-parser");

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
        {name: "Goat's rest", image: ""}
    ]
    
    // render the campgrounds template
    res.render("campgrounds", {campgrounds:campgrounds});
});

// Allows user to post new campgrounds
app.post("/campgrounds", function(req,res) {
    res.send("You hit the post route!");
    // get data from form and add to campgrounds array
    //redirect back to campgrounds page
});

// app.get('/', (req, res) => res.send('Yelpcamp Server is running'));

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Yelpcamp server has started");
});