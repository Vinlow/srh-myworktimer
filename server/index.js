var express = require('express')
var bodyParser = require('body-parser')
var services = require('./services');

var database = require('./libs/database/mysql.js');
database.connectDatabase();

var app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


services.importAll(app, database);

app.listen(3000)