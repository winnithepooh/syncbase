import { TsMorphMetadataProvider } from "@mikro-orm/reflection";
import { IS_PROD } from "./constants";
import type { MikroORM } from "@mikro-orm/core";

export default {
  dbName: "syncbase",
  password: "postgres",
  type: "postgresql",
  entitiesTs: ["./src/entities/**/*.ts"],
  entities: ["./dist/entities/**/*.js"],
  metadataProvider: TsMorphMetadataProvider,
  debug: !IS_PROD,
} as Parameters<typeof MikroORM.init>[0];