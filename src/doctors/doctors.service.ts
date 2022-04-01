import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { prisma, Prisma } from '@prisma/client';
import { Specialty } from '@prisma/client';
@Injectable()
export class DoctorsService {
  constructor(private prisma: PrismaService) {}
  async create(createDoctorInput) {
    const { name, crm } = createDoctorInput;
    const specialties = createDoctorInput.specialtiesIds?.map((specialty) => ({
      id: specialty,
    }));

    return this.prisma.doctor.create({
      data: {
        name: name,
        crm: crm,
        specialties: {
          connect: specialties,
        },
      },
    });
  }

  findAll() {
    return this.prisma.doctor.findMany();
  }

  async ds(doctorId) {
    console.log('Doctor id:');
    console.log(doctorId);
    const response = await this.prisma.doctor.findUnique({
      where: {
        id: doctorId,
      },
      select: {
        specialties: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
    return [response];
  }

  findOne(id: number) {
    return this.prisma.doctor.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(updateDoctorInput: {
    doctorId: number;
    specialtiesIds: number[];
    data: Prisma.DoctorUpdateInput;
    opType: String;
  }) {
    const { doctorId, specialtiesIds, data, opType } = updateDoctorInput;

    if (opType == 'add') {
      const specialtiesToAdd = updateDoctorInput.specialtiesIds?.map(
        (specialty) => ({
          id: specialty,
        }),
      );
      return this.prisma.doctor.update({
        where: {
          id: doctorId,
        },
        data: {
          specialties: {
            connect: specialtiesToAdd,
          },
        },
      });
    } else if (opType == 'delete') {
      const specialtiesToDelete = updateDoctorInput.specialtiesIds?.map(
        (specialty) => ({
          id: specialty,
        }),
      );

      return this.prisma.doctor.update({
        where: {
          id: doctorId,
        },
        data: {
          specialties: {
            disconnect: specialtiesToDelete,
          },
        },
      });
    }
  }

  remove(id: number) {
    return this.prisma.doctor.delete({
      where: {
        id: id,
      },
    });
  }
}
