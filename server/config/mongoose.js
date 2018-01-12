var mongoose = require("mongoose");
var path = require("path");
var fs = require("fs"); // either read or write our file system; it already comes installed
var mp = path.join(__dirname, "./../models");


mongoose.connect("mongodb://localhost/what_db");

// going into this directory and reading this system one file at a time, for each file run this function passing it inot the file

fs.readdirSync(mp).forEach(function(file){
    if(file.indexOf(".js")>=0){  // indexOf will return a -1 
        require(mp +"/" + file)
    }
})
