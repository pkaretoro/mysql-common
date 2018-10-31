import {MysqlDao} from "../src/dao";
import {TestEntity, TestEntityTable} from "./test-entity";
import {MysqlConnection} from "../src/connection";

export class TestEntityDao extends MysqlDao {
	constructor(protected connection: MysqlConnection) {
		super(connection);
	}
	
	async create(entity: TestEntity): Promise<number> {
		const result = await this.connection.executeQuery(`INSERT INTO ${TestEntityTable} () values ();`);
		return (<any>result).insertId;
	}
	
	async delete(entity: TestEntity): Promise<void> {
		return undefined;
	}
	
	async findById(): Promise<TestEntity> {
		return undefined;
	}
	
	async update(entity: TestEntity): Promise<void> {
		return undefined;
	}
	
}
