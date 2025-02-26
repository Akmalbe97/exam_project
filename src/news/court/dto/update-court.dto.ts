import { PartialType } from '@nestjs/mapped-types';
import { CreateCourtDto } from './create-court.dto';

export class UpdateCourtDto extends PartialType(CreateCourtDto) {
  title?: string;
  description?: string;
  image?: string;
}
