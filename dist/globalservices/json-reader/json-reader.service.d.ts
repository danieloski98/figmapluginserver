import { Person } from "../../schemas/Data.schema";
export declare class JsonReaderService {
    private readonly readFile;
    readJson(): Promise<Person[]>;
}
