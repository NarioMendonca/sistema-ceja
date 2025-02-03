/*
  Warnings:

  - You are about to drop the `class_teachers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "class_teachers" DROP CONSTRAINT "class_teachers_class_id_fkey";

-- DropForeignKey
ALTER TABLE "class_teachers" DROP CONSTRAINT "class_teachers_teacher_id_fkey";

-- DropTable
DROP TABLE "class_teachers";

-- CreateTable
CREATE TABLE "SubjectTeacher" (
    "id" TEXT NOT NULL,
    "subject_id" TEXT NOT NULL,
    "teacher_id" TEXT NOT NULL,

    CONSTRAINT "SubjectTeacher_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SubjectTeacher" ADD CONSTRAINT "SubjectTeacher_subject_id_fkey" FOREIGN KEY ("subject_id") REFERENCES "subjects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubjectTeacher" ADD CONSTRAINT "SubjectTeacher_teacher_id_fkey" FOREIGN KEY ("teacher_id") REFERENCES "teachers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
