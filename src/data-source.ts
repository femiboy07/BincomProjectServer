import dotenv from "dotenv";
import "reflect-metadata"
import { DataSource } from "typeorm"

import { User } from "./entity/User"
import { Lga } from "./entity/Lga"
import { PollingUnit } from "./entity/PollingUnit"
import { Ward } from "./entity/Ward"
import { AnnouncedPuResult } from "./entity/AnnouncedPollingUnitResult"
import { AnnouncedLgaResult } from "./entity/AnnouncedLgaResults";


dotenv.config()
const {DB_HOST,DB_PASSWORD,DB_DATABASE,DB_PORT,NODE_ENV,DB_USERNAME}=process.env;

console.log(process.env.DB_PASSWORD!!,"password")
console.log(process.env.DB_USERNAME)

export const AppDataSource = new DataSource({
  type: "mysql",
  host: DB_HOST!, // using non-null assertion, but if undefined, this will crash
  port: parseInt(DB_PORT!),
  database: DB_DATABASE!,
  username: DB_USERNAME!, // Make sure to include username if needed
  // password: process.env.DB_PASSWORD!,
  synchronize: true,
  logging: process.env.NODE_ENV! === "dev" ? false : false,
  entities: [User, Lga, PollingUnit, Ward, AnnouncedPuResult,AnnouncedLgaResult],
  migrations: [__dirname + "./migrations/*.ts"],
  subscribers: [],
});