import { OneToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { Product } from "./product.js";

export class Inventory {
  @PrimaryKey()
  id!: number;

  @OneToOne(() => Product, { primary: true, deleteRule: 'cascade' })
  product!: Product;

  @Property({ columnType: 'numeric(12,3)', default: '0.000' })
  stockQuantity: string = '0.000';

  @Property({ columnType: 'numeric(12,3)', default: '5.000' })
  lowStockThreshold: string = '5.000';

  @Property({ defaultRaw: 'now()', onUpdate: () => new Date() })
  updatedAt: Date = new Date();
}