import express from "express";
import cors from "cors";
import morgan from "morgan";

const { PORT } = process.env;

const app = express();

app.use(cors);
app.use(morgan(""));
app.use(express.json());

app.get("/", async (req, res) => {
  res.status(200).json({ ok: true, message: "hello" });
});

app.listen(PORT, () => {
  console.log(`Forum API listening on http://localhost:${PORT}`);
});
