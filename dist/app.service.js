"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const en_1 = require("@faker-js/faker/locale/en");
let AppService = exports.AppService = class AppService {
    getHello() {
        en_1.faker.seed(200);
        const SEED = 200;
        const array = [];
        for (let i = 0; i < SEED; i++) {
            const obj = {
                firstName: en_1.faker.name.firstName(),
                lastName: en_1.faker.name.lastName(),
                email: en_1.faker.internet.email(),
                avatartUrl: en_1.faker.image.avatar(),
            };
            array.push(obj);
        }
        return array;
    }
};
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map