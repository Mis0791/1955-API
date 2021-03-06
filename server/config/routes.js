var users = require("./../controllers/usercontroller.js") // ./ start here and ../ goes up a level
module.exports = function(app){
    app.get("/", function(req,res){
        users.index(req, res)
    })
    app.get("/newuser/:username", function(req,res){
        users.create(req, res)
    })
    app.get("/remove/:username", function(req,res){
        users.remove(req, res)
    })
    app.get("/:username", function(req,res){
        users.name(req, res)
    })
}