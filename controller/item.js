const Config = require("../library/config")

module.exports = {
    index: function(req, res, next) {
        res.render('index', { title: 'Express' });
    }
}