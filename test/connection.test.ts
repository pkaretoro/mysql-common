import 'jest';
import * as fs from 'fs';
import * as path from 'path';
import {MysqlConnectionConfig} from "../src/config";
import {MysqlConnection} from "../src/connection";
import {TestEntityDao} from "./test-entity-dao";
import {TestEntity} from "./test-entity";

describe("Mysql Connection integration test", () => {
	
	const configFilePath = path.resolve(__dirname, 'config-test.json');
	const configContent = fs.readFileSync(configFilePath).toString();
	const config = JSON.parse(configContent);
	
	test('Should create Mysql connection and close it successfully', async () => {
		//Given
		const mysqlConnectionConfig = new MysqlConnectionConfig(config.user, config.password, config.host, config.port, config.database);
		
		const mysqlConnection = new MysqlConnection(mysqlConnectionConfig);
		
		//When
		await mysqlConnection.connect();
		await mysqlConnection.close();
	});
	
	test('Should create test entity', async () => {
		//Given
		const mysqlConnectionConfig = new MysqlConnectionConfig(config.user, config.password, config.host, config.port, config.database);
		
		const mysqlConnection = new MysqlConnection(mysqlConnectionConfig);
		const testEntityDao = new TestEntityDao(mysqlConnection);
		const entityName = 'My Test Entity';
		const testEntity = new TestEntity(entityName);
		
		await mysqlConnection.connect();
		
		//When
		const id = await testEntityDao.create(testEntity);
		
		const fetchedEntity = await testEntityDao.findById(id);
		
		expect(fetchedEntity.name).toEqual(entityName);
		
		await mysqlConnection.close();
	});
	
});
