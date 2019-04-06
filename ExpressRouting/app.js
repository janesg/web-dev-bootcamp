var express = require("express");

var app = express();

var animalMap = new Map();

animalMap.set("pig", "Oink");
animalMap.set("cow", "Moo");
animalMap.set("dog", "Woof Woof!");

app.get("/", function(req, res) {
    res.send("Hi there, welcome to my assignment!"); 
});

app.get("/speak/:animal", function(req, res) {
    var beast = req.params.animal;
    res.send("The " + beast + " says '" + animalMap.get(beast) + "'"); 
});

app.get("/repeat/:word/:count", function(req, res) {
    var word = req.params.word;
    var count = req.params.count;
    
    var str = "";
    
    for (var i = 1; i <= count; i++) {
        str += word;
        if (i !== count) {
            str += " ";
        }
    }
    
    res.send(str); 
});

app.get("*", function(req, res) {
    res.send("Sorry, page not found...What are you doing with your life?"); 
});

app.listen(process.env.PORT, process.env.IP);