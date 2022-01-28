import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { SpecialtiesService } from './specialties.service';
import { CreateSpecialtyInput } from './dto/create-specialty.input';
import { UpdateSpecialtyInput } from './dto/update-specialty.input';

@Resolver('Specialty')
export class SpecialtiesResolver {
  constructor(private readonly specialtiesService: SpecialtiesService) {}

  @Mutation('createSpecialty')
  create(
    @Args('createSpecialtyInput') createSpecialtyInput: CreateSpecialtyInput,
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
    @Args('updateSpecialtyInput') updateSpecialtyInput: UpdateSpecialtyInput,
  ) {
    return this.specialtiesService.update(
      updateSpecialtyInput.id,
      updateSpecialtyInput,
    );
  }

  @Mutation('removeSpecialty')
  remove(@Args('id') id: number) {
    return this.specialtiesService.remove(id);
  }
}
