const {Client} = require('pg')

const client = new Client({
    host:'localhost',
    user:'postgres',
    database:'maintabale',
    password:'postgres',
    port:'5432'
});

module.exports = client;