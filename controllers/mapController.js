const mysql = require("mysql");
const mysql2 = require("mysql2/promise");

let objLength;
let objList;

const db = async () => {
  try {
    let connection = await mysql2.createConnection({
      host: "61.252.59.35",
      port: "30306",
      user: "root",
      password: "root",
      database: "sys",
    });
    let sql = "SELECT * FROM DO2";
    let [rows, fields] = await connection.query(sql);
    objLength = rows.length;
    objList = rows;
    console.log(rows);
  } catch (e) {
    console.log(e);
  }
};

const main_map = async (req, res) => {
  db();
  res.render("index", { title: "Express", objList });
};

module.exports = { main_map };
