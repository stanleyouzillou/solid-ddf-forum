// src/userController.ts
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { randomBytes } from "crypto";

const prisma = new PrismaClient();

const ERRORS = {
  USERNAME_ALREADY_TAKEN: "UsernameAlreadyTaken",
  EMAIL_ALREADY_IN_USE: "EmailAlreadyInUse",
  VALIDATION_ERROR: "ValidationError",
  SERVER_ERROR: "ServerError",
  USER_NOT_FOUND: "UserNotFound",
};

const generateRandomPassword = (length: number): string => {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
  const passwordArray = Array.from(
    { length },
    () => charset[Math.floor(Math.random() * charset.length)]
  );
  return passwordArray.join("");
};

const parseUserForResponse = (user: any) => {
  const { password, ...rest } = user;
  return rest;
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;

    // Check if the user exists
    const existingUserByEmail = await prisma.user.findFirst({
      where: { email: req.body.email },
    });

    if (existingUserByEmail) {
      return res.status(409).json({
        error: ERRORS.EMAIL_ALREADY_IN_USE,
        data: undefined,
        success: false,
      });
    }

    const existingUserByUsername = await prisma.user.findFirst({
      where: { username: req.body.username },
    });

    if (existingUserByUsername) {
      return res.status(409).json({
        error: ERRORS.USERNAME_ALREADY_TAKEN,
        data: undefined,
        success: false,
      });
    }

    const user = await prisma.user.create({
      data: { ...userData, password: generateRandomPassword(10) },
    });

    return res.status(201).json({
      error: undefined,
      data: parseUserForResponse(user),
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: ERRORS.SERVER_ERROR,
      data: undefined,
      success: false,
    });
  }
};

export const editUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const userData = req.body;

    const user = await prisma.user.findUnique({
      where: { id: parseInt(userId, 10) },
    });

    if (!user) {
      return res.status(404).json({
        error: ERRORS.USER_NOT_FOUND,
        data: undefined,
        success: false,
      });
    }

    if (userData.email && userData.email !== user.email) {
      const existingUserByEmail = await prisma.user.findFirst({
        where: { email: userData.email },
      });

      if (existingUserByEmail) {
        return res.status(409).json({
          error: ERRORS.EMAIL_ALREADY_IN_USE,
          data: undefined,
          success: false,
        });
      }
    }

    if (userData.username && userData.username !== user.username) {
      const existingUserByUsername = await prisma.user.findFirst({
        where: { username: userData.username },
      });

      if (existingUserByUsername) {
        return res.status(409).json({
          error: ERRORS.USERNAME_ALREADY_TAKEN,
          data: undefined,
          success: false,
        });
      }
    }

    const updatedUser = await prisma.user.update({
      where: { id: parseInt(userId, 10) },
      data: userData,
    });

    return res.status(200).json({
      error: undefined,
      data: parseUserForResponse(updatedUser),
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: ERRORS.SERVER_ERROR,
      data: undefined,
      success: false,
    });
  }
};

export const getUserByEmail = async (req: Request, res: Response) => {
  try {
    const { email } = req.query as { email: string };

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(404).json({
        error: ERRORS.USER_NOT_FOUND,
        data: undefined,
        success: false,
      });
    }

    return res.status(200).json({
      error: undefined,
      data: parseUserForResponse(user),
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: ERRORS.SERVER_ERROR,
      data: undefined,
      success: false,
    });
  }
};
