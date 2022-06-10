import "reflect-metadata";
import { DataSource } from "typeorm";
import { Email } from "./entities/Email";
import { EmailUser } from "./entities/EmailUser";
import { User } from "./entities/User";

export const dataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  url: "postgresql://postgres:admin@localhost:5432/database?schema=public",
  password: "admin",
  database: "database",
  synchronize: true,
  logging: false,
  entities: [User, Email, EmailUser],
  migrations: ["./migration/*.{ts,js}"],
  subscribers: [],
});

dataSource.initialize();
