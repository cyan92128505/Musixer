require("dotenv").config();
import App from "./app";
import { AppDataSource } from "./data-source";
import logger from "./utils/logger";

async function main() {
  try {
    await AppDataSource.initialize();
    await App();
  } catch (error) {
    logger.error(error);
  }
}

main();
