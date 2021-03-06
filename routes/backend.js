const express = require('express');
const router = express.Router();

const itemBackend = require("../controller/itemBackend")

router.get('/', function(req, res){
    res.send({Hello: 'This Is Web API'})
});
router.get('/item', itemBackend.index);
router.get('/item/diskon', itemBackend.diskon);
router.post('/item', itemBackend.insert);
router.get('/item/:id', itemBackend.row);
router.post('/item/:id', itemBackend.update);
router.delete('/item/:id', itemBackend.destroy);
router.get('/bill', itemBackend.viewBill);
router.post('/bill/:id', itemBackend.bill);

module.exports = router;
