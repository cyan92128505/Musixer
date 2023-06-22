import express from "express";
import { Request, Response, NextFunction } from "express";
import cors from "cors";
import cookieParser = require("cookie-parser");
import config from "config";

import logger from "./utils/logger";
import ApiRouter from "./routes";
import AppError from "./utils/appError";
import { ApiDocs } from "./docs";
import requestMethods from "./middleware/requestMethods";
import customCors from "./middleware/cors";

export async function App() {
  const app = express();
  app.use(requestMethods);
  app.use(cookieParser());
  app.use(customCors);
  app.use(express.json({ limit: "10kb" }));
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
