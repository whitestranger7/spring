const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'spring'
});

module.exports = connection.connect((err) => {
    if(err) {
        console.log(err.stack);
    }
    console.log('Database connected');
});