const express = require('express');
const router = express.Router();

const item = require("../controller/item")

router.get('/', item.index);

module.exports = router;
