import { createPool } from "mysql2";
import "dotenv/config"

let connection = createPool({
    host: process.env.hostdb,
    database: process.env.databaseName,
    user: process.env.userdb,
    password: process.env.passworddb,
    multipleStatements: true,
    connectionLimit: 50
})

connection.on('connection', (pool) => {
    if(!pool) throw new Error('Unable to Connect')
})

// Always EXPORT
export{
    connection
}