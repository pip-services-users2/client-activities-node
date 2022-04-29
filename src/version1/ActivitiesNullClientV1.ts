import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { PartyActivityV1 } from './PartyActivityV1';
import { IActivitiesClientV1 } from './IActivitiesClientV1';

export class ActivitiesNullClientV1 implements IActivitiesClientV1 {
    constructor(config?: any) {}

    public async getPartyActivities(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<PartyActivityV1>> {
        return null;
    }

    public async logPartyActivity(correlationId: string, activity: PartyActivityV1): Promise<PartyActivityV1> {
        return null;
    }

    public async batchPartyActivities(correlationId: string, activities: PartyActivityV1[]): Promise<void> {
        return null;
    }

    public async deletePartyActivities(correlationId: string, filter: FilterParams): Promise<void> {
        return null;
    }
}
