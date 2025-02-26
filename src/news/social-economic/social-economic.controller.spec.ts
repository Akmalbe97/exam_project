import { Test, TestingModule } from '@nestjs/testing';
import { SocialEconomicController } from './social-economic.controller';
import { SocialEconomicService } from './social-economic.service';

describe('SocialEconomicController', () => {
  let controller: SocialEconomicController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SocialEconomicController],
      providers: [SocialEconomicService],
    }).compile();

    controller = module.get<SocialEconomicController>(SocialEconomicController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
