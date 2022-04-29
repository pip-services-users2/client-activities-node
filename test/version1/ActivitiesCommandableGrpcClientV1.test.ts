const assert = require('chai').assert;

import { Descriptor } from 'pip-services3-commons-nodex';
import { ConfigParams } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { ActivitiesMemoryPersistence } from 'service-activities-node';
import { ActivitiesController } from 'service-activities-node';
import { ActivitiesCommandableGrpcServiceV1 } from 'service-activities-node';
import { ActivitiesCommandableGrpcClientV1 } from '../../src/version1/ActivitiesCommandableGrpcClientV1';
import { ActivitiesClientFixtureV1 } from './ActivitiesClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('ActivitiesCommandableGrpcClientV1', ()=> {
    let service: ActivitiesCommandableGrpcServiceV1;
    let client: ActivitiesCommandableGrpcClientV1;
    let fixture: ActivitiesClientFixtureV1;

    suiteSetup(async () => {
        let logger = new ConsoleLogger();
        let persistence = new ActivitiesMemoryPersistence();
        let controller = new ActivitiesController();

        service = new ActivitiesCommandableGrpcServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-activities', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('service-activities', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('service-activities', 'service', 'commandable-grpc', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new ActivitiesCommandableGrpcClientV1();
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
