var mysql = require('mysql');
var config = require('./config'); // datos BD
var util = require('util');

var pool = mysql.createPool({ // Pool de conexion
    connectionLimit: 100,
    host: config.dbHost,
    user: config.dbUser,
    password: config.dbPassword,
    database: config.dbName
});

pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.log('La conexión a la BD fue cerrada.');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.log('La BD tiene muchas conexiones.')
        }
        if (err.code === 'ECONNREFUSED') {
            console.log('La conexión con la BD fue rechazada.');
        }
        if (connection) connection.release();
        return
    }
});

pool.query = util.promisify(pool.query);

module.exports = pool;