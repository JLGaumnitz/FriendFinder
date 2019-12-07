const express = require("express");

const app = express();

let PORT = process.env.PORT || 8080;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./app/public"));

// Routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT,function(){
    console.log("App listening on PORT: " + PORT);
});