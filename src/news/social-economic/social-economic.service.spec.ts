import { Test, TestingModule } from '@nestjs/testing';
import { SocialEconomicService } from './social-economic.service';

describe('SocialEconomicService', () => {
  let service: SocialEconomicService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SocialEconomicService],
    }).compile();

    service = module.get<SocialEconomicService>(SocialEconomicService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
