require("dotenv").config()
const con = require(process.env.DB_CON)

module.exports = con.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
})