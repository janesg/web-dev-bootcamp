var express = require('express'),
    request = require('request');

var app = express();

app.set("view engine", "ejs");

app.get("/results", function(req, res) {
    
   var term = req.query.term;
   
   request("http://www.omdbapi.com/?s=" + term, function(error, response, body) {
       if (!error && response.statusCode === 200) {
           var data = JSON.parse(body);
           res.render("results", {term: term, data: data});
       }
   }) 
});

app.get("/", function(req, res) {
    res.render("search");
})

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Movie Search app started...");
});