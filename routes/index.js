const express = require('express');
const router = express.Router();

const item = require("../controller/item")

router.get('/', item.index);
router.get('/navbar', item.navbar);
router.get('/item', item.viewPage);
router.get('/viewpdf', item.viewAll);

module.exports = router;
