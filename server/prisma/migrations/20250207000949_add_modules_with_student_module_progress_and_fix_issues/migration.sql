/*
  Warnings:

  - You are about to drop the column `class_subject_id` on the `grades` table. All the data in the column will be lost.
  - You are about to drop the `SubjectTeacher` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `module_id` to the `grades` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `grades` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "SubjectTeacher" DROP CONSTRAINT "SubjectTeacher_subject_id_fkey";

-- DropForeignKey
ALTER TABLE "SubjectTeacher" DROP CONSTRAINT "SubjectTeacher_user_id_fkey";

-- DropForeignKey
ALTER TABLE "class_subjects" DROP CONSTRAINT "class_subjects_class_id_fkey";

-- DropForeignKey
ALTER TABLE "class_subjects" DROP CONSTRAINT "class_subjects_subject_id_fkey";

-- DropForeignKey
ALTER TABLE "enrollments" DROP CONSTRAINT "enrollments_class_id_fkey";

-- DropForeignKey
ALTER TABLE "grades" DROP CONSTRAINT "grades_class_subject_id_fkey";

-- AlterTable
ALTER TABLE "grades" DROP COLUMN "class_subject_id",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "module_id" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "SubjectTeacher";

-- CreateTable
CREATE TABLE "teacher_subject_assignments" (
    "id" TEXT NOT NULL,
    "subject_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "teacher_subject_assignments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "modules" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "subject_id" TEXT NOT NULL,

    CONSTRAINT "modules_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StudentModuleProgress" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "module_id" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Não finalizado',
    "grade" DOUBLE PRECISION,
    "completed_at" TIMESTAMP(3),

    CONSTRAINT "StudentModuleProgress_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "teacher_subject_assignments" ADD CONSTRAINT "teacher_subject_assignments_subject_id_fkey" FOREIGN KEY ("subject_id") REFERENCES "subjects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teacher_subject_assignments" ADD CONSTRAINT "teacher_subject_assignments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "class_subjects" ADD CONSTRAINT "class_subjects_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "classes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "class_subjects" ADD CONSTRAINT "class_subjects_subject_id_fkey" FOREIGN KEY ("subject_id") REFERENCES "subjects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "enrollments" ADD CONSTRAINT "enrollments_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "classes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "grades" ADD CONSTRAINT "grades_module_id_fkey" FOREIGN KEY ("module_id") REFERENCES "modules"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "modules" ADD CONSTRAINT "modules_subject_id_fkey" FOREIGN KEY ("subject_id") REFERENCES "subjects"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentModuleProgress" ADD CONSTRAINT "StudentModuleProgress_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentModuleProgress" ADD CONSTRAINT "StudentModuleProgress_module_id_fkey" FOREIGN KEY ("module_id") REFERENCES "modules"("id") ON DELETE CASCADE ON UPDATE CASCADE;
