import { ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { Product } from "./product.js";

export class ProductPriceHistory {
  @PrimaryKey()
  id!: number;

  @ManyToOne(() => Product, { deleteRule: 'cascade' })
  product!: Product;

  @Property({ columnType: 'numeric(12,2)', nullable: true })
  oldPrice?: string;

  @Property({ columnType: 'numeric(12,2)', nullable: true })
  newPrice?: string;

  @Property({ columnType: 'numeric(12,2)', nullable: true })
  oldCostPrice?: string;

  @Property({ columnType: 'numeric(12,2)', nullable: true })
  newCostPrice?: string;

  @Property({ defaultRaw: 'now()' })
  changedAt: Date = new Date();
}