import { Module } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { DoctorsResolver } from './doctors.resolver';
import { PrismaService } from '../../prisma/prisma.service';
import { SpecialtiesService } from 'src/specialties/specialties.service';

@Module({
  providers: [
    SpecialtiesService,
    PrismaService,
    DoctorsResolver,
    DoctorsService,
  ],
})
export class DoctorsModule {}
