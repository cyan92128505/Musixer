import express from "express";
import { Request, Response, NextFunction } from "express";
import cors from "cors";
import cookieParser = require("cookie-parser");
import config from "config";

import logger from "./utils/logger";
import ApiRouter from "./routes";
import AppError from "./utils/appError";
import { ApiDocs } from "./docs";

export async function App() {
  const app = express();
  app.use(express.json({ limit: "10kb" }));

  app.use(cookieParser());

  app.use(
    cors({
      origin: config.get<string>("origin"),
      credentials: true,
    })
  );

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  await ApiRouter(app);

  await ApiDocs(app);

  app.all("*", (req: Request, res: Response, next: NextFunction) => {
    next(new AppError(404, `Route ${req.originalUrl} not found`));
  });

  app.use(
    (error: AppError, req: Request, res: Response, next: NextFunction) => {
      error.status = error.status || "error";
      error.statusCode = error.statusCode || 500;

      res.status(error.statusCode).json({
        status: error.status,
        message: error.message,
      });
    }
  );

  const port = config.get<number>("port");
  app.listen(port, (): void => {
    logger.info(`running on port ${port}`);
  });
}

export default App;
