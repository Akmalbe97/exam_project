import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsModule } from './news/news.module';
import { NewsModule } from './court/news/news.module';
import { CourtModule } from './news/court/court.module';
import { SocialEconomicModule } from './news/social-economic/social-economic.module';

@Module({
  imports: [NewsModule, CourtModule, SocialEconomicModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
