import { Test, TestingModule } from '@nestjs/testing';
import { CreateDataService } from './create-data.service';

describe('CreateDataService', () => {
  let service: CreateDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateDataService],
    }).compile();

    service = module.get<CreateDataService>(CreateDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
