const messages = require('../../../src/protos/activities_v1_pb');

import { DataPage } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { StringConverter } from 'pip-services3-commons-nodex';
import { DateTimeConverter } from 'pip-services3-commons-nodex';
import { ErrorDescriptionFactory } from 'pip-services3-commons-nodex';
import { ErrorDescription } from 'pip-services3-commons-nodex';
import { ApplicationExceptionFactory } from 'pip-services3-commons-nodex';

import { PartyActivityV1 } from './PartyActivityV1';
import { ReferenceV1 } from './ReferenceV1';

export class ActivityGrpcConverterV1 {

    public static fromError(err: any): any {
        if (err == null) return null;

        let description = ErrorDescriptionFactory.create(err);
        let obj = new messages.ErrorDescription();

        obj.setType(description.type);
        obj.setCategory(description.category);
        obj.setCode(description.code);
        obj.setCorrelationId(description.correlation_id);
        obj.setStatus(description.status);
        obj.setMessage(description.message);
        obj.setCause(description.cause);
        obj.setStackTrace(description.stack_trace);
        ActivityGrpcConverterV1.setMap(obj.getDetailsMap(), description.details);

        return obj;
    }

    public static toError(obj: any): any {
        if (obj == null || (obj.getCategory() == "" && obj.getMessage() == ""))
            return null;

        let description: ErrorDescription = {
            type: obj.getType(),
            category: obj.getCategory(),
            code: obj.getCode(),
            correlation_id: obj.getCorrelationId(),
            status: obj.getStatus(),
            message: obj.getMessage(),
            cause: obj.getCause(),
            stack_trace: obj.getStackTrace(),
            details: ActivityGrpcConverterV1.getMap(obj.getDetailsMap())
        }

        return ApplicationExceptionFactory.create(description);
    }

    public static setMap(map: any, values: any): void {
        if (values == null) return;

        for (let propName in values) {
            if (values.hasOwnProperty(propName))
                map[propName] = values[propName];
        }
    }

    public static getMap(map: any): any {
        let values = {};
        ActivityGrpcConverterV1.setMap(values, map);
        return values;
    }

    public static fromPagingParams(paging: PagingParams): any {
        if (paging == null) return null;

        let obj = new messages.PagingParams();

        obj.setSkip(paging.skip);
        obj.setTake(paging.take);
        obj.setTotal(paging.total);

        return obj;
    }

    public static toPagingParams(obj: any): PagingParams {
        if (obj == null)
            return null;

        let paging: PagingParams = new PagingParams(
            obj.getSkip(),
            obj.getTake(),
            obj.getTotal()
        );

        return paging;
    }

    public static fromReference(reference: ReferenceV1): any {
        if (reference == null) return null;

        let obj = new messages.Reference();

        obj.setId(reference.id);
        obj.setType(reference.type);
        obj.setName(reference.name);

        return obj;
    }

    public static toReference(obj: any): ReferenceV1 {
        if (obj == null) return null;

        let reference: ReferenceV1 = {
            id: obj.getId(),
            type: obj.getType(),
            name: obj.getName()
        };

        return reference;
    }

    public static fromReferences(references: ReferenceV1[]): any {
        if (references == null) return null;

        let a = []

        references.forEach(ref => {
            let obj = new messages.Reference();

            obj.setId(ref.id);
            obj.setType(ref.type);
            obj.setName(ref.name);

            a.push(obj);
        });

        return a;
    }

    public static toReferences(objArr: any): ReferenceV1[] {
        if (objArr == null) return null;

        let references = []

        objArr.forEach(obj => {
            let reference: ReferenceV1 = {
                id: obj.getId(),
                type: obj.getType(),
                name: obj.getName()
            };

            references.push(reference);
        });

        return references;
    }

    public static fromPartyActivity(activity: PartyActivityV1): any {
        if (activity == null) return null;

        let obj = new messages.PartyActivity();

        obj.setId(activity.id);
        obj.setOrgId(activity.org_id);
        obj.setTime(StringConverter.toString(activity.time));
        obj.setType(activity.type);
        obj.setParty(ActivityGrpcConverterV1.fromReference(activity.party));
        obj.setRefItem(ActivityGrpcConverterV1.fromReference(activity.ref_item));
        obj.setRefParentsList(ActivityGrpcConverterV1.fromReferences(activity.ref_parents)); // ReferenceV1[]
        obj.setRefParty(ActivityGrpcConverterV1.fromReference(activity.ref_party));
        ActivityGrpcConverterV1.setMap(obj.getDetailsMap(), activity.details);

        return obj;
    }

    public static toPartyActivity(obj: any): PartyActivityV1 {
        if (obj == null) return null;

        let activity: PartyActivityV1 = {
            id: obj.getId(),
            org_id: obj.getOrgId(),
            time: DateTimeConverter.toDateTime(obj.getTime()),
            type: obj.getType(),
            party: ActivityGrpcConverterV1.toReference(obj.getParty()),
            ref_item: ActivityGrpcConverterV1.toReference(obj.getRefItem()),
            ref_parents: ActivityGrpcConverterV1.toReferences(obj.getRefParentsList()), // Reference[]
            ref_party: ActivityGrpcConverterV1.toReference(obj.getRefParty()),
            details: ActivityGrpcConverterV1.getMap(obj.getDetailsMap())
        };

        return activity;
    }

    public static fromPartyActivities(activities: PartyActivityV1[]): any {
        if (activities == null) return null;

        let a = []

        activities.forEach(activity => {
            a.push(ActivityGrpcConverterV1.fromPartyActivity(activity));
        });

        return a;
    }

    public static toPartyActivities(objArr: any): PartyActivityV1[] {
        if (objArr == null) return null;

        let activities = []

        objArr.forEach(obj => {
            activities.push(ActivityGrpcConverterV1.toPartyActivity(obj));
        });

        return activities;
    }

    public static fromPartyActivityPage(page: DataPage<PartyActivityV1>): any {
        if (page == null) return null;

        let obj = new messages.PartyActivityPage();

        obj.setTotal(page.total);
        let data = page.data.map(ActivityGrpcConverterV1.fromPartyActivity);
        obj.setDataList(data);

        return obj;
    }

    public static toPartyActivityPage(obj: any): DataPage<PartyActivityV1> {
        if (obj == null) return null;

        let data = obj.getDataList().map(ActivityGrpcConverterV1.toPartyActivity);
        let page: DataPage<PartyActivityV1> = {
            total: obj.getTotal(),
            data: data
        };

        return page;
    }

}