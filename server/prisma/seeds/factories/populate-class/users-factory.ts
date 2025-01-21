import { faker } from "@faker-js/faker"
import { User, AdminData, TeacherData, StudentData } from "@/models/User"
import { randomUUID } from "crypto"

export type CreateStudentsModel = {
  userData: User,
  studentData: StudentData
}

export type CreateTeachersModel = {
  userData: User,
  teacherData: TeacherData
}

type CreateAdminModel = {
  adminData: AdminData,
  userData: User
}

export function createStudents(count: number = 20) {
  let studentsData: CreateStudentsModel[] = []
  for (let i = 0; i < count; i++) {
    const userData = generateUserBaseData('STUDENT')

    const studentData: StudentData = {
      adress: faker.location.streetAddress(),
      dateOfBirth: faker.date.birthdate(),
      enrollmentCode: faker.string.numeric({ length: 8 })
    }
    studentsData.push({ userData, studentData })
  }
  return studentsData
}

export function createTeachers(count: number = 5) {
  const teachersData: CreateTeachersModel[] = []
  for (let i = 0; i < count; i++) {
    const userData = generateUserBaseData('TEACHER')

    const teacherData: TeacherData = {
      education: faker.person.jobArea(),
      specialization: faker.person.jobDescriptor()
    }
    teachersData.push({ userData, teacherData })
  }
  return teachersData
}

export function createAdmins(count: number = 3) {
  let adminsData: CreateAdminModel[] = []
  for (let i = 0; i < count; i++) {
    const userData = generateUserBaseData('ADMIN')
    const adminData: AdminData = {
      position: faker.person.jobType()
    }
    adminsData.push({ userData, adminData })
  }
  return adminsData
}

function generateUserBaseData(role: 'STUDENT' | 'TEACHER' | 'ADMIN') {
  const userCreatedAtDate = faker.date.past()
  const userData: User = {
    id: randomUUID(),
    email: faker.internet.email(),
    name: faker.person.fullName(),
    password_hash: faker.string.alphanumeric({ length: { max: 16, min: 6 } }),
    role,
    cpf: faker.number.int({ min: 10000000000, max: 99999999999 }).toString(),
    created_at: userCreatedAtDate,
    updated_at: faker.date.between({ from: userCreatedAtDate, to: new Date() }),
  }

  return userData
}
