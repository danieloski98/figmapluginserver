import {Prop, raw, Schema, SchemaFactory} from '@nestjs/mongoose';
import {HydratedDocument, SchemaType, SchemaTypes} from 'mongoose';


export type PersonDocument = HydratedDocument<Person>;

@Schema()
class Personal_info {
    @Prop({
        isRequired: true,
        trim: true,
        type: SchemaTypes.String,
        transform: ((value: any) => value.toLowerCase())
    })
    name: string;

    @Prop({
        isRequired: true,
        trim: true,
        type: SchemaTypes.String,
        transform: ((value: any) => value.toLowerCase())
    })
    country: string;

    @Prop({
        isRequired: true,
        trim: true,
        type: SchemaTypes.String,
        transform: ((value: any) => value.toLowerCase())
    })
    continent: string;
}

@Schema()
class Contact {
    @Prop({
        isRequired: true,
        type: SchemaTypes.Number,
    })
    phone_extension: number;

    @Prop({
        isRequired: true,
        trim: true,
        type: SchemaTypes.String,
        transform: ((value: any) => value.toLowerCase())
    })
    phone_number: string;

    @Prop({
        isRequired: true,
        trim: true,
        type: SchemaTypes.String,
        transform: ((value: any) => value.toLowerCase())
    })
    phone_abbreviation: string;
}

@Schema()
export class Person{
    @Prop(raw({
        name: { type: SchemaTypes.String },
        country: { type: SchemaTypes.String },
        continent: { type: SchemaTypes.String },
    }))
    personal_info: Record<string, any>;

    @Prop(raw({
        phone_extension: { type: SchemaTypes.Number },
        phone_number: { type: SchemaTypes.String },
        phone_abbreviation: { type: SchemaTypes.String },
    }))
    contact_info: Record<string, any>;

    @Prop({
        isRequired: true,
        trim: true,
        type: SchemaTypes.String,
        transform: ((value: any) => value.toLowerCase())
    })
    email: string;

    @Prop({
        isRequired: true,
        trim: true,
        type: SchemaTypes.String,
        transform: ((value: any) => value.toLowerCase())
    })
    username: string;

    @Prop({
        default: new Date().toISOString(),
        type: SchemaTypes.String,
    })
    created_at: string;
}

export const PersonSchema = SchemaFactory.createForClass(Person);