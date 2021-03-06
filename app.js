var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
// Setting view engine
app.set("view engine", "ejs");

var campgrounds = [
        {name: "Salmon Creek", image: ""},
        {name: "Granite Hill", image: ""},
        {name: "Goat's rest", image: ""}
    ]

// Render function for the landing template
app.get("/", function(req, res) {
    res.render("landing");
});

// Routes to show all campgrounds taht are made
app.get("/campgrounds", function(req, res) {
    
    
    // render the campgrounds template
    res.render("campgrounds", {campgrounds:campgrounds});
});

// Allows user to post new campgrounds
app.post("/campgrounds", function(req,res) {
    // res.send("You hit the post route!");
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    
    //creates the new array indice item
    var newCampground = {name: name, image: image}
    campgrounds.push(newCampground);
    
    //redirect back to campgrounds page
    res.redirect("/campgrounds");
});

// rendering new form
app.get("/campgrounds/new", function(req, res) {
    res.render("new.ejs");
})

// app.get('/', (req, res) => res.send('Yelpcamp Server is running'));

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Yelpcamp server has started");
});