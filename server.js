console.log("web server boshlash");
const express = require("express");
const app = express();

// 1: Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const http = require("http");
// 2: Sessions code

// 3: View code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing code
app.get("/hello", function (req, res) {
  res.end(`<h1 >Hello world</h1>`);
});

app.get("/gift", function (req, res) {
  res.end(`<h1 >Siz sovg'alar bo'limidasiz</h1>`);
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running successfully on port: ${PORT}`);
});
