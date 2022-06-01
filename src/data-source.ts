import "reflect-metadata";
import { DataSource } from "typeorm";
import { Email } from "./entities/Email";
import { EmailUser } from "./entities/EmailUser";
import { User } from "./entities/User";

export const dataSource = new DataSource({
  type: "sqlite",
  database: "src/database/database.sqlite",
  synchronize: true,
  logging: false,
  entities: [User, Email, EmailUser],
  migrations: ["./src/migration/*.ts"],
  subscribers: [],
});

dataSource.initialize();
