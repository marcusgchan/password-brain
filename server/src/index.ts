import express from "express";
import { Request, Response } from "express";
import cors from "cors";
import { usersRouter } from "./routers/usersRouter";

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/", usersRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Application works!");
});

app.listen(PORT, () => {
  console.log(`Application started on port ${PORT}`);
});
