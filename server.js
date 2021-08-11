const http = require("http");
const https = require("https");
const express = require("express");
const fs = require("fs");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const cloudinary = require("cloudinary");
const mongoose = require("mongoose");
// const autoIncrement = require("mongoose-auto-increment");

//for football
const { GoogleSpreadsheet } = require("google-spreadsheet");
const moment = require("moment"); // require

//for football

const { models } = require("./models");
const { mongoFunc } = require("./mongoFunc");
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

let Mongo_Path = process.env.Mongo_Path;

https.get("https://coderbyte.com/api/challenges/json/json-cleaning", (resp) => {
  console.log(resp);
  for (prop in resp) {
  }
  let data = "";

  // parse json data here...

  // console.log(Array.isArray(resp));
});

function connectToDB() {
  // const connection = mongoose.connect("mongodb://localhost/Shop", {

  const connection = mongoose.connect(Mongo_Path, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
  // autoIncrement.initialize(connection);
  // ProductSchema.plugin(autoIncrement.plugin, "Product");

  return connection;
}

cloudinary.config({
  cloud_name: "binyaminbiz",
  api_key: "377497779621851",
  api_secret: "mItCb8yTGbEH54MYfnsTjbyWoWA",
});

app.post("/api/Whatsapp", async (req, res) => {
  console.log("whatsapp ok", req);
  const getBanksSheetData = async (BankNames) => {
    
    const creds = require("./config/CreditTransaction-d9fe1ef7e128.json");
    // Initialize the sheet - doc ID is the long id in the sheets URL
    const doc = new GoogleSpreadsheet(
      "1SU3sfh1PsiQBcB5Fg1edy5SKUfDaeQ-8C61qfj6gk3c"
    );
  
    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo(); // loads document properties and worksheets
      console.log(doc.title);
    //   await doc.updateProperties({ title: "renamed doc" });
    const promises = [];
    for (let i = 0; i < BankNames.length; i++) {
      const sheet = doc.sheetsByTitle[BankNames[i]]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
  
      if (sheet) {
        const rows = await sheet.getRows(); // can pass in { limit, offset }
      }
  const jsonFile = {
    reply:
      "אהלן, אני הבוט של היציע: ליגת העל 2021/2 האם ברצונכם למלא את ניחושי המחזור המספר מחזור? ",
  };
  res.send(jsonFile);
});

app.post("/api/biz_register", async (req, res) => {
  console.log(req.body);
  const ID =
    req.body.formValues.biz_name + req.body.bizCellPhone.substring(7, 11);
  let newDetails = {
    BizID: ID,
    FirstName: req.body.formValues.first_name,
    LastName: req.body.formValues.last_name,
    BizName: req.body.formValues.biz_name,
    CellPhone: req.body.formValues.cellPhon,
    Home: req.body.formValues.home,
    Street: req.body.formValues.street,
    City: req.body.formValues.city,
    About: req.body.formValues.about,
    Service1: req.body.formValues.service1,
    Service1_Img: req.body.file_links.link1,
    Service2: req.body.formValues.service2,
    Service2_Img: req.body.file_links.link2,
    Service3: req.body.formValues.service3,
    Service3_Img: req.body.file_links.link3,
    Email: req.body.formValues.E_Mail,
    Background: req.body.file_links.link4,
    Logo: req.body.file_links.link5,
  };
  const newBiz = await mongoFunc.AddBiz(newDetails);

  // const BizDetails = Order.findOne(
  //   { CustomerID: CustomerID, Status: false },
  //   async (err, order) => {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       order.Status = true;
  //       await order.save();
  //       res.status(200).send("OK");
  //     }
  //   }
  // );
  const newBizLink = "https://binyaminbiz.herokuapp.com/" + newBiz.BizID;
  res.status(200).send(newBizLink);
});

app.post("/api/biz_details", async (req, res) => {
  console.log(req.body);
  const BizDetails = models.BizDetails.findOne(
    { BizID: req.body.BizID },
    async (err, bizdetails) => {
      if (err) return console.error(err);
      console.log(bizdetails);
      res.status(200).send(bizdetails);
    }
  );
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/Client/build/index.html"));
});

connectToDB().then(() => {
  server.listen(port, () => {
    console.log("Example app listening on port " + port);
  });
});
