import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Email } from "./Email";
import { User } from "./User";

@Entity("email_user")
class EmailUser {
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
  creatorId: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "creatorId" })
  user: User;

  @Column()
  emailId: string;

  @ManyToOne(() => Email)
  @JoinColumn({ name: "emailId" })
  email: Email;

  @CreateDateColumn()
  createdAt: Date;
}

export { EmailUser };
