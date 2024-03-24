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
exports.PersonController = void 0;
const common_1 = require("@nestjs/common");
const json_reader_service_1 = require("../globalservices/json-reader/json-reader.service");
const swagger_1 = require("@nestjs/swagger");
const create_data_service_1 = require("./service/create-data/create-data.service");
const PaginationQueryDto_1 = require("./Dto/PaginationQueryDto");
let PersonController = exports.PersonController = class PersonController {
    constructor(jsonService, createDataService) {
        this.jsonService = jsonService;
        this.createDataService = createDataService;
    }
    createData() {
        return this.createDataService.createEntries();
    }
    getData(query) {
        return this.createDataService.getData(query);
    }
};
__decorate([
    (0, common_1.Post)('create'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PersonController.prototype, "createData", null);
__decorate([
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false }),
    (0, common_1.Get)('data'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PaginationQueryDto_1.PaginationQueryDto]),
    __metadata("design:returntype", void 0)
], PersonController.prototype, "getData", null);
exports.PersonController = PersonController = __decorate([
    (0, swagger_1.ApiTags)('PERSON'),
    (0, common_1.Controller)('person'),
    __metadata("design:paramtypes", [json_reader_service_1.JsonReaderService, create_data_service_1.CreateDataService])
], PersonController);
//# sourceMappingURL=person.controller.js.map