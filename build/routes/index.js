"use strict";

var _mapController = require("../controllers/mapController.js");

var express = require("express");

var router = express.Router();

/* GET home page. */
router.get("/", _mapController.main_map);
module.exports = router;