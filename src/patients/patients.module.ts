import { Module } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { PatientsResolver } from './patients.resolver';

@Module({
  providers: [PatientsResolver, PatientsService]
})
export class PatientsModule {}
