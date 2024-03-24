import { Test, TestingModule } from '@nestjs/testing';
import { JsonReaderService } from './json-reader.service';

describe('JsonReaderService', () => {
  let service: JsonReaderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JsonReaderService],
    }).compile();

    service = module.get<JsonReaderService>(JsonReaderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
