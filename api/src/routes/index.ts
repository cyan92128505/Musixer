import { Request, Response, Router } from "express";

import authRouter from "./auth";
import userRouter from "./user";

export async function ApiRouter() {
  const apiRouter = Router();
  apiRouter.use("/auth", authRouter);

  apiRouter.use("/users", userRouter);

  apiRouter.get("/healthChecker", async (_, res: Response) => {
    res.status(200).json({
      status: "success",
      message: "Welcome to Node.js, we are happy to see you",
    });
  });

  return apiRouter;
}

export default ApiRouter;
