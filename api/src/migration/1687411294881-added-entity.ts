import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedEntity1687411294881 implements MigrationInterface {
    name = 'AddedEntity1687411294881'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "album" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "album_id" integer NOT NULL, "album_name" character varying NOT NULL, "artist_id" integer NOT NULL, "artist_name" character varying NOT NULL, "userId" uuid, CONSTRAINT "PK_58e0b4b8a31bb897e6959fe3206" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_3bbc59221ca074591cb9cf036e" ON "album" ("id", "album_id") `);
        await queryRunner.query(`ALTER TABLE "album" ADD CONSTRAINT "FK_815bbf84cb5e82a56c85294d0fe" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "album" DROP CONSTRAINT "FK_815bbf84cb5e82a56c85294d0fe"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_3bbc59221ca074591cb9cf036e"`);
        await queryRunner.query(`DROP TABLE "album"`);
    }

}
