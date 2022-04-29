const assert = require('chai').assert;

import { Descriptor } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { ActivitiesMemoryPersistence } from 'service-activities-node';
import { ActivitiesController } from 'service-activities-node';
import { ActivitiesDirectClientV1 } from '../../src/version1/ActivitiesDirectClientV1';
import { ActivitiesClientFixtureV1 } from './ActivitiesClientFixtureV1';

suite('ActivitiesDirectClientV1', ()=> {
    let client: ActivitiesDirectClientV1;
    let fixture: ActivitiesClientFixtureV1;

    suiteSetup(async () => {
        let logger = new ConsoleLogger();
        let persistence = new ActivitiesMemoryPersistence();
        let controller = new ActivitiesController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-activities', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('service-activities', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new ActivitiesDirectClientV1();
        client.setReferences(references);

        fixture = new ActivitiesClientFixtureV1(client);

        await client.open(null);
    });
    
    suiteTeardown(async () => {
        await client.close(null);
    });

    test('Batch Party Activities', async () => {
        await fixture.testBatchPartyActivities();
    });

});
