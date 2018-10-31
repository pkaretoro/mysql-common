import * as mysql from 'mysql'
import {MysqlConnectionConfig} from "./config";
import {Connection} from "mysql";

export class MysqlConnection {
	private connection: Connection;
	
	constructor(private config: MysqlConnectionConfig) {
	}
	
	async connect() {
		this.connection = mysql.createConnection({
			host: this.config.host,
			port: this.config.port,
			user: this.config.user,
			password: this.config.password,
			database: this.config.database
		});
		return new Promise((resolve, reject) => {
			this.connection.connect((err) => {
				if (err) {
					console.error('mysql connection error', err);
					return reject(err);
				}
				console.info('mysql connection successfully established', this.connection.threadId);
				return resolve(this.connection);
			});
		});
	}
	
	async close() {
		if (!this.connection) {
			return;
		}
		return new Promise((resolve, reject) => {
			this.connection.end((err) => {
				if (err) {
					console.error('mysql ending connection error', err);
					return reject(err);
				}
				console.info('mysql connection successfully ended', this.connection.threadId);
				return resolve(this.connection);
			});
		});
	}
}