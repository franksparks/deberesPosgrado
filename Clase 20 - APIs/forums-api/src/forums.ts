import type { Express } from "express";
import { db } from "./db";

/*
GET /forums
POST /forums
GET /forums/:id
PUT /forums/:id -- sobreescribe 
PATCH /forums/:id -- actualiza
DELETE /forums/id


*/
export const setupForumEndpoints = (app: Express) => {
  app.get("/forums", async (req, res) => {
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
};
