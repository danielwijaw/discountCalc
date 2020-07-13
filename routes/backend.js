const express = require('express');
const router = express.Router();

const itemBackend = require("../controller/itemBackend")

router.get('/', itemBackend.index);

module.exports = router;
