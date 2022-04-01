import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { Doctor, Prisma } from '@prisma/client';
import { SpecialtiesService } from 'src/specialties/specialties.service';
import { DoctorsService } from './doctors.service';

@Resolver('Doctor')
export class DoctorsResolver {
  constructor(
    private readonly doctorsService: DoctorsService,
    private readonly specialtiesService: SpecialtiesService,
  ) {}
  @Mutation('createDoctor')
  create(@Args('createDoctorInput') createDoctorInput) {
    return this.doctorsService.create(createDoctorInput);
  }

  @Query('doctors')
  findAll() {
    return this.doctorsService.findAll();
  }

  @Query('doctor')
  findOne(@Args('id') id: number) {
    return this.doctorsService.findOne(id);
  }

  @Mutation('updateDoctor')
  update(
    @Args('updateDoctorInput')
    updateDoctorInput: {
      doctorId: number;
      specialtiesIds: number[];
      data: Prisma.DoctorUpdateInput;
      opType: string;
    },
  ) {
    return this.doctorsService.update(updateDoctorInput);
  }

  @Mutation('removeDoctor')
  remove(@Args('id') id: number) {
    return this.doctorsService.remove(id);
  }

  @ResolveField('specialties')
  async specialties(@Parent() parent: Doctor) {
    const response = await this.doctorsService.ds(parent.id)
    return response[0].specialties
  }
}
