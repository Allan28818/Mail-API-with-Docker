import { MigrationInterface, QueryRunner, Table } from "typeorm";
// OK
export class CreateEmailUser1654104368294 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "email_user",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "creatorId",
            type: "uuid",
          },
          {
            name: "emailId",
            type: "uuid",
          },
          {
            name: "createdAt",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FKUser",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["creatorId"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            name: "FKEmail",
            referencedTableName: "emails",
            referencedColumnNames: ["id"],
            columnNames: ["emailId"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("email_user");
  }
}
