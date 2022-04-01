import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PatientsService } from './patients.service';
import { CreatePatientInput } from './dto/create-patient.input';
import { UpdatePatientInput } from './dto/update-patient.input';

@Resolver('Patient')
export class PatientsResolver {
  constructor(private readonly patientsService: PatientsService) {}

  @Mutation('createPatient')
  create(@Args('createPatientInput') createPatientInput: CreatePatientInput) {
    return this.patientsService.create(createPatientInput);
  }

  @Query('patients')
  findAll() {
    return this.patientsService.findAll();
  }

  @Query('patient')
  findOne(@Args('id') id: number) {
    return this.patientsService.findOne(id);
  }

  @Mutation('updatePatient')
  update(@Args('updatePatientInput') updatePatientInput: UpdatePatientInput) {
    return this.patientsService.update(updatePatientInput.id, updatePatientInput);
  }

  @Mutation('removePatient')
  remove(@Args('id') id: number) {
    return this.patientsService.remove(id);
  }
}
