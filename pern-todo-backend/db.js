const Pool = require('pg').Pool
const { Client } = require('pg')

let localDB = {
    user: 'postgres',
    password: 'subh1994',
    host: 'localhost',
    port: 5432,
    database: 'pern'
}

// user: 'yetziszemhkxri',
// password: 'c794979d4e3686e9064413481f3e8b2a0cf67054f606fecbea29ad9e14706371',
// host: 'ec2-3-231-48-230.compute-1.amazonaws.com',
// port: 5432,
// database: 'd36hn1jthlufjl'

let stageDB = {
    user: 'yetziszemhkxri',
    password: 'c794979d4e3686e9064413481f3e8b2a0cf67054f606fecbea29ad9e14706371',
    host: 'ec2-3-231-48-230.compute-1.amazonaws.com',
    port: 5432,
    database: 'd36hn1jthlufjl'
}

// const pool = new Pool(localDB)
const pool = new Client({
    connectionString: "postgres://yetziszemhkxri:c794979d4e3686e9064413481f3e8b2a0cf67054f606fecbea29ad9e14706371@ec2-3-231-48-230.compute-1.amazonaws.com:5432/d36hn1jthlufjl",
    ssl: {
        rejectUnauthorized: false
    }
});


pool.connect()



module.exports = pool