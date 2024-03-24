import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import {MongooseModule} from "@nestjs/mongoose";
import { JsonReaderService } from './globalservices/json-reader/json-reader.service';
import { PersonModule } from './person/person.module';
require('dotenv').config();

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
      MongooseModule.forRoot(process.env.MONGODB_URI),
      PersonModule
  ],
  controllers: [AppController],
  providers: [AppService, JsonReaderService],
})
export class AppModule {}
