// prisma/seed.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: "john.doe2@example.com",
      username: "johndoe2",
      firstName: "John",
      lastName: "Doe",
      password: "securepassword",
      posts: {
        create: [
          {
            title: "Domain services vs Application services",
            author: "stemmlerjs",
            content: "Content of the first post",
          },
          {
            title: "Ports and Adapters",
            author: "stemmlerjs",
            content: "Content of the second post",
          },
          {
            title:
              "An Introduction to Domain-Driven Design - DDD w/ TypeScript",
            author: "stemmlerjs",
            content: "Content of the third post",
          },
        ],
      },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
