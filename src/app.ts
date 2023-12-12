import express from "express";
import cors from "cors";
import Routes from "./app/routes/index";

import { globalErrorHandler } from "./app/middlewares/globalErrorHandler";

import statusCode from "http-status";
export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/v1", Routes);

app.use(globalErrorHandler);

app.use((req, res, next) => {
  res.status(statusCode.NOT_FOUND).json({
    success: false,
    message: `${req.originalUrl} api not found`,
    errorMessages: [{ path: `${req.originalUrl}`, message: "api not found" }],
  });
});
