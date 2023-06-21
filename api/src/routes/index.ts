import  { Request, Response, Router, Express } from "express";

import authRouter from "./auth";
import userRouter from "./user";

export async function ApiRouter(app: Express) {
  const apiRouter = Router();

  app.use("/api/auth", authRouter);

  app.use("/api/users", userRouter);

  app.get("/api/healthChecker", async (_, res: Response) => {
    res.status(200).json({
      status: "success",
      message: "Welcome to Node.js, we are happy to see you",
    });
  });

  return apiRouter;
}

export default ApiRouter;
