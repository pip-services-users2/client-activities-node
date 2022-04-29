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
exports.ActivitiesLambdaClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_aws_nodex_1 = require("pip-services3-aws-nodex");
class ActivitiesLambdaClientV1 extends pip_services3_aws_nodex_1.CommandableLambdaClient {
    constructor(config) {
        super('activities');
        if (config != null)
            this.configure(pip_services3_commons_nodex_1.ConfigParams.fromValue(config));
    }
    getPartyActivities(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'activities.get_party_activities');
            try {
                return yield this.callCommand('get_party_activities', correlationId, {
                    filter: filter,
                    paging: paging
                });
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
            let timing = this.instrument(correlationId, 'activities.log_party_activity');
            try {
                return yield this.callCommand('log_party_activity', correlationId, {
                    activity: activity
                });
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
            let timing = this.instrument(correlationId, 'activities.batch_party_activities');
            try {
                return yield this.callCommand('batch_party_activities', correlationId, {
                    activities: activities
                });
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
            let timing = this.instrument(correlationId, 'activities.delete_party_activities');
            try {
                return yield this.callCommand('delete_party_activities', correlationId, {
                    filter: filter
                });
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
exports.ActivitiesLambdaClientV1 = ActivitiesLambdaClientV1;
//# sourceMappingURL=ActivitiesLambdaClientV1.js.map