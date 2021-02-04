const express = require("express");
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.set('view engine', 'ejs');

app.get("/",(req, res) => {
  res.render("index");
})

app.get("/perguntar", (req,res) => {
  res.render("perguntar");
})



app.listen(3000,() =>{console.log("Meu aplicativo está rodando");});

