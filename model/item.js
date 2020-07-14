module.exports = {
    get: function(con, callback) {
        con.query("SELECT * FROM tb_item", callback)
    },
    getById: function(con, data, callback){
        con.query("SELECT * FROM tb_item where item_id = '"+data+"'", callback)
    },
    create: function(con, data, callback) {
        con.query(
            `INSERT INTO tb_item SET 
            name = '${data.name}', 
            discount_code = '${data.discount_code}', 
            price = '${data.price}'`,
            callback
        )
    },
    update: function(con, data, id, callback) {
        con.query(
            `UPDATE tb_item SET 
            name = '${data.name}', 
            discount_code = '${data.discount_code}', 
            price = '${data.price}' 
            WHERE item_id = ${id}`,
            callback
        )
    },
    destroy: function(con, id, callback) {
        con.query(`DELETE FROM tb_item WHERE item_id = ${id}`, callback)
    }
}