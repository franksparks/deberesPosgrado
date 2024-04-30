import { db } from "./db";
import { Router } from "express";
import { send } from "./response";

const router = Router();

/*
GET /forums
POST /forums
GET /forums/:id
PUT /forums/:id -- sobreescribe 
PATCH /forums/:id -- actualiza
DELETE /forums/id

200 - OK
201 - Created
400 - Bad request
404 - Not Found
500 - Internal Server error
501 - Not implemented
*/
router.get("/", async (req, res) => {
  try {
    const forums = await db.forum.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });
    send(res).OK(forums);
  } catch (e) {
    send(res).InternalError("Could not get forums!");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const forum = await db.forum.findUniqueOrThrow({
      where: { forumId: Number(id) },
    });
    send(res).OK(forum);
  } catch (e: any) {
    if (e.name === "NotFoundError") {
      send(res).NotFound;
    }
    send(res).InternalError;
  }
});

router.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    if (name === undefined || typeof name !== "string") {
      send(res).BadRequest;
    }
    const forum = await db.forum.create({
      data: { name },
    });
    send(res).Created(forum);
  } catch (e) {
    send(res).InternalError("Cannot post!");
  }
});

export default router;
