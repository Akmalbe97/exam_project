import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SocialEconomicService } from './social-economic.service';
import { CreateSocialEconomicDto } from './dto/create-social-economic.dto';
import { UpdateSocialEconomicDto } from './dto/update-social-economic.dto';

@Controller('social-economic')
export class SocialEconomicController {
  constructor(private readonly socialEconomicService: SocialEconomicService) {}

  @Post()
  create(@Body() createSocialEconomicDto: CreateSocialEconomicDto) {
    return this.socialEconomicService.create(createSocialEconomicDto);
  }

  @Get()
  findAll() {
    return this.socialEconomicService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.socialEconomicService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSocialEconomicDto: UpdateSocialEconomicDto) {
    return this.socialEconomicService.update(+id, updateSocialEconomicDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.socialEconomicService.remove(+id);
  }
}
