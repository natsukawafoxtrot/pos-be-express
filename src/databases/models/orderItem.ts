import { ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { Order } from "./order.js";
import { Product } from "./product.js";

export class OrderItem {
  @PrimaryKey()
  id!: number;

  @ManyToOne(() => Order)
  order!: Order;

  @ManyToOne(() => Product)
  product!: Product;

  @Property({ columnType: 'numeric(12,3)' })
  quantity!: string;

  @Property({ columnType: 'numeric(12,2)' })
  unitPriceAtSale!: string;

  @Property({ columnType: 'numeric(12,2)' })
  totalPrice!: string;
}