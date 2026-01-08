import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class Category {
  @PrimaryKey()
  id!: number;

  @Property({ length: 100 })
  name!: string;

  @Property({ type: 'text', nullable: true })
  description?: string;
}
