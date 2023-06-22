
import { NextFunction, Request, Response } from "express";
export const requestMethods = (req: Request, res: Response, next: NextFunction) => {
  const allowedMethods = [
    "OPTIONS",
    "HEAD",
    "CONNECT",
    "GET",
    "POST",
    "PUT",
    "DELETE",
    "PATCH",
  ];

  if (!allowedMethods.includes(req.method)) {
    res.status(405).send(`${req.method} not allowed.`);
  }

  next();
};

export default requestMethods;