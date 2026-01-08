import { Entity, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class Unit {
  @PrimaryKey()
  id!: number;

  @Property({ length: 20 })
  name!: string;

  @Property({ length: 10 })
  abbreviation!: string;

  @Property({ default: false, type: "boolean" })
  isDecimal: boolean = false;
}
