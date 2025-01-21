import { Teacher, TeacherData } from "@/models";
import { createClasses, createTeacherClass } from "../factories/populate-class/class-factory";
import { createAdmins, createStudents, createTeachers } from "../factories/populate-class/users-factory";
import { UsersRepository, ClassesRepository } from "../repositories";

export class PopulationService {
  constructor(
    private usersRepository: UsersRepository,
    private classesRepository: ClassesRepository
  ) { }

  async createUsers() {
    const students = createStudents()
    const teachers = createTeachers()
    const admins = createAdmins()

    await this.usersRepository.createStudents(students)
    await this.usersRepository.createTeachers(teachers)
    await this.usersRepository.createAdmins(admins)
  }

  async createClassesWithTeachers() {
    const classes = createClasses(10)
    await this.classesRepository.createClasses(classes)

    const teachers: any[] = await this.usersRepository.fetchTeachers()

    const teacherClasses = createTeacherClass(classes, teachers, 1, 2)
    await this.classesRepository.createClassTeacher(teacherClasses)
  }
}