const Encryption = require("../library/encryption")
const ItemModel = require("../model/item")

const discountCodes = {
    1: "Fashion",
    2: "Furniture",
    3: "Jewelry"
}

const refundable = {
    1: "No",
    2: "No",
    3: "No",
}

function discountCalc(discountCode, Price){
    var amount;
    var discount;
    switch(discountCode){
        case 1:
            var discount    = Price * 10 / 100
            var amount      = Price - discount
            break;
        case 2:
            var discount    = 10 + (Price * 2 / 100)
            var amount      = Price - discount
            break;
        case 3:
            if(Price < 100){
                var discount = 0
            }else{
                var discount = (Price - 100) * 1 / 100
            }
            var amount      = Price - discount
            break;
    }
    return {amount: amount, discount:discount}
}

const discount = {
    1: 10,
    2: [10, 2],
    3: {99: 0, 100: 1}
}

module.exports = {
    index: function(req, res) {
        ItemModel.get(req.con, function(err, rows) {
            var rowsArray = JSON.parse(JSON.stringify(rows));
            var results = new Array();

            for(var numplus = 0, len = rowsArray.length; numplus < len; numplus++){
                results[numplus] = { 
                    id: Encryption.encrypt(rowsArray[numplus].item_id.toString()),
                    name: rowsArray[numplus].name,
                    price: rowsArray[numplus].price,
                    discountCode: rowsArray[numplus].discount_code.toString(),
                    discountName: discountCodes[rowsArray[numplus].discount_code],
                    refundable: refundable[rowsArray[numplus].discount_code],
                    discount: discountCalc(rowsArray[numplus].discount_code, rowsArray[numplus].price).discount,
                    amount: discountCalc(rowsArray[numplus].discount_code, rowsArray[numplus].price).amount
                }
            }

            res.send(results)
        })
    },
    row: function(req, res){
        req.params.id = Encryption.decrypt(req.params.id)
        ItemModel.getById(req.con, req.params.id, function(err, rows) {
            res.send(rows[0])
        })
    },
    insert: function(req, res){
        ItemModel.create(req.con, req.body, function(err) {
            res.send("[{results => Created Success}]")
        })
    },
    update: function(req, res){
        req.params.id = Encryption.decrypt(req.params.id)
        ItemModel.update(req.con, req.body, req.params.id, function(err) {
            res.send("[{results => Updated Success}]")
        })
    },
    destroy: function(req, res) {
        req.params.id = Encryption.decrypt(req.params.id)
        ItemModel.destroy(req.con, req.params.id, function(err) {
            res.send("{results => Deleted Data Success}")
        })
    }
}