import {MysqlConnection} from "./connection";
import {Entity} from "./entity";

export abstract class MysqlDao {
	constructor(protected connection: MysqlConnection) {
	}
	
	abstract async findById(): Promise<Entity>
	
	abstract async create(entity: Entity): Promise<number>
	
	abstract async update(entity: Entity): Promise<void>
	
	abstract async delete(entity: Entity): Promise<void>
}
