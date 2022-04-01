import { Module } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { AppointmentsResolver } from './appointments.resolver';
import { PrismaService } from 'prisma/prisma.service';
@Module({
  providers: [PrismaService, AppointmentsResolver, AppointmentsService]
})
export class AppointmentsModule {}
