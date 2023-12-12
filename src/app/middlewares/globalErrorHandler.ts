import { ErrorRequestHandler } from "express";

export const globalErrorHandler: ErrorRequestHandler = async (
  err,
  req,
  res,
  next
) => {
  res.status(404).json(err);
};
