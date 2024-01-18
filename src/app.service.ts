import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker/locale/en';

@Injectable()
export class AppService {
  getHello(): string[] {
    faker.seed(200);
    const SEED = 200;
    const array = [];

    for (let i = 0; i < SEED; i++) {
      const obj = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        avatartUrl: faker.image.avatar(),
      };

      array.push(obj);
    }
    return array;
  }
}
