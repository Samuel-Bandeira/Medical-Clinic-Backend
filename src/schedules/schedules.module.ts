import { Module } from '@nestjs/common';
import { SchedulesService } from './schedules.service';
import { SchedulesResolver } from './schedules.resolver';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  providers: [PrismaService, SchedulesResolver, SchedulesService]
})
export class SchedulesModule {}
