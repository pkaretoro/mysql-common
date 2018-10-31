export class MysqlConnectionConfig {
	constructor(
		public user: string,
		public password: string,
		public host?: string,
		public port?: number,
		public database?: string) {
	}
}