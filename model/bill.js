module.exports = {
    get: function(con, callback) {
        con.query("SELECT tb_item.*, tb_bill.bill_id FROM tb_item RIGHT JOIN tb_bill ON tb_item.item_id = tb_bill.item_id", callback)
    },
    create: function(con, id, callback) {
        con.query(
            `INSERT INTO tb_bill SET 
            item_id = '${id}'`,
            callback
        )
    },
    destroy: function(con, id, callback) {
        con.query(`DELETE FROM tb_bill WHERE item_id = ${id}`, callback)
    }
}