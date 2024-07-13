// src/index.ts
import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import userRoutes from "./routes";

// Initialize Prisma Client
const prisma = new PrismaClient();

// Initialize Express app
const app = express();
app.use(express.json());
app.use(cors());

// Define routes
app.use("/users", userRoutes);
app.use("/posts", userRoutes); // Posts route is already included in userRoutes

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
