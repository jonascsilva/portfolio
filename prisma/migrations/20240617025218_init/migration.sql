-- CreateTable
CREATE TABLE "TestTable" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "intColumn" INTEGER NOT NULL,

    CONSTRAINT "TestTable_pkey" PRIMARY KEY ("id")
);
