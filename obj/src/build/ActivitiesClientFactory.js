"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivitiesClientFactory = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_components_nodex_1 = require("pip-services3-components-nodex");
const ActivitiesNullClientV1_1 = require("../version1/ActivitiesNullClientV1");
const ActivitiesDirectClientV1_1 = require("../version1/ActivitiesDirectClientV1");
const ActivitiesCommandableHttpClientV1_1 = require("../version1/ActivitiesCommandableHttpClientV1");
const ActivitiesCommandableGrpcClientV1_1 = require("../version1/ActivitiesCommandableGrpcClientV1");
const ActivitiesGrpcClientV1_1 = require("../version1/ActivitiesGrpcClientV1");
const ActivitiesCommandableLambdaClientV1_1 = require("../version1/ActivitiesCommandableLambdaClientV1");
class ActivitiesClientFactory extends pip_services3_components_nodex_1.Factory {
    constructor() {
        super();
        this.registerAsType(ActivitiesClientFactory.NullClientV1Descriptor, ActivitiesNullClientV1_1.ActivitiesNullClientV1);
        this.registerAsType(ActivitiesClientFactory.DirectClientV1Descriptor, ActivitiesDirectClientV1_1.ActivitiesDirectClientV1);
        this.registerAsType(ActivitiesClientFactory.CmdHttpClientV1Descriptor, ActivitiesCommandableHttpClientV1_1.ActivitiesCommandableHttpClientV1);
        this.registerAsType(ActivitiesClientFactory.CommandableGrpcClientV1Descriptor, ActivitiesCommandableGrpcClientV1_1.ActivitiesCommandableGrpcClientV1);
        this.registerAsType(ActivitiesClientFactory.GrpcClientV1Descriptor, ActivitiesGrpcClientV1_1.ActivitiesGrpcClientV1);
        this.registerAsType(ActivitiesClientFactory.CmdLambdaClientV1Descriptor, ActivitiesCommandableLambdaClientV1_1.ActivitiesCommandableLambdaClientV1);
    }
}
exports.ActivitiesClientFactory = ActivitiesClientFactory;
ActivitiesClientFactory.Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-activities', 'factory', 'default', 'default', '1.0');
ActivitiesClientFactory.NullClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-activities', 'client', 'null', 'default', '1.0');
ActivitiesClientFactory.DirectClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-activities', 'client', 'direct', 'default', '1.0');
ActivitiesClientFactory.CmdHttpClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-activities', 'client', 'commandable-http', 'default', '1.0');
ActivitiesClientFactory.CommandableGrpcClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-activities', 'client', 'commandable-grpc', 'default', '1.0');
ActivitiesClientFactory.GrpcClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-activities', 'client', 'grpc', 'default', '1.0');
ActivitiesClientFactory.CmdLambdaClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-activities', 'client', 'commandable-lambda', 'default', '1.0');
//# sourceMappingURL=ActivitiesClientFactory.js.map