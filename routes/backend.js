const express = require('express');
const router = express.Router();

const itemBackend = require("../controller/itemBackend")

router.get('/', function(req, res){
    res.send({Hello: 'This Is Web API'})
});
router.get('/item', itemBackend.index);
router.post('/item', itemBackend.insert);
router.get('/item/:id', itemBackend.row);
router.post('/item/:id', itemBackend.update);
router.delete('/item/:id', itemBackend.destroy);

module.exports = router;
