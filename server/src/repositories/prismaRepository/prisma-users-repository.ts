import { Administrator, Student, Teacher, User } from "@/models";
import { CreateAdminInput, CreateBaseUserInput, CreateStudentInput, CreateTeacherInput, UsersRepository } from "../usersRepository";
import { prisma } from "@/lib/prisma";

export class PrismaUsersRepository implements UsersRepository {
  async createBaseUser(data: CreateBaseUserInput): Promise<User> {
    const user = await prisma.user.create({
      data: {
        email: data.email,
        name: data.name,
        password_hash: data.password_hash,
        role: data.role
      }
    })

    return {
      ...user,
      cpf: user.cpf ?? undefined
    }
  }

  async createStudent(data: CreateStudentInput): Promise<Student> {
    const student = await prisma.user.create({
      data: {
        email: data.email,
        name: data.name,
        password_hash: data.password_hash,
        role: 'STUDENT',
        Student: {
          create: {
            adress: data.adress,
            enrollmentCode: data.enrollmentCode,
            dateOfBirth: data.dateOfBirth,
          }
        }
      },
      include: {
        Student: true
      }
    })

    const studentDataToReturn = { ...student.Student[0], id: undefined, user_id: undefined }
    const userDataToReturn = { ...student, Student: undefined }

    return {
      ...studentDataToReturn,
      ...userDataToReturn,
      cpf: student.cpf ?? undefined,
      dateOfBirth: studentDataToReturn.dateOfBirth ?? undefined,
      adress: studentDataToReturn.adress ?? undefined
    }
  }

  async CreateTeacher(data: CreateTeacherInput): Promise<Teacher> {
    const teacher = await prisma.user.create({
      data: {
        email: data.email,
        name: data.name,
        password_hash: data.password_hash,
        role: 'TEACHER',
        Teacher: {
          create: {
            education: data.education,
            specialization: data.specialization
          }
        }
      },
      include: {
        Teacher: true
      }
    })

    const teacherDataToReturn = { ...teacher.Teacher[0], id: undefined, user_id: undefined }
    const userDataToReturn = { ...teacher, Teacher: undefined }

    return {
      ...teacherDataToReturn,
      ...userDataToReturn,
      cpf: teacher.cpf ?? undefined,
      specialization: teacherDataToReturn.specialization ?? undefined,
      education: teacherDataToReturn.education ?? undefined,
    }
  }

  async CreateAdmin(data: CreateAdminInput): Promise<Administrator> {
    const admin = await prisma.user.create({
      data: {
        email: data.email,
        name: data.name,
        password_hash: data.password_hash,
        role: 'ADMIN',
        Administrator: {
          create: {
            position: data.position
          }
        }
      },
      include: {
        Administrator: true
      }
    });

    const adminDataToReturn = { ...admin.Administrator[0], id: undefined, user_id: undefined };
    const userDataToReturn = { ...admin, Administrator: undefined };

    return {
      ...adminDataToReturn,
      ...userDataToReturn,
      cpf: admin.cpf ?? undefined,
      position: adminDataToReturn.position ?? undefined
    }
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { email }
    });

    return user ? {
      ...user,
      cpf: user.cpf ?? undefined
    } : null;
  }

  async findById(id: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { id }
    });

    return user ? {
      ...user,
      cpf: user.cpf ?? undefined
    } : null;
  }

  async fetchUsers(): Promise<User[]> {
    const users = await prisma.user.findMany();
    const usersWithNotNullField = users.map(user => ({ ...user, cpf: user.cpf ?? undefined }))
    return usersWithNotNullField
  }

  async delete(userId: string): Promise<void> {
    await prisma.user.delete({
      where: { id: userId }
    });
  }
}