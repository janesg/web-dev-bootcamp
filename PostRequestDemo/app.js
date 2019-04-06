var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set("view engine", "ejs");

var fList = ["A", "B", "C"];

app.get("/", function(req, res) {
    res.render("home");
})

app.get("/friends", function(req, res) {
    res.render("friends", {friends : fList});
})

app.post("/friend/add", function(req, res) {
    fList.push(req.body.nameOfFriend);   
    res.redirect("/friends");
})

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server started successfully...");
});

