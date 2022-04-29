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
exports.ActivitiesNullClientV1 = void 0;
class ActivitiesNullClientV1 {
    constructor(config) { }
    getPartyActivities(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
    logPartyActivity(correlationId, activity) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
    batchPartyActivities(correlationId, activities) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
    deletePartyActivities(correlationId, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
}
exports.ActivitiesNullClientV1 = ActivitiesNullClientV1;
//# sourceMappingURL=ActivitiesNullClientV1.js.map