import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AppointmentsService } from './appointments.service';

@Resolver('Appointment')
export class AppointmentsResolver {
  constructor(private readonly appointmentsService: AppointmentsService) {}

  @Mutation('createAppointment')
  create(@Args('createAppointmentInput') createAppointmentInput) {
    return this.appointmentsService.create(createAppointmentInput);
  }

  @Query('appointments')
  findAll() {
    return this.appointmentsService.findAll();
  }

  @Query('appointment')
  findOne(@Args('id') id: number) {
    return this.appointmentsService.findOne(id);
  }

  @Mutation('updateAppointment')
  update(@Args('updateAppointmentInput') updateAppointmentInput) {
    return this.appointmentsService.update(updateAppointmentInput.id, updateAppointmentInput);
  }

  @Mutation('removeAppointment')
  remove(@Args('id') id: number) {
    return this.appointmentsService.remove(id);
  }
}
