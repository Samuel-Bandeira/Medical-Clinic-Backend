import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.specialty.deleteMany();
  const specialty = await prisma.specialty.create({
    data: {
      name: 'pediatria',
    },
  });
  console.log({ specialty });
}

main()