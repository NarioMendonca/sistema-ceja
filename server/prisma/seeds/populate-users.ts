import { prisma } from "@/lib/prisma"
import { User } from "@/models"
import { randomUUID } from "crypto"
import { faker } from '@faker-js/faker'

function createStudents() {
  let studentsData: any[] = []
  for (let i = 0; i <= 20; i++) {
    const userCreatedAtDate = faker.date.past()
    const userData: User = {
      id: randomUUID(),
      email: faker.internet.email(),
      name: faker.person.fullName(),
      password_hash: faker.string.alphanumeric({ length: { max: 16, min: 6 } }),
      role: 'STUDENT',
      cpf: faker.number.int({ min: 10000000000, max: 99999999999 }).toString(),
      created_at: userCreatedAtDate,
      updated_at: faker.date.between({ from: userCreatedAtDate, to: new Date() }),
    }

    const studentData = {
      adress: faker.location.streetAddress(),
      dateOfBirth: faker.date.birthdate(),
      enrollmentCode: faker.string.numeric({ length: 8 })
    }
    studentsData.push({ userData, studentData })
  }
  return studentsData
}

function createTeachers() {
  const teachersData: any[] = []
  for (let i = 0; i <= 5; i++) {
    const userCreatedAtDate = faker.date.past()
    const userData: User = {
      id: randomUUID(),
      email: faker.internet.email(),
      name: faker.person.fullName(),
      password_hash: faker.string.alphanumeric({ length: { max: 16, min: 6 } }),
      role: 'TEACHER',
      cpf: faker.number.int({ min: 10000000000, max: 99999999999 }).toString(),
      created_at: userCreatedAtDate,
      updated_at: faker.date.between({ from: userCreatedAtDate, to: new Date() }),
    }
    const teacherData = {
      education: faker.person.jobArea(),
      specialization: faker.person.jobDescriptor()
    }
    teachersData.push({ userData, teacherData })
  }
  return teachersData
}

function createAdmins() {
  let adminsData: any[] = []
  for (let i = 0; i <= 3; i++) {
    const userCreatedAtDate = faker.date.past()

    const userData: User = {
      id: randomUUID(),
      email: faker.internet.email(),
      name: faker.person.fullName(),
      password_hash: faker.string.alphanumeric({ length: { max: 16, min: 6 } }),
      role: 'ADMIN',
      cpf: faker.number.int({ min: 10000000000, max: 99999999999 }).toString(),
      created_at: userCreatedAtDate,
      updated_at: faker.date.between({ from: userCreatedAtDate, to: new Date() }),
    }
    const adminData = {
      position: faker.person.jobType()
    }
    adminsData.push({ userData, adminData })
  }
  return adminsData
}

const populateUsers = async () => {
  await prisma.$connect()
  const students = createStudents()
  const teachers = createTeachers()
  const admins = createAdmins()

  students.map(async (student: any) => {
    await prisma.user.create({
      data: {
        ...student.userData,
        Student: {
          create: student.studentData
        }
      },
    })
  })
  teachers.map(async (teacher: any) => {
    await prisma.user.create({
      data: {
        ...teacher.userData,
        Teacher: {
          create: teacher.teacherData
        }
      },
    })
  })
  admins.map(async (admin: any) => {
    await prisma.user.create({
      data: {
        ...admin.userData,
        Administrator: {
          create: admin.adminData
        }
      },
    })
  })
  await prisma.$disconnect()
}


populateUsers()