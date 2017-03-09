var mysql = require('mysql');
var config = require('../../config.json');

let connection;
exports.connection = connection;

exports.connectDatabase = () => {
    this.connection = mysql.createConnection({
        host: config.mysqlHost,
        user: config.mysqlUser,
        password: config.mysqlPassword,
        database: config.mysqlDatabase
    });

    this.connection.connect();
}

exports.execQuery = function (sqlString, success, error) {
    this.connection.query(sqlString, function (error, results, fields) {
        if (error) {
            error(error);
            return;
        }

        success(results);
    });
}