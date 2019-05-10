const Promise = require('bluebird');
const db = require('../db');

async function run() {
  try {
    await db.query('BEGIN');
    await db.query("CREATE EXTENSION IF NOT EXISTS 'uuid-ossp'");
    await db.query('DROP TABLE IF EXISTS users');
    await db.query('DROP TABLE IF EXISTS posts');
    await db.query(`CREATE TABLE "public"."posts" (
      "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
      "title" text NOT NULL,
      "content" varchar NOT NULL,
      "user_id" uuid NOT NULL,
      "created_at" timestamptz NOT NULL DEFAULT now(),
      "updated_at" timestamptz NOT NULL DEFAULT now(),
      "deleted_at" timestamptz,
      CONSTRAINT "posts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE,
      PRIMARY KEY ("id")
    );`);
    await db.query(`CREATE TABLE "public"."users" (
      "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
      "first_name" text,
      "last_name" text,
      "password" varchar NOT NULL,
      "created_at" timestamptz NOT NULL DEFAULT now(),
      "updated_at" timestamptz NOT NULL DEFAULT now(),
      "email" text NOT NULL,
      PRIMARY KEY ("id")
    );`);
    await db.query('COMMIT');
  } catch (e) {
    await db.query('ROLLBACK');
    console.log(e.message);
  }
}

Promise.resolve()
  .then(run)
  .catch(err => console.log(`ERROR: ${err.stack || err}`))
  .finally(process.exit);
