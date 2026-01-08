import { Entity, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { Role } from "./role.js";

@Entity()
export class User {
  @PrimaryKey()
  id!: number;

  @Property()
  fullName!: string;

  @Property()
  username!: string;

  @Property()
  password!: string;

  @ManyToOne({ entity: () => Role })
  role!: Role;
}
