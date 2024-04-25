import { db } from "./db";
import usersRouter from "./forums";

usersRouter.get("/", async (req, res) => {
  try {
    const users = await db.user.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });
    res.status(200).json(users);
  } catch (e) {
    res.status(500).json({ error: "Internal error" });
  }
});

usersRouter.post("/", async (req, res) => {
  try {
    const { nick } = req.body;
    if (nick === undefined || typeof nick !== "string") {
      return res.status(400).json({ error: "Missing nick" });
    }
    const forum = await db.user.create({
      data: { nick },
    });
    res.status(201).json(forum);
  } catch (e) {
    res.status(500).json({ error: "Something went wrong, try later" });
  }
});

export default usersRouter;
