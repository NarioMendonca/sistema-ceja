import { ClassesRepository, EnrollmentsRepository, UsersRepository } from "@/repositories"
import { AlreadyExistsError, ResourceNotFoundError } from "../errors"

interface RegisterStudentInClassRequest {
  classId: string
  userId: string
}

export class RegisterStudentInClass {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly classesRepository: ClassesRepository,
    private readonly enrollmentsRepository: EnrollmentsRepository
  ) { }

  async execute({ classId, userId }: RegisterStudentInClassRequest): Promise<void> {
    const user = await this.usersRepository.findById(userId)
    if (!user) {
      throw new ResourceNotFoundError()
    }

    const classExists = await this.classesRepository.findById(classId)
    if (!classExists) {
      throw new ResourceNotFoundError()
    }

    const enrollmentAlreadyExists = await this.enrollmentsRepository.findEnrollment({ userId, classId })
    if (enrollmentAlreadyExists) {
      throw new AlreadyExistsError()
    }

    await this.enrollmentsRepository.registerStudentInClass({ classId, userId })
  }
}