import { ConfigParams } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { CommandableLambdaClient } from 'pip-services3-aws-nodex';

import { PartyActivityV1 } from './PartyActivityV1';
import { IActivitiesClientV1 } from './IActivitiesClientV1';

export class ActivitiesCommandableLambdaClientV1 extends CommandableLambdaClient implements IActivitiesClientV1 {

    constructor(config?: any) {
        super('activities');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
        
    public async getPartyActivities(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<PartyActivityV1>> {
        return await this.callCommand(
            'get_party_activities',
            correlationId,
            {
                filter: filter,
                paging: paging
            }
        );
    }

    public async logPartyActivity(correlationId: string, activity: PartyActivityV1): Promise<PartyActivityV1> {
        return await this.callCommand(
            'log_party_activity',
            correlationId,
            {
                activity: activity
            }
        );
    }

    public async batchPartyActivities(correlationId: string, activities: PartyActivityV1[]): Promise<void> {
        return await this.callCommand(
            'batch_party_activities',
            correlationId,
            {
                activities: activities
            }
        );
    }

    public async deletePartyActivities(correlationId: string, filter: FilterParams): Promise<void> {
        return await this.callCommand(
            'delete_party_activities',
            correlationId,
            {
                filter: filter
            }
        );
    }
}
