// src/index.ts
import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";
import { userRoutes } from "./routes";

const app = express();
app.use(express.json());
app.use(cors());

const prisma = new PrismaClient();

app.use("/users", userRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
