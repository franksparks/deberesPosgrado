import type { Express } from "express";
import { db } from "./db";

export const setupUserEndpoints = (app: Express) => {
  app.get("/users", async (req, res) => {
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
};
