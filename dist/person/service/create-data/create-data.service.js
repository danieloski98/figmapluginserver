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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDataService = void 0;
const common_1 = require("@nestjs/common");
const json_reader_service_1 = require("../../../globalservices/json-reader/json-reader.service");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const Data_schema_1 = require("../../../schemas/Data.schema");
let CreateDataService = exports.CreateDataService = class CreateDataService {
    constructor(JsonReaderService, personModel) {
        this.JsonReaderService = JsonReaderService;
        this.personModel = personModel;
    }
    async createEntries() {
        try {
            const dataCreated = await this.personModel.find();
            if (dataCreated.length > 1) {
                new common_1.BadRequestException('Data already entered');
            }
            const data = await this.JsonReaderService.readJson();
            for (let i = 0; i < data.length; i++) {
                await this.personModel.create(data[i]);
            }
            return {
                message: 'Creation sucessfull',
            };
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async getData(query) {
        const { limit = 20, page = 0 } = query;
        const data = await this.personModel.find().skip(page).limit(limit).exec();
        const total = await this.personModel.countDocuments();
        return {
            message: 'Data',
            data,
            total,
            limit,
            page
        };
    }
};
exports.CreateDataService = CreateDataService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, mongoose_1.InjectModel)(Data_schema_1.Person.name)),
    __metadata("design:paramtypes", [json_reader_service_1.JsonReaderService, mongoose_2.Model])
], CreateDataService);
//# sourceMappingURL=create-data.service.js.map