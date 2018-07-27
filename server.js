var express = require("express");
var path = require("path");

var hostname = "localhost";
var PORT = 3000;

var app = express();

app.use(express.static(path.resolve(__dirname,"public_html/")));

app.listen(PORT,()=>{
    console.log("Server listening at "+hostname+":"+PORT);
});
