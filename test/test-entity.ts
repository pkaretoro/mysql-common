import {Entity} from "../src/entity";

export const TestEntityTable = 'test_entity';

export class TestEntity implements Entity {
	constructor(public id?: number) {
	}
}
