import { MigrationInterface, QueryRunner, Table } from "typeorm";
// OK
export class CreateEmail1654104414445 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "emails",
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
            name: "senderData",
            type: "varchar",
          },
          {
            name: "receiverData",
            type: "varchar",
          },
          {
            name: "title",
            type: "varchar",
          },
          {
            name: "body",
            type: "varchar",
          },
          {
            name: "createdAt",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("emails");
  }
}
