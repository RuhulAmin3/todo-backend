import { prisma } from "../../../utils/prisma";
import { User } from "@prisma/client";
import createError from "http-errors";

const signup = async (payload: User) => {
  const isUserExist = await prisma.user.findUnique({
    where: {
      email: payload.email,
    },
  });

  if (isUserExist) {
    throw new createError.Conflict(
      "user already exist! try with another email"
    );
  }

  const result = await prisma.user.create({
    data: payload,
  });

  return result;
};

const signin = async (payload: any) => {};

export const authService = { signup, signin };
