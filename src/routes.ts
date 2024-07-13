// src/routes.ts
import { Router } from "express";
import { createUser, editUser, getUserByEmail } from "./userController";

export const userRoutes = Router();

userRoutes.post("/new", createUser);
userRoutes.post("/edit/:userId", editUser);
userRoutes.get("/", getUserByEmail);
