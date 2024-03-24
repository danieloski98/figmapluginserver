import { Injectable } from '@nestjs/common';
import { readFile } from 'fs'
import { promisify } from 'util'
import {Person} from "../../schemas/Data.schema";
import { join } from 'path';

@Injectable()
export class JsonReaderService {
    private readonly readFile = promisify(readFile);

    async readJson(): Promise<Person[]> {
        try {
            const fileContents = await this.readFile(join(process.cwd(), './dataset.json'), 'utf8');
            const persons: Person[] = JSON.parse(fileContents);
            return persons;
        } catch(error) {
            return error;
        }
    }
}
