module.exports = {
    get: function(con, callback) {
        con.getConnection(function(err, connection) {
            connection.query("SELECT * FROM tb_item", function(error, results){
                callback(error, results)
                connection.destroy()
            })
        })
    },
}