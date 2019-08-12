var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs"); // ejs cua engine
app.set("views", "./views"); //
app.listen(9000);

app.get("/", function (req, res){
  res.render("trangchu");
});
