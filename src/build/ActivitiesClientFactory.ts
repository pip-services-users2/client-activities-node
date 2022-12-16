import { Descriptor } from 'pip-services3-commons-nodex';
import { Factory } from 'pip-services3-components-nodex';

import { ActivitiesNullClientV1 } from '../version1/ActivitiesNullClientV1';
import { ActivitiesDirectClientV1 } from '../version1/ActivitiesDirectClientV1';
import { ActivitiesCommandableHttpClientV1 } from '../version1/ActivitiesCommandableHttpClientV1';
import { ActivitiesCommandableGrpcClientV1 } from '../version1/ActivitiesCommandableGrpcClientV1';
import { ActivitiesGrpcClientV1 } from '../version1/ActivitiesGrpcClientV1';
import { ActivitiesCommandableLambdaClientV1 } from '../version1/ActivitiesCommandableLambdaClientV1';

export class ActivitiesClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('service-activities', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('service-activities', 'client', 'null', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('service-activities', 'client', 'direct', 'default', '1.0');
	public static CmdHttpClientV1Descriptor = new Descriptor('service-activities', 'client', 'commandable-http', 'default', '1.0');
	public static CommandableGrpcClientV1Descriptor = new Descriptor('service-activities', 'client', 'commandable-grpc', 'default', '1.0');
	public static GrpcClientV1Descriptor = new Descriptor('service-activities', 'client', 'grpc', 'default', '1.0');
	public static CmdLambdaClientV1Descriptor = new Descriptor('service-activities', 'client', 'commandable-lambda', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(ActivitiesClientFactory.NullClientV1Descriptor, ActivitiesNullClientV1);
		this.registerAsType(ActivitiesClientFactory.DirectClientV1Descriptor, ActivitiesDirectClientV1);
		this.registerAsType(ActivitiesClientFactory.CmdHttpClientV1Descriptor, ActivitiesCommandableHttpClientV1);
		this.registerAsType(ActivitiesClientFactory.CommandableGrpcClientV1Descriptor, ActivitiesCommandableGrpcClientV1);
		this.registerAsType(ActivitiesClientFactory.GrpcClientV1Descriptor, ActivitiesGrpcClientV1);
		this.registerAsType(ActivitiesClientFactory.CmdLambdaClientV1Descriptor, ActivitiesCommandableLambdaClientV1);
	}
	
}
