import { EnrollmentsRepository, SubjectsRepository, UsersRepository } from "@/repositories"
import { AlreadyExistsError, ResourceNotFoundError } from "../../erros"

interface RegisterStudentInSubjectRequest {
  subjectId: string
  userId: string
}

export class RegisterStudentInSubject {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly subjectsRepository: SubjectsRepository,
    private readonly enrollmentsRepository: EnrollmentsRepository
  ) { }

  async execute({ subjectId, userId }: RegisterStudentInSubjectRequest): Promise<void> {
    const user = await this.usersRepository.findById(userId)
    if (!user) {
      throw new ResourceNotFoundError()
    }

    const subjectExists = await this.subjectsRepository.findById(subjectId)
    if (!subjectExists) {
      throw new ResourceNotFoundError()
    }

    const enrollmentAlreadyExists = await this.enrollmentsRepository.findEnrollment({ userId, subjectId })
    if (enrollmentAlreadyExists) {
      throw new AlreadyExistsError()
    }

    await this.enrollmentsRepository.registerStudentInSubject({ subjectId, userId })
  }
}