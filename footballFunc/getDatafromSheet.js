const { exception } = require("console");
const { GoogleSpreadsheet } = require("google-spreadsheet");
const moment = require("moment"); // require

const getDataFromSheet = async (BankNames) => {
  const creds = require("../config/CreditTransaction-d9fe1ef7e128.json");
  // Initialize the sheet - doc ID is the long id in the sheets URL
  const doc = new GoogleSpreadsheet(
    "1SU3sfh1PsiQBcB5Fg1edy5SKUfDaeQ-8C61qfj6gk3c"
  );

  await doc.useServiceAccountAuth(creds);
  await doc.loadInfo(); // loads document properties and worksheets

  const docTitle = doc.title;

  return docTitle;
  //console.log(doc.title);
  //   await doc.updateProperties({ title: "renamed doc" });
  // const promises = [];
  // for (let i = 0; i < BankNames.length; i++) {
  //   const sheet = doc.sheetsByTitle[BankNames[i]]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]

  //   if (sheet) {
  //     const rows = await sheet.getRows(); // can pass in { limit, offset }
  //   }
  // }
};

module.exports = { getDataFromSheet };
