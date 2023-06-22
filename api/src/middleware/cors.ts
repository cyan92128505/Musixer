import config from "config";
import cors, { CorsOptions } from "cors";
import { NextFunction, Request, Response } from "express";
import logger from "../utils/logger";


const urlsAllowedToAccess =
  Object.entries(config.get<string>("origin") || {}).map(
    ([key, value]) => value
  ) || [];

export const configuration: CorsOptions = {
  credentials: true,
  origin: function (origin, callback) {
    if (!origin || urlsAllowedToAccess.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`${origin} not permitted by CORS policy.`));
    }
  }
};
logger.info(configuration);
export const customCors = (req: Request, res: Response, next: NextFunction) => {
  return cors(configuration)(req, res, next);
};

export default customCors;
