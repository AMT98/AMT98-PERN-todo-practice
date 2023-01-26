const Pool = require("pg").Pool;
//connecting to the db
const pool = new Pool({
  user: "postgres",
  password: "test123321",
  host: "localhost",
  port: 5432,
  database: "perntodo"
})

module.exports = pool;