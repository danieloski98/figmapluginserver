import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker/locale/en';

@Injectable()
export class AppService {
  getHello(): string[] {
    faker.seed(200);

    const names = faker.name.firstName();
    const lastNames = faker.name.lastName();
    return [names, lastNames];
  }
}
