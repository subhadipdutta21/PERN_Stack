const Pool = require('pg').Pool
const { Client } = require('pg')
const EventEmitter = require('events')
const util = require('util')
const pg = require('pg')

require("dotenv").config();

let localDB = {
    user: 'dockerpg',
    password: 'dockerpg',
    host: 'pg',
    port: 5432,
    database: 'dockerpg'
}

function DbEventEmitter() {
    EventEmitter.call(this)
}


util.inherits(DbEventEmitter, EventEmitter)

const dbEventEmitter = new DbEventEmitter

dbEventEmitter.on('new_mentions_on_post', msg => {
    console.log('new record--', msg)
})



const pool = new Pool(localDB)

// heroku
// const pool = new Client({
//     connectionString: process.env.POSTGRES_URI,
//     ssl: {
//         rejectUnauthorized: false
//     }
// });

// const pool = new Client({
//     connectionString: 'postgres://dockerpg:dockerpg@pg:5432/dockerpg',    
// });

pool.connect((err, client) => {
    // console.log(client)
    if (err) console.log(err)
    else {
        console.log('DB connected!')
        client.on('notification', msg => {
            let payload = JSON.parse(msg.payload)
            console.log('notification payload ---', payload)
            dbEventEmitter.emit(msg.channel, payload)
        })
    }
    client.query('LISTEN new_mentions_on_post')
})


module.exports = pool