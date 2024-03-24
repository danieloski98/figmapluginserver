"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonSchema = exports.Person = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Personal_info = class Personal_info {
};
__decorate([
    (0, mongoose_1.Prop)({
        isRequired: true,
        trim: true,
        type: mongoose_2.SchemaTypes.String,
        transform: ((value) => value.toLowerCase())
    }),
    __metadata("design:type", String)
], Personal_info.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        isRequired: true,
        trim: true,
        type: mongoose_2.SchemaTypes.String,
        transform: ((value) => value.toLowerCase())
    }),
    __metadata("design:type", String)
], Personal_info.prototype, "country", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        isRequired: true,
        trim: true,
        type: mongoose_2.SchemaTypes.String,
        transform: ((value) => value.toLowerCase())
    }),
    __metadata("design:type", String)
], Personal_info.prototype, "continent", void 0);
Personal_info = __decorate([
    (0, mongoose_1.Schema)()
], Personal_info);
let Contact = class Contact {
};
__decorate([
    (0, mongoose_1.Prop)({
        isRequired: true,
        type: mongoose_2.SchemaTypes.Number,
    }),
    __metadata("design:type", Number)
], Contact.prototype, "phone_extension", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        isRequired: true,
        trim: true,
        type: mongoose_2.SchemaTypes.String,
        transform: ((value) => value.toLowerCase())
    }),
    __metadata("design:type", String)
], Contact.prototype, "phone_number", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        isRequired: true,
        trim: true,
        type: mongoose_2.SchemaTypes.String,
        transform: ((value) => value.toLowerCase())
    }),
    __metadata("design:type", String)
], Contact.prototype, "phone_abbreviation", void 0);
Contact = __decorate([
    (0, mongoose_1.Schema)()
], Contact);
let Person = exports.Person = class Person {
};
__decorate([
    (0, mongoose_1.Prop)((0, mongoose_1.raw)({
        name: { type: mongoose_2.SchemaTypes.String },
        country: { type: mongoose_2.SchemaTypes.String },
        continent: { type: mongoose_2.SchemaTypes.String },
    })),
    __metadata("design:type", Object)
], Person.prototype, "personal_info", void 0);
__decorate([
    (0, mongoose_1.Prop)((0, mongoose_1.raw)({
        phone_extension: { type: mongoose_2.SchemaTypes.Number },
        phone_number: { type: mongoose_2.SchemaTypes.String },
        phone_abbreviation: { type: mongoose_2.SchemaTypes.String },
    })),
    __metadata("design:type", Object)
], Person.prototype, "contact_info", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        isRequired: true,
        trim: true,
        type: mongoose_2.SchemaTypes.String,
        transform: ((value) => value.toLowerCase())
    }),
    __metadata("design:type", String)
], Person.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        isRequired: true,
        trim: true,
        type: mongoose_2.SchemaTypes.String,
        transform: ((value) => value.toLowerCase())
    }),
    __metadata("design:type", String)
], Person.prototype, "username", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: new Date().toISOString(),
        type: mongoose_2.SchemaTypes.String,
    }),
    __metadata("design:type", String)
], Person.prototype, "created_at", void 0);
exports.Person = Person = __decorate([
    (0, mongoose_1.Schema)()
], Person);
exports.PersonSchema = mongoose_1.SchemaFactory.createForClass(Person);
//# sourceMappingURL=Data.schema.js.map