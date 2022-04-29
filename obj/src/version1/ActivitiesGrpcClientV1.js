"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivitiesGrpcClientV1 = void 0;
const services = require('../../../src/protos/activities_v1_grpc_pb');
const messages = require('../../../src/protos/activities_v1_pb');
const pip_services3_grpc_nodex_1 = require("pip-services3-grpc-nodex");
const ActivityGrpcConverterV1_1 = require("./ActivityGrpcConverterV1");
class ActivitiesGrpcClientV1 extends pip_services3_grpc_nodex_1.GrpcClient {
    constructor() {
        super(services.ActivitiesClient);
    }
    getPartyActivities(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.PartyActivityPageRequest();
            ActivityGrpcConverterV1_1.ActivityGrpcConverterV1.setMap(request.getFilterMap(), filter);
            request.setPaging(ActivityGrpcConverterV1_1.ActivityGrpcConverterV1.fromPagingParams(paging));
            let timing = this.instrument(correlationId, 'activities.get_party_activities');
            try {
                let response = yield this.call('get_party_activities', correlationId, request);
                if (response.error != null)
                    throw ActivityGrpcConverterV1_1.ActivityGrpcConverterV1.toError(response.error);
                return response
                    ? ActivityGrpcConverterV1_1.ActivityGrpcConverterV1.toPartyActivityPage(response.getPage())
                    : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    logPartyActivity(correlationId, activity) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.PartyActivityLogRequest();
            request.setActivity(ActivityGrpcConverterV1_1.ActivityGrpcConverterV1.fromPartyActivity(activity));
            let timing = this.instrument(correlationId, 'activities.log_party_activity');
            try {
                let response = yield this.call('log_party_activity', correlationId, request);
                if (response.error != null)
                    throw ActivityGrpcConverterV1_1.ActivityGrpcConverterV1.toError(response.error);
                return response
                    ? ActivityGrpcConverterV1_1.ActivityGrpcConverterV1.toPartyActivity(response.getActivity())
                    : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    batchPartyActivities(correlationId, activities) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.PartyActivityBatchRequest();
            request.setActivitiesList(ActivityGrpcConverterV1_1.ActivityGrpcConverterV1.fromPartyActivities(activities));
            let timing = this.instrument(correlationId, 'activities.batch_party_activities');
            try {
                let response = yield this.call('batch_party_activities', correlationId, request);
                if (response.error != null)
                    throw ActivityGrpcConverterV1_1.ActivityGrpcConverterV1.toError(response.error);
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    deletePartyActivities(correlationId, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.PartyActivityDeleteRequest();
            ActivityGrpcConverterV1_1.ActivityGrpcConverterV1.setMap(request.getFilterMap(), filter);
            let timing = this.instrument(correlationId, 'activities.delete_party_activities');
            try {
                let response = yield this.call('delete_party_activities', correlationId, request);
                if (response.error != null)
                    throw ActivityGrpcConverterV1_1.ActivityGrpcConverterV1.toError(response.error);
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
}
exports.ActivitiesGrpcClientV1 = ActivitiesGrpcClientV1;
//# sourceMappingURL=ActivitiesGrpcClientV1.js.map