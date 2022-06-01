import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("emails")
class Email {
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

  @Column({ type: "simple-json" })
  senderData: {
    id: string;
    email: string;
  };

  @Column("simple-json")
  receiverData: {
    id: string;
    email: string;
  };

  @Column()
  title: string;

  @Column()
  body: string;

  @CreateDateColumn()
  createdAt: Date;
}

export { Email };
