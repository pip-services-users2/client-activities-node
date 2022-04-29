import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { GrpcClient } from 'pip-services3-grpc-nodex';
import { IActivitiesClientV1 } from './IActivitiesClientV1';
import { PartyActivityV1 } from './PartyActivityV1';
export declare class ActivitiesGrpcClientV1 extends GrpcClient implements IActivitiesClientV1 {
    constructor();
    getPartyActivities(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<any>;
    logPartyActivity(correlationId: string, activity: PartyActivityV1): Promise<PartyActivityV1>;
    batchPartyActivities(correlationId: string, activities: PartyActivityV1[]): Promise<void>;
    deletePartyActivities(correlationId: string, filter: FilterParams): Promise<void>;
}
