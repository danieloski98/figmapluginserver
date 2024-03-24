import {BadRequestException, Injectable} from '@nestjs/common';
import {JsonReaderService} from "../../../globalservices/json-reader/json-reader.service";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Person, PersonDocument} from "../../../schemas/Data.schema";
import {PaginationQueryDto} from "../../Dto/PaginationQueryDto";

@Injectable()
export class CreateDataService {
    constructor(private JsonReaderService: JsonReaderService, @InjectModel(Person.name) private  readonly  personModel: Model<Person>) {
    }

    async createEntries() {
        try {
            const dataCreated = await this.personModel.find();

            if (dataCreated.length > 1) {
                new BadRequestException('Data already entered');
            }
            const data = await this.JsonReaderService.readJson();
            // insert into the database
            for (let i = 0; i < data.length; i++) {
                await this.personModel.create(data[i]);
            }

            return {
                message: 'Creation sucessfull',
            }
        } catch (error) {
            throw new BadRequestException(error);
        }
    }

    async getData(query: PaginationQueryDto) {
        const { limit = 20, page = 0 } = query;
        const data = await this.personModel.find().skip(page).limit(limit).exec();
        const total = await this.personModel.countDocuments();

        return {
            message: 'Data',
            data,
            total,
            limit,
            page
        }
    }
}
