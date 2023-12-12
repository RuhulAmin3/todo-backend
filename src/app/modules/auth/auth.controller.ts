import { NextFunction, Request, Response } from "express";
import { genericResponse } from "../../../utils/genericResponse";
import httpStatus from "http-status";
import { authService } from "./auth.services";
import { asyncTryCatch } from "../../../utils/asyncTryCatch";

const signup = async (req: Request, res: Response, next: NextFunction) => {
  const userData = req.body;
  try {
    const result = await authService.signup(userData);
    genericResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "user signup successful",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const signupUser = asyncTryCatch(async (req, res, next) => {
  const userData = req.body;
  const result = await authService.signup(userData);
  genericResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "user signup successful",
    data: result,
  });
});

const login = async (req: Request, res: Response, next: NextFunction) => {
  const loginData = req.body;
  try {
    const result = await authService.signin(loginData);
    genericResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "user login successful",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const loginUser = asyncTryCatch(async (req, res, next) => {
  const loginData = req.body;
  const result = await authService.signin(loginData);
  genericResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "user login successful",
    data: result,
  });
});

export const authController = { signup, login };
