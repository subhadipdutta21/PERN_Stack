const Pool = require('pg').Pool
const { Client } = require('pg')
require("dotenv").config();

let localDB = {
    user: 'postgres',
    password: 'subh1994',
    host: 'localhost',
    port: 5432,
    database: 'pern'
}


// const pool = new Pool(localDB)

// heroku
// const pool = new Client({
//     connectionString: process.env.POSTGRES_URI,
//     ssl: {
//         rejectUnauthorized: false
//     }
// });

const pool = new Client({
    connectionString: 'postgres://dockerpg:dockerpg@pg:5432/dockerpg',    
});


module.exports = pool