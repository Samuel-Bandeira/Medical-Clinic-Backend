import { Injectable } from '@nestjs/common';
import { CreateSpecialtyInput } from './dto/create-specialty.input';
import { UpdateSpecialtyInput } from './dto/update-specialty.input';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/client';
@Injectable()
export class SpecialtiesService {
  constructor(private prisma: PrismaService) {}

  create(createSpecialtyInput: CreateSpecialtyInput) {
    return 'This action adds a new specialty';
  }

  findAll() {
    return this.prisma.specialty.findMany();
  }

  findOne(specialtyWhereUniqueInput: Prisma.SpecialtyWhereUniqueInput) {
    return this.prisma.specialty.findUnique({
      where: specialtyWhereUniqueInput,
    });
  }

  update(id: number, updateSpecialtyInput: UpdateSpecialtyInput) {
    return `This action updates a #${id} specialty`;
  }

  remove(id: number) {
    return `This action removes a #${id} specialty`;
  }
}
