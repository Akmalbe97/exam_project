import { PartialType } from '@nestjs/mapped-types';
import { CreateSocialEconomicDto } from './create-social-economic.dto';

export class UpdateSocialEconomicDto extends PartialType(CreateSocialEconomicDto) {}
