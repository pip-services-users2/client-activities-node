import { IStringIdentifiable } from 'pip-services3-commons-nodex';

export class ReferenceV1 implements IStringIdentifiable {
    public constructor(id: string, type: string, name?: string) {
        this.id = id;
        this.type = type;
        this.name = name;
    }

    public id: string;
    public type: string;
    public name?: string;
}