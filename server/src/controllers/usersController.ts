import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

// should be object of controllers
export async function usersController(req: Request, res: Response) {
  console.log("test");
  const newUser = await prisma.user.create({
    data: {
      name: "Alice",
      password: "secret",
    },
  });
  console.log("Created new user: ", newUser);

  const allUsers = await prisma.user.findMany({});
  console.log("All users: ");
  console.dir(allUsers, { depth: null });

  res.send("test");
}
