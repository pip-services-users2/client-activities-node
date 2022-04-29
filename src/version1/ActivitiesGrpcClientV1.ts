const services = require('../../../src/protos/activities_v1_grpc_pb');
const messages = require('../../../src/protos/activities_v1_pb');

import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams} from 'pip-services3-commons-nodex';
import { GrpcClient } from 'pip-services3-grpc-nodex';

import { IActivitiesClientV1 } from './IActivitiesClientV1';
//import { IActivitiesController } from 'service-activities-node';
import { PartyActivityV1 } from './PartyActivityV1';
import { ActivityGrpcConverterV1 } from './ActivityGrpcConverterV1';

export class ActivitiesGrpcClientV1 extends GrpcClient implements IActivitiesClientV1 {
            
    public constructor() {
        super(services.ActivitiesClient);
    }

    public async getPartyActivities(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<any> {
        let request = new messages.PartyActivityPageRequest();

        ActivityGrpcConverterV1.setMap(request.getFilterMap(), filter);
        request.setPaging(ActivityGrpcConverterV1.fromPagingParams(paging));

        let timing = this.instrument(correlationId, 'activities.get_party_activities');

        try {
            let response = await this.call<any>('get_party_activities', correlationId, request);

            if (response.error != null)
                throw ActivityGrpcConverterV1.toError(response.error);

            return response
                ? ActivityGrpcConverterV1.toPartyActivityPage(response.getPage())
                : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async logPartyActivity(correlationId: string, activity: PartyActivityV1): Promise<PartyActivityV1> {

        let request = new messages.PartyActivityLogRequest();
        request.setActivity(ActivityGrpcConverterV1.fromPartyActivity(activity));

        let timing = this.instrument(correlationId, 'activities.log_party_activity');

        try {
            let response = await this.call<any>('log_party_activity', correlationId, request);

            if (response.error != null)
                throw ActivityGrpcConverterV1.toError(response.error);

            return response
                ? ActivityGrpcConverterV1.toPartyActivity(response.getActivity())
                : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async batchPartyActivities(correlationId: string, activities: PartyActivityV1[]): Promise<void> {

        let request = new messages.PartyActivityBatchRequest();
        request.setActivitiesList(ActivityGrpcConverterV1.fromPartyActivities(activities));

        let timing = this.instrument(correlationId, 'activities.batch_party_activities');

        try {
            let response = await this.call<any>('batch_party_activities', correlationId, request);

            if (response.error != null)
                throw ActivityGrpcConverterV1.toError(response.error);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async deletePartyActivities(correlationId: string, filter: FilterParams): Promise<void> {

        let request = new messages.PartyActivityDeleteRequest();
        ActivityGrpcConverterV1.setMap(request.getFilterMap(), filter);

        let timing = this.instrument(correlationId, 'activities.delete_party_activities');

        try {
            let response = await this.call<any>('delete_party_activities', correlationId, request);

            if (response.error != null)
                throw ActivityGrpcConverterV1.toError(response.error);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

}