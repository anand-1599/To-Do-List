//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = [];

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.set("view engine", 'ejs');

app.get("/", function(req, res){
    let today = new Date();

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("en-US", options);
        res.render("list", {kindOfDay: day, newListItems: items});
    });

app.post("/", function(req, res){
    let item=req.body.newItem;

    items.push(item);

    res.redirect("/");
    console.log(item);
});


app.listen(3000, function(){
    console.log("Server is up and runnig at port-3000");
});