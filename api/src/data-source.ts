require("dotenv").config();
import "reflect-metadata";
import { DataSource } from "typeorm";
import config from "config";

export const AppDataSource = new DataSource({
  url: config.get<string>("postgresUrl"),
  type: "postgres",
  synchronize: false,
  logging: false,
  entities: ["src/entity/**/*{.ts,.js}"],
  migrations: ["src/migration/**/*{.ts,.js}"],
  subscribers: ["src/subscriber/**/*{.ts,.js}"],
});
