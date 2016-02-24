var dbconfig = require('./dbconfig');
var mysql = require('mysql');

var pool = mysql.createPool(dbconfig);

module.exports = pool;