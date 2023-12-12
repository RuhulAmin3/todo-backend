import { Response } from "express";

type ResponseType<T> = {
  success: boolean;
  message: string;
  statusCode: number;
  data: T;
  meta?: {
    page: number;
    limit: number;
    total: number;
  };
};

export const genericResponse = <T>(res: Response, data: ResponseType<T>) => {
  res.status(data.statusCode).json({
    success: data.success,
    message: data.success,
    data: data.data,
    meta: data.message || null,
  });
};
