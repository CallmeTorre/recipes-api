const pg = require('pg');
const dotenv = require('dotenv');

dotenv.config();

var pool;

function getPool(){
    if(pool){
        return pool;
    }
    pool = new pg.Pool({
        user: process.env.PG_USER,
        host: proccess.env.PG_HOST,
        database: process.env.PG_DATABASE,
        password: proccess.env.PG_PASSWORD,
        port: proccess.env.PG_PORT
    });
}

module.exports = getPool;