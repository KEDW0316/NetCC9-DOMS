const mysql = require("mysql");
const mysql2 = require("mysql2/promise");
const WebSocket = require("ws");

let objLength;
let objList;
let connection;
let sql;

var success_callback = async function () {
  try {
    connection = await mysql2.createConnection({
      host: "61.252.59.35",
      port: "30306",
      user: "root",
      password: "root",
      database: "sys",
    });
    sql =
      "SELECT object_id, image_path FROM DO3 ORDER BY start_time DESC LIMIT 1";
    let [rows, fields] = await connection.query(sql);
    console.log(rows);
  } catch (e) {
    console.log(e);
  }
};

const db = async () => {
  try {
    connection = await mysql2.createConnection({
      host: "61.252.59.35",
      port: "30306",
      user: "root",
      password: "root",
      database: "sys",
    });
    sql = "SELECT * FROM DO3";
    let [rows, fields] = await connection.query(sql);
    objLength = rows.length;
    objList = rows;
  } catch (e) {}
};

const main_map = async (req, res) => {
  db();
  console.log(connection);

  res.render("index", { title: "Express", objList });
};

// var dbtrigger = function (tablenm = null, success_callback = null) {
//   var autoreboot = true;
//   if (tablenm == null) {
//     tablenm = "DO3";
//   }
//   let websocket = new WebSocket("ws://127.0.0.1:5002" + "/dbtrigger");
//   websocket.onopen = function (evt) {
//     websocket.send(tablenm);
//   };
//   websocket.onmessage = function (evt) {
//     if (evt.data) {
//       if (evt.data > 0) {
//         console.log("Object_id : " + evt.data + " is received!");
//         autoreboot = false;
//         //websocket.close();
//         //console.log("websocket is closed");
//         if (success_callback != null) {
//           console.log("callback func is called");
//           success_callback();
//         }
//       }
//       if (evt.data == 0) {
//         autoreboot = false;
//         console.log("DB Trigger ERROR");
//         websocket.close();
//       }
//     }
//     console.log("OnMessage Function is finished");
//   };
//   websocket.onclose = function (evt) {
//     console.log("onclose is started");
//     if (autoreboot) {
//       console.log("reconnect dbtrigger");
//       dbtrigger(tablenm, success_callback);
//     }
//     console.log("onclose is finished");
//   };
//   websocket.onerror = function (evt) {
//     console.log(evt);
//     console.log("websocket onerror");
//     websocket.close();
//   };
// };

// console.log("dbtrigger is called");
// dbtrigger("DO3");

module.exports = { main_map };
