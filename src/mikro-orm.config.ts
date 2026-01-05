import type { Options } from "@mikro-orm/postgresql";
import { TsMorphMetadataProvider } from "@mikro-orm/reflection";

const config: Options = {
  metadataProvider: TsMorphMetadataProvider,
  entities: ["./dist/databases/models/**/*.js"],
  entitiesTs: ["./src/databases/models/**/*.ts"],
  dbName: process.env.DB_NAME ?? "point_of_sales",
  password: process.env.DB_PASSWORD ?? "12345678",
  port: Number(process.env.DB_PORT) ?? 5432,
  debug: true,
};
