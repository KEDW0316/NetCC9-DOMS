var express = require("express");
var router = express.Router();

import { main_map } from "../controllers/mapController.js";

/* GET home page. */
router.get("/", main_map);

module.exports = router;
