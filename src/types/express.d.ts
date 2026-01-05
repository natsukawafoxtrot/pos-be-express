import type { MikroORM } from '@mikro-orm/core';
import type { Services } from "../databases/index.ts";

declare global {
  namespace Express {
    interface Request {
      db: Services;
    }
  }
}
