const fs = require('fs')
const mysql = require("mysql2/promise");
require('dotenv').config()

const pool = mysql.createPool({
  host: process.env.DbHost,
  user: process.env.DbUsername,
  database: process.env.database,
  password: process.env.DbPassword,
  waitForConnections: true,
  connectionLimit: 20,

});

async function queryExecute(query) {
  try {
    const connection = await pool.getConnection();
    const [rows, fields] = await connection.query(query);
    connection.release();
    return rows;
  } catch (error) {
    console.error('Error executing query:', error);
  }
}


// Call the function to fetch and display results
async function loadData() {
 await queryExecute(`CREATE TABLE IF NOT EXISTS Ticket_web (Id BIGINT(200),Title VARCHAR(250), Description VARCHAR(250), Project VARCHAR(250), Priority INT(50), Severity INT(50), Viewport VARCHAR(250), Active BOOLEAN, Date DATE DEFAULT CURRENT_DATE)`)
 console.log(`[MYSQL] Connected`)
}
loadData()

export default queryExecute
