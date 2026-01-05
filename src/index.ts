import "dotenv/config";
import express from "express";
import { TsMorphMetadataProvider } from "@mikro-orm/reflection";
import { initORM } from "./databases/index.js";
import { RequestContext } from "@mikro-orm/core";

async function bootstrap() {
  const app = express();

  const orm = await initORM({
    metadataProvider: TsMorphMetadataProvider,
    entities: ["./dist/databases/models/**/*.js"],
    entitiesTs: ["./src/databases/models/**/*.ts"],
    dbName: process.env.DB_NAME ?? "point_of_sales",
    password: process.env.DB_PASSWORD ?? "12345678",
    port: Number(process.env.DB_PORT) ?? 5432,
    host: process.env.DB_HOST ?? "127.0.0.1",
    debug: true,
  });

  app.use(express.json());

  app.use((req, res, next) => {
    RequestContext.create(orm.em, next);
    req.db = orm;
  });

  app.use((req, res) => res.status(404).json({ message: "No route found" }));

  app.listen(Number(process.env.APP_PORT ?? 3001), () => {
    console.log("POS Express BE Started!");
  });
}

bootstrap();
