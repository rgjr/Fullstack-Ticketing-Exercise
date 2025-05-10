import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

async function main() {
  const ticket1 = await prisma.ticket.create({
    data: {
      customerName: 'Jane Doe',
      email: 'jane.doe@email.com',
      status: 'open',
      notes: '',
    },
  });

  const ticket2 = await prisma.ticket.create({
    data: {
      customerName: 'John Doe',
      email: 'john.doe@email.com',
      status: 'pending',
      notes: '',
    },
  });

  const ticket3 = await prisma.ticket.create({
    data: {
      customerName: 'Bob Rob',
      email: 'bob@email.com',
      status: 'closed',
      notes: 'test notes',
    },
  });

  console.log({ ticket1, ticket2, ticket3 });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
