var express = require("express");
var router = express.Router();

import { main_map } from "../controllers/mapController.js";

/* GET home page. */
router.get("/", main_map);

router.get("/api/delete/demo", function (req, res) {
  res.status(200).json({
    message: "call get api demo",
  });
});

module.exports = router;
