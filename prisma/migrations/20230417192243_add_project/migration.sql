-- CreateTable
CREATE TABLE "Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UseCase" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "projectId" INTEGER,
    CONSTRAINT "UseCase_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_UseCase" ("id", "title") SELECT "id", "title" FROM "UseCase";
DROP TABLE "UseCase";
ALTER TABLE "new_UseCase" RENAME TO "UseCase";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
