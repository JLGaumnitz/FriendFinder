const path = require("path");

module.exports = function(app){
    app.get("/",function(req,res){
        res.sendFile(path.join(__dirname,"../public/home.html"));
    });

    app.get("/home",function(req,res){
        res.sendFile(path.join(__dirname,"../public/home.html"));
    });

    app.get("/survey",function(req,res){
        res.sendFile(path.join(__dirname,"../public/survey.html"));
    });

    // Could change this to a 404 Page (if time)
    app.get("*",function(req,res){
        res.sendFile(path.join(__dirname,"../public/home.html"));
    });
};