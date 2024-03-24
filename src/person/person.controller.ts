import {Controller, Get, Post, Query} from '@nestjs/common';
import {JsonReaderService} from "../globalservices/json-reader/json-reader.service";
import {ApiQuery, ApiTags} from "@nestjs/swagger";
import {CreateDataService} from "./service/create-data/create-data.service";
import {PaginationQueryDto} from "./Dto/PaginationQueryDto";

@ApiTags('PERSON')
@Controller('person')
export class PersonController {
    constructor(private jsonService: JsonReaderService, private createDataService: CreateDataService) {
    }

    @Post('create')
    createData() {
        return this.createDataService.createEntries();
    }

    @ApiQuery({ name: 'limit', required: false })
    @ApiQuery({ name: 'page', required: false })
    @Get('data')
    getData(@Query() query: PaginationQueryDto) {
        return this.createDataService.getData(query);
    }
}
