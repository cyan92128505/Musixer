import bcrypt from "bcrypt";
import { Entity, Index, Column, BeforeInsert } from "typeorm";
import Model from './Model'

@Entity()
export class User extends Model {
  @Column()
  name!: string;

  @Index("email_index")
  @Column({
    unique: true,
  })
  email!: string;

  @Column()
  password!: string;

  toJSON() {
    return { ...this, password: undefined };
  }

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 12);
  }

  static async comparePasswords(
    candidatePassword: string,
    hashedPassword: string
  ) {
    return await bcrypt.compare(candidatePassword, hashedPassword);
  }
}
