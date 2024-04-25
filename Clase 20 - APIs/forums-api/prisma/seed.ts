import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

//Forums
const frontendForum = await db.forum.create({
  data: { name: "Preguntas Frontend" },
});
console.log(`Created forum with id: ${frontendForum.forumId}`);

const backendForum = await db.forum.create({
  data: { name: "Preguntas Backend" },
});
console.log(`Created forum with id: ${backendForum.forumId}`);

const frank = await db.user.create({
  data: {
    nick: "frankbsparks",
    fullName: "Ferran Bals",
    messages: {
      createMany: {
        data: [
          { forumId: backendForum.forumId, text: "Backend message" },
          { forumId: frontendForum.forumId, text: "Frontend message" },
        ],
      },
    },
  },
});
console.log(`Created user with nick: ${frank.nick} (${frank.userId})`);
