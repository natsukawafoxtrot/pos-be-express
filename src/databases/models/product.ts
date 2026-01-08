import { Entity, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { Category } from "./category.js";

@Entity()
export class Product {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @Property()
  description!: string;

  @ManyToOne({ entity: () => Category })
  category!: Category;
}
