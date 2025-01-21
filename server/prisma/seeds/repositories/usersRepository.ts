import { prisma } from "@/lib/prisma"
import { AdminData, StudentData, TeacherData, User } from "@/models"

export type CreateStudentsModel = {
  userData: User,
  studentData: StudentData
}

export type CreateTeachersModel = {
  userData: User,
  teacherData: TeacherData
}

export type CreateAdminModel = {
  adminData: AdminData,
  userData: User
}

export class UsersRepository {
  async createStudents(students: CreateStudentsModel[]) {
    students.map(async (student) => {
      await prisma.user.create({
        data: {
          ...student.userData,
          Student: {
            create: student.studentData
          }
        },
      })
    })
  }

  async createTeachers(teachers: CreateTeachersModel[]) {
    teachers.map(async (teacher) => {
      await prisma.user.create({
        data: {
          ...teacher.userData,
          Teacher: {
            create: teacher.teacherData
          }
        },
      })
    })
  }

  async createAdmins(admins: CreateAdminModel[]) {
    admins.map(async (admin) => {
      await prisma.user.create({
        data: {
          ...admin.userData,
          Administrator: {
            create: admin.adminData
          }
        },
      })
    })
  }

  async fetchTeachers() {
    const teachers = await prisma.teacher.findMany()

    return teachers
  }
}