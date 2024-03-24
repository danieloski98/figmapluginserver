import { Module } from '@nestjs/common';
import { PersonController } from './person.controller';
import {JsonReaderService} from "../globalservices/json-reader/json-reader.service";
import {MongooseModule} from "@nestjs/mongoose";
import {Person, PersonSchema} from "../schemas/Data.schema";
import { CreateDataService } from './service/create-data/create-data.service';

@Module({
  imports: [
      MongooseModule.forFeature([
        { name: Person.name, schema: PersonSchema }
      ]),
  ],
  controllers: [PersonController],
  providers: [JsonReaderService, CreateDataService],
})
export class PersonModule {}
