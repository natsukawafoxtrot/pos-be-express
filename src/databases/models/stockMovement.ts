import { Enum, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { Product } from "./product.js";

export enum MovementType {
  SALE = "sale",
  RESTOCK = "restock",
  RETURN = "return",
  ADJUSTMENT = "adjustment",
  DAMAGE = "damage",
}

export class StockMovement {
  @PrimaryKey()
  id!: number;

  @ManyToOne(() => Product, { deleteRule: "cascade" })
  product!: Product;

  @Property({ columnType: "numeric(12,3)" })
  changeAmount!: string;

  @Enum(() => MovementType)
  movementType!: MovementType;

  @Property({ type: "uuid", nullable: true })
  referenceId?: string;

  @Property({ defaultRaw: "now()" })
  createdAt: Date = new Date();
}
