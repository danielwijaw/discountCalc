const express = require('express');
const router = express.Router();

const item = require("../controller/item")
const bill = require("../controller/bill")

router.get('/', item.index);
router.get('/navbar', item.navbar);
router.get('/item', item.viewPage);
router.get('/view', item.viewAll);
router.get('/bill', bill.index);
router.get('/viewbill', bill.viewAll);

module.exports = router;
