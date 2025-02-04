/*
  Warnings:

  - You are about to drop the column `teacher_id` on the `SubjectTeacher` table. All the data in the column will be lost.
  - You are about to drop the column `student_id` on the `grades` table. All the data in the column will be lost.
  - Added the required column `user_id` to the `SubjectTeacher` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `grades` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "SubjectTeacher" DROP CONSTRAINT "SubjectTeacher_teacher_id_fkey";

-- DropForeignKey
ALTER TABLE "grades" DROP CONSTRAINT "grades_student_id_fkey";

-- AlterTable
ALTER TABLE "SubjectTeacher" DROP COLUMN "teacher_id",
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "grades" DROP COLUMN "student_id",
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "SubjectTeacher" ADD CONSTRAINT "SubjectTeacher_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "grades" ADD CONSTRAINT "grades_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
