import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma, Specialty } from '@prisma/client';
@Injectable()
export class SpecialtiesService {
  constructor(private prisma: PrismaService) {}

  create(createSpecialtyInput: Prisma.SpecialtyCreateInput) {
    return this.prisma.specialty.create({
      data: createSpecialtyInput
    })
  }

  findAll() {
    return this.prisma.specialty.findMany({
      include: {
        doctors: true
      }
    });
    
  }


  findOne(specialtyWhereUniqueInput: Prisma.SpecialtyWhereUniqueInput) {
    return this.prisma.specialty.findUnique({
      where: specialtyWhereUniqueInput,
    });
  }

  update(
    updateSpecialty: Prisma.SpecialtyUpdateArgs
  ) {
    const { where, data } = updateSpecialty
    return this.prisma.specialty.update({
      data,
      where
    })
  }

  remove(deleteSpecialtyInput: Prisma.SpecialtyWhereUniqueInput) {
    return this.prisma.specialty.delete({
      where: deleteSpecialtyInput
    });
  }
}
