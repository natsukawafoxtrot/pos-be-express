import { Cascade, Collection, OneToMany, PrimaryKey, Property } from "@mikro-orm/core";
import { OrderItem } from "./orderItem.js";

export class Order {
  @PrimaryKey()
  id!: number;

  @Property({ autoincrement: true, unique: true })
  orderNumber!: number;

  @Property({ columnType: 'numeric(12,2)' })
  totalAmount!: string;

  @Property({ columnType: 'numeric(12,2)', default: '0.00' })
  taxAmount: string = '0.00';

  @Property({ length: 50, nullable: true })
  paymentMethod?: string;

  @Property({ defaultRaw: 'now()' })
  createdAt: Date = new Date();

  @OneToMany(() => OrderItem, item => item.order, { cascade: [Cascade.ALL] })
  items = new Collection<OrderItem>(this);
}