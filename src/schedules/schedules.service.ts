import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
const { g_m_d, g_m_a } = require('./functions');

/*
  model Schedule {
    id        Int      @id @default(autoincrement())
    doctor    Doctor   @relation(fields: [doctorId], references: [id])
    doctorId  Int
    startHour DateTime
    endHour   DateTime
  }
*/

@Injectable()
export class SchedulesService {
  constructor(private readonly prisma: PrismaService) {}
  create(createScheduleInput: {
    doctorId: number;
    data: Prisma.ScheduleCreateInput;
  }) {
    const { doctorId, data } = createScheduleInput;
    const { startHour, endHour } = data;

    const response = this.prisma.schedule.create({
      data: {
        doctorId: doctorId,
        startHour: startHour,
        endHour: endHour,
      },
    });
    console.log(response);
    return response;
  }

  findAll() {
    // const y = new Date().getFullYear();
    // const sm = 2;
    // const at = 10;
    // const sh = 6;
    // const hw = 8;
    // const t_s = g_m_d(y, sm, sh);

    // console.log(t_s);
    return this.prisma.schedule.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} schedule`;
  }

  update(id: number, updateScheduleInput) {
    return `This action updates a #${id} schedule`;
  }

  remove(id: number) {
    return `This action removes a #${id} schedule`;
  }
}
