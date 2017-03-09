var express = require('express')
var bodyParser = require('body-parser')
var services = require('./services');

var database = require('./libs/database/mysql.js');
database.connectDatabase();
database.execQuery('SELECT * FROM test_table',
    function (results) {
        console.log(results)
    },
    function (error) {
        console.log(error);
    }
)

var app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


services.importAll(app);

/*app.listen(3000)*/