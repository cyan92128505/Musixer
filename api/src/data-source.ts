require("dotenv").config();
import "reflect-metadata";
import { DataSource } from "typeorm";
import config from "config";
import { User } from "./entity/User";
import { Migration1687376289528 } from "./migration/1687376289528-migration";
import { AddedUserEntity1687376325906 } from "./migration/1687376325906-added-user-entity";

export const AppDataSource = new DataSource({
  url: config.get<string>("postgresUrl"),
  type: "postgres",
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [Migration1687376289528, AddedUserEntity1687376325906],
  subscribers: [],
});
