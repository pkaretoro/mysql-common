import {Entity} from "../src/entity";

export class TestEntity implements Entity {
	constructor(public name: string, public id?: number) {
	}
}
