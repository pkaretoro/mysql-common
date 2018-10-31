var mysql = require('mysql');
var migration = require('node-mysql-migration');

var migrationPath = process.argv[3];

migration.migrate(mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'test-db',
	multipleStatements: true
}), migrationPath);
