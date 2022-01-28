import { CreateSpecialtyInput } from './create-specialty.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateSpecialtyInput extends PartialType(CreateSpecialtyInput) {
  id: number;
}
