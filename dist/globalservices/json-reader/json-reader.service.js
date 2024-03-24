"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonReaderService = void 0;
const common_1 = require("@nestjs/common");
const fs_1 = require("fs");
const util_1 = require("util");
const path_1 = require("path");
let JsonReaderService = exports.JsonReaderService = class JsonReaderService {
    constructor() {
        this.readFile = (0, util_1.promisify)(fs_1.readFile);
    }
    async readJson() {
        try {
            const fileContents = await this.readFile((0, path_1.join)(process.cwd(), './dataset.json'), 'utf8');
            const persons = JSON.parse(fileContents);
            return persons;
        }
        catch (error) {
            return error;
        }
    }
};
exports.JsonReaderService = JsonReaderService = __decorate([
    (0, common_1.Injectable)()
], JsonReaderService);
//# sourceMappingURL=json-reader.service.js.map