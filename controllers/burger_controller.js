var db = require("../models");

module.exports = function (app) {
    app.get("/", function (req, res) {
        db.Burger.findAll({}).then(function (results) {
            var obj = {
                burger: results
            };
            res.render("index", obj);
        });
    });

    app.post("/api/burgers", function (req, res) {
        db.Burger.create(req.body).then(function (results) {
            res.redirect("/");
        });
    });

    app.put("/api/burgers/:id", function (req, res) {
        db.Burger.update({
            devoured: req.body.devoured
        }, {
                where: {
                    id: req.body.id
                }
            }).then(function (results) {
                res.redirect("/");
            });
    });

    app.delete("/api/burgers/:id", function (req, res) {
        db.Burger.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (results) {
            var obj = {
                burger: results
            };
            res.render("index", obj);
        });
    });

}