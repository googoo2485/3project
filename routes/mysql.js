const mysql = require('mysql2');
const client = mysql.createConnection({
    host: 'sanggoo2485.cafe24app.com',
    user: 'tkdrn2485',
    password: 'rntmf147.@',
    database: 'tkdrn2485',
    port: '3306',
    multipleStatements : true,
});



module.exports = client;