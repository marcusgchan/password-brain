import express from "express";
import { Request, Response } from "express";
const cors = require("cors");
const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Application works!");
});

app.listen(PORT, () => {
  console.log("Application started on port 3000!");
});
