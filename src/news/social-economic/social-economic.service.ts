import { Injectable } from '@nestjs/common';
import { CreateSocialEconomicDto } from './dto/create-social-economic.dto';
import { UpdateSocialEconomicDto } from './dto/update-social-economic.dto';

@Injectable()
export class SocialEconomicService {
  create(createSocialEconomicDto: CreateSocialEconomicDto) {
    return 'This action adds a new socialEconomic';
  }

  findAll() {
    return `This action returns all socialEconomic`;
  }

  findOne(id: number) {
    return `This action returns a #${id} socialEconomic`;
  }

  update(id: number, updateSocialEconomicDto: UpdateSocialEconomicDto) {
    return `This action updates a #${id} socialEconomic`;
  }

  remove(id: number) {
    return `This action removes a #${id} socialEconomic`;
  }
}
