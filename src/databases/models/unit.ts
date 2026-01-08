import { Entity, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class Unit {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @Property()
  abbreviation!: string;

  @Property({ type: "boolean" })
  isDecimal!: boolean;
}
