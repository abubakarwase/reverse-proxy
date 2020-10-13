const express = require("express");

const { getHtml } = require("../controllers/html-parser");

const router = express.Router();

router.route("/title").get(getHtml);

module.exports = router;
