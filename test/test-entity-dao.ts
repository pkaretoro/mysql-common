import * as squel from 'squel';
import {MysqlDao} from "../src/dao";
import {TestEntity} from "./test-entity";
import {MysqlConnection} from "../src/connection";

export const TestEntityTable = 'test_entity';

export class TestEntityDao extends MysqlDao {
	constructor(protected connection: MysqlConnection) {
		super(connection);
	}
	
	async create(entity: TestEntity): Promise<number> {
		const sql = squel.insert()
			.into(TestEntityTable)
			.set('name', entity.name)
			.toString();
		const result = await this.connection.executeQuery(sql);
		return (<any>result).insertId;
	}
	
	async delete(entity: TestEntity): Promise<void> {
		return undefined;
	}
	
	async findById(id: any): Promise<TestEntity> {
		const sql = squel.select()
			.from(TestEntityTable)
			.where('id = ?', id)
			.toString();
		const result = await this.connection.executeQuery(sql);
		return result[0]
	}
	
	async update(entity: TestEntity): Promise<void> {
		return undefined;
	}
	
}
