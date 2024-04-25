import { db } from "./db";
import { Router } from "express";

const forumsRouter = Router();

/*
GET /forums
POST /forums
GET /forums/:id
PUT /forums/:id -- sobreescribe 
PATCH /forums/:id -- actualiza
DELETE /forums/id


*/
forumsRouter.get("/", async (req, res) => {
  try {
    const forums = await db.forum.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });
    res.status(200).json(forums);
  } catch (e) {
    res.status(500).json({ error: "Internal error" });
  }
});
forumsRouter.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    if (name === undefined || typeof name !== "string") {
      return res.status(400).json({ error: "Missing name" });
    }
    const forum = await db.forum.create({
      data: { name },
    });
    res.status(201).json(forum);
  } catch (e) {
    res.status(500).json({ error: "Something went wrong, try later" });
  }
});

export default forumsRouter;
