import { ConfigParams } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { CommandableGrpcClient } from 'pip-services3-grpc-nodex';

import { PartyActivityV1 } from './PartyActivityV1';
import { IActivitiesClientV1 } from './IActivitiesClientV1';

export class ActivitiesCommandableGrpcClientV1 extends CommandableGrpcClient implements IActivitiesClientV1 {

    constructor(config?: any) {
        super('v1/activities');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
        
    public async getPartyActivities(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<PartyActivityV1>> {
        let timing = this.instrument(correlationId, 'activities.get_party_activities');

        try {
            return await this.callCommand(
                'get_party_activities',
                correlationId,
                {
                    filter: filter,
                    paging: paging
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async logPartyActivity(correlationId: string, activity: PartyActivityV1): Promise<PartyActivityV1> {
        let timing = this.instrument(correlationId, 'activities.log_party_activity');

        try {
            return await this.callCommand(
                'log_party_activity',
                correlationId,
                {
                    activity: activity
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async batchPartyActivities(correlationId: string, activities: PartyActivityV1[]): Promise<void> {
        let timing = this.instrument(correlationId, 'activities.batch_party_activities');

        try {
            return await this.callCommand(
                'batch_party_activities',
                correlationId,
                {
                    activities: activities
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async deletePartyActivities(correlationId: string, filter: FilterParams): Promise<void> {
        let timing = this.instrument(correlationId, 'activities.delete_party_activities');

        try {
            return await this.callCommand(
                'delete_party_activities',
                correlationId,
                {
                    filter: filter
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

}
