BEGIN;

DROP TABLE IF EXISTS "user", "category", "story";

CREATE TABLE IF NOT EXISTS "user" (
    "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "name" VARCHAR NOT NULL,
    "email" TEXT NOT NULL UNIQUE,
    "password" TEXT NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE  IF NOT EXISTS "category" (
    "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "name" VARCHAR NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ 
);


CREATE TABLE IF NOT EXISTS "story" (
    "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "title" VARCHAR NOT NULL DEFAULT '',
    "resume" TEXT,
    "content" TEXT,
    "category_id" INTEGER NOT NULL REFERENCES "category" ("id") ON DELETE CASCADE,
    "user_id" INTEGER NOT NULL REFERENCES "user" ("id") ON DELETE CASCADE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);



COMMIT;