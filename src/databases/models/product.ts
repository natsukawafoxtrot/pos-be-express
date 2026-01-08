import { Entity, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { Category } from "./category.js";
import { Unit } from "./unit.js";

@Entity()
export class Product {
  @PrimaryKey({ type: "uuid" })
  id!: number;

  @ManyToOne(() => Category)
  category!: Category;

  @ManyToOne(() => Unit)
  unit!: Unit;

  @Property({ unique: true, length: 50 })
  sku!: string;

  @Property()
  name!: string;

  @Property({ length: 100, nullable: true })
  barcode?: string;

  @Property({ columnType: "numeric(12,2)", default: "0.00" })
  currentPrice: string = "0.00";

  @Property({ columnType: "numeric(12,2)", default: "0.00" })
  currentCostPrice: string = "0.00";

  @Property({ default: true })
  isActive: boolean = true;

  @Property({ defaultRaw: "now()" })
  createdAt: Date = new Date();
}
