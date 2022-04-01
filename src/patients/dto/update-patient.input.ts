import { CreatePatientInput } from './create-patient.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdatePatientInput extends PartialType(CreatePatientInput) {
  id: number;
}
