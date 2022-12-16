import { Descriptor } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams} from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { DirectClient } from 'pip-services3-rpc-nodex';

import { IActivitiesClientV1 } from './IActivitiesClientV1';
//import { IActivitiesController } from 'service-activities-node';
import { PartyActivityV1 } from './PartyActivityV1';

export class ActivitiesDirectClientV1 extends DirectClient<any> implements IActivitiesClientV1 {
            
    public constructor() {
        super();
        this._dependencyResolver.put('controller', new Descriptor("service-activities", "controller", "*", "*", "*"))
    }

    public async getPartyActivities(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<PartyActivityV1>> {
        let timing = this.instrument(correlationId, 'activities.get_party_activities');

        try {
            let res = await this._controller.getPartyActivities(correlationId, filter, paging);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async logPartyActivity(correlationId: string, activity: PartyActivityV1): Promise<PartyActivityV1> {
        let timing = this.instrument(correlationId, 'activities.log_party_activity');

        try {
            let res = await this._controller.logPartyActivity(correlationId, activity);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async batchPartyActivities(correlationId: string, activities: PartyActivityV1[]): Promise<void> {
        let timing = this.instrument(correlationId, 'activities.batch_party_activities');

        try {
            let res = await this._controller.batchPartyActivities(correlationId, activities);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async deletePartyActivities(correlationId: string, filter: FilterParams): Promise<void> {
        let timing = this.instrument(correlationId, 'activities.delete_party_activities');

        try {
            let res = await this._controller.deletePartyActivities(correlationId, filter);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

}