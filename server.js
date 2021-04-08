const http = require("http");

const express = require("express");
const fs = require("fs");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const dotenv = require("dotenv");
const server = http.createServer(app);

dotenv.config();
app.use(bodyParser.json());

app.use(cors());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "Client/build")));

let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}

app.post("/api/Whatsapp", async (req, res) => {
  console.log("whatsapp ok", req.body);
  const jsonFile = { reply: "שלום, אני השרת של משה. תודה שפנית אלי.." };
  res.send(jsonFile);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/Client/build/index.html"));
});

server.listen(port, () => {
  console.log("Example app listening on port " + port);
});
