import { Module } from '@nestjs/common';
import { SocialEconomicService } from './social-economic.service';
import { SocialEconomicController } from './social-economic.controller';

@Module({
  controllers: [SocialEconomicController],
  providers: [SocialEconomicService],
})
export class SocialEconomicModule {}
