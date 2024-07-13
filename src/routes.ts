import { Router } from "express";
import {
  createUser,
  editUser,
  getUserByEmail,
  getAllPosts,
} from "./userController";

const router = Router();

router.post("/new", createUser);
router.post("/edit/:userId", editUser);
router.get("/", getUserByEmail);
router.get("/posts", getAllPosts);

export default router;
