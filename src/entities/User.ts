import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

interface SenderDataProps {
  id: string;
  email: string;
}

@Entity("users")
class User {
  @BeforeInsert()
  updateDate() {
    this.createdAt = new Date();
  }

  @BeforeInsert()
  insertId() {
    this.id = uuid();
  }

  @PrimaryColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  createdAt: Date;
}

export { User };
