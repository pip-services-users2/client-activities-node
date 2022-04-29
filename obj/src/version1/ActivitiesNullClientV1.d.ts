import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { PartyActivityV1 } from './PartyActivityV1';
import { IActivitiesClientV1 } from './IActivitiesClientV1';
export declare class ActivitiesNullClientV1 implements IActivitiesClientV1 {
    constructor(config?: any);
    getPartyActivities(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<PartyActivityV1>>;
    logPartyActivity(correlationId: string, activity: PartyActivityV1): Promise<PartyActivityV1>;
    batchPartyActivities(correlationId: string, activities: PartyActivityV1[]): Promise<void>;
    deletePartyActivities(correlationId: string, filter: FilterParams): Promise<void>;
}
