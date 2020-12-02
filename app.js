const express = require("express");
const bodyParser = require("body-parser");

const App = express();
var items = ["Book reading","Have a cup of tea"];
App.set('view engine', 'ejs');  
App.use(bodyParser.urlencoded({ extended: true }));
App.use(express.static("public"));
App.get("/", function (req, res) {
  var today = new Date();    
    var options = { weekday: 'long', month: 'long', day: 'numeric' };
    var day = today.toLocaleDateString("en-US", options);
        var time = today.toLocaleTimeString("en-US");
         res.render("list", { kindofday: day, kindoftime:time,newvalues:items });
} 
);
App.post("/", function (req, res) {
    var item = req.body.newitem;
    items.push(item);
    res.redirect("/");
})

App.listen(3000, function () {
    console.log("server is started on port 3000")
})
