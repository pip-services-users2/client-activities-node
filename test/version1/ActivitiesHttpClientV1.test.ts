const assert = require('chai').assert;

import { Descriptor } from 'pip-services3-commons-nodex';
import { ConfigParams } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { ActivitiesMemoryPersistence } from 'service-activities-node';
import { ActivitiesController } from 'service-activities-node';
import { ActivitiesHttpServiceV1 } from 'service-activities-node';
import { ActivitiesHttpClientV1 } from '../../src/version1/ActivitiesHttpClientV1';
import { ActivitiesClientFixtureV1 } from './ActivitiesClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('ActivitiesHttpClientV1', ()=> {
    let service: ActivitiesHttpServiceV1;
    let client: ActivitiesHttpClientV1;
    let fixture: ActivitiesClientFixtureV1;

    suiteSetup(async () => {
        let logger = new ConsoleLogger();
        let persistence = new ActivitiesMemoryPersistence();
        let controller = new ActivitiesController();

        service = new ActivitiesHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-activities', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('service-activities', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('service-activities', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new ActivitiesHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new ActivitiesClientFixtureV1(client);

        await service.open(null);
        await client.open(null);
    });
    
    suiteTeardown(async () => {
        await client.close(null);
        await service.close(null);
    });

    test('Batch Party Activities', async () => {
        await fixture.testBatchPartyActivities();
    });

});
