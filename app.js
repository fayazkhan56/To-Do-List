const express = require("express");
const bodyParser = require("body-parser");

const App = express();
var items = ["Book reading", "Have a cup of tea"];
var works = ['programming', "prayer"];
App.set('view engine', 'ejs');  
App.use(bodyParser.urlencoded({ extended: true }));
App.use(express.static("public"));
App.get("/", function (req, res) {
  var today = new Date();    
    var options = { weekday: 'long', month: 'long', day: 'numeric' };
    var day = today.toLocaleDateString("en-US", options);
        var time = today.toLocaleTimeString("en-US");
         res.render("list", { listTitle: day,newitems:items });
} 
);
App.post("/", function (req, res) {
    let item = req.body.newitem;
    console.log(req.body.list);
    if (req.body.list === "work-list") {
       
    works.push(item);
    res.redirect("/work");
    }
    else {
          items.push(item);
    res.redirect("/"); 
    }

});

App.get("/work", function (req, res) {
    res.render("list", { listTitle: "work-list", newitems: works })
});

App.get("/about", function (req, res) {
    res.render("about");
})

App.listen(3000, function () {
    console.log("server is started on port 3000")
})
