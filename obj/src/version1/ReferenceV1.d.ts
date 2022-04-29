import { IStringIdentifiable } from 'pip-services3-commons-nodex';
export declare class ReferenceV1 implements IStringIdentifiable {
    constructor(id: string, type: string, name?: string);
    id: string;
    type: string;
    name?: string;
}
