import express from "express";
import cors from "cors";
import morgan from "morgan";
import forumsRouter from "./forums";
import usersRouter from "./users";

const { PORT } = process.env;

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

/* GOLDEN RULE  
  Si un handler es async, necesita sí o sí un try catch
  En caso contrario, el servidor podría caer
*/
app.use("/forums", forumsRouter);
app.use("/users", usersRouter);

app.listen(PORT, () => {
  console.log(`Forum API listening on http://localhost:${PORT}`);
});
