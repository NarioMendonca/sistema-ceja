import { SubjectsRepository, UsersRepository } from "@/repositories"
import { AlreadyExistsError, ResourceNotFoundError } from "../errors"
import { SubjectTeacherReposity } from "@/repositories/subjectTeacherRepository"

interface RegisterTeacherSubjectAssignmentRequest {
  subjectId: string
  userId: string
}

export class RegisterTeacherSubjectAssignment {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly subjectsRepository: SubjectsRepository,
    private readonly subjectTeacherRepository: SubjectTeacherReposity
  ) { }

  async execute({ subjectId, userId }: RegisterTeacherSubjectAssignmentRequest): Promise<void> {
    const user = await this.usersRepository.findById(userId)
    if (!user) {
      throw new ResourceNotFoundError()
    }

    const subjectExists = await this.subjectsRepository.findById(subjectId)
    if (!subjectExists) {
      throw new ResourceNotFoundError()
    }

    const registrationAlreadyExists = await this.subjectTeacherRepository.findSubjectTeacher({ userId, subjectId })
    if (registrationAlreadyExists) {
      throw new AlreadyExistsError()
    }

    await this.subjectTeacherRepository.registerTeacherAtSubject({ subjectId, userId })
  }
}