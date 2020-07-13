const Encryption = require("../library/encryption")
const ItemModel = require("../model/item")

const discountCodes = {
    1: "fashion",
    2: "furniture",
    3: "jewelry"
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
                    discountName: discountCodes[rowsArray[numplus].discount_code]
                }
            }

            res.send(results)
        })
    }
}