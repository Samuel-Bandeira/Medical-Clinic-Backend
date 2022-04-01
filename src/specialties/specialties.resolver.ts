import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { SpecialtiesService } from './specialties.service';
import { Prisma } from '@prisma/client';
import { UpdateSpecialtyInput } from 'src/graphql';

@Resolver('Specialty')
export class SpecialtiesResolver {
  constructor(private readonly specialtiesService: SpecialtiesService) {}

  @Mutation('createSpecialty')
  create(
    @Args('createSpecialtyInput') createSpecialtyInput: Prisma.SpecialtyCreateInput,
  ) {
    return this.specialtiesService.create(createSpecialtyInput);
  }

  @Query('specialties')
  findAll() {
    return this.specialtiesService.findAll();
  }

  @Query('specialty')
  findOne(@Args('id') id: number) {
    return this.specialtiesService.findOne({ id });
  }

  @Mutation('updateSpecialty')
  update(
    @Args('updateSpecialtyInput') UpdateSpecialtyInput : Prisma.SpecialtyUpdateArgs
  ) {
    return this.specialtiesService.update(UpdateSpecialtyInput)
  }

  @Mutation('removeSpecialty')
  remove(@Args('id') id: number) {
    return this.specialtiesService.remove({ id });
  }
}


/* 
depois tentar implementar no . update:
{
  where: dto.id,
  data: {
    name: dto.name,
    doctors: dto.doctors
  }
}
*/