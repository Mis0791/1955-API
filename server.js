var express = require("express"),
    app = express(),
    port = 8000,
    bp = require("body-parser"),
    path = require("path"),
    session = require("express-session");

app.use(express.static(path.join(__dirname, "/client")));
app.use(bp.json());
app.use(session({secret:"cat"}));

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

app.listen(port, function(){
    console.log("listening");
})