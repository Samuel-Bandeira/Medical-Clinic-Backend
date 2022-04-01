import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { SchedulesService } from './schedules.service';
import { Prisma } from '@prisma/client';

@Resolver('Schedule')
export class SchedulesResolver {
  constructor(private readonly schedulesService: SchedulesService) {}
  /*

  model Schedule {
    id        Int      @id @default(autoincrement())
    doctor    Doctor   @relation(fields: [doctorId], references: [id])
    doctorId  Int
    startHour DateTime
    endHour   DateTime
  }

  */
  @Mutation('createSchedule')
  create(
    @Args('createScheduleInput')
    createScheduleInput: {
      doctorId: number;
      data: Prisma.ScheduleCreateInput;
    },
  ) {
    return this.schedulesService.create(createScheduleInput);
  }

  @Query('schedules')
  findAll() {
    return this.schedulesService.findAll();
  }

  @Query('schedule')
  findOne(@Args('id') id: number) {
    return this.schedulesService.findOne(id);
  }

  @Mutation('updateSchedule')
  update(@Args('updateScheduleInput') updateScheduleInput) {
    return this.schedulesService.update(
      updateScheduleInput.id,
      updateScheduleInput,
    );
  }

  @Mutation('removeSchedule')
  remove(@Args('id') id: number) {
    return this.schedulesService.remove(id);
  }
}
