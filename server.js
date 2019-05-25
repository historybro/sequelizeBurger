var express = require("express");
var PORT = process.env.PORT || 8080;
var app = express();
var exphbs = require("express-handlebars");
var db = require("./models");

app.use(express.static("public"));
app.use(express.static(__dirname+'/public'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

require("./controllers/burger_controller")(app);

db.sequelize.sync({}).then(function() {
    app.listen(PORT, function(){
        console.log("Server listening on http://localhost:"+PORT);
    });
});  