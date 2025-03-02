import { Class } from '@/models'
import { ClassesRepository, SubjectsRepository } from '@/repositories'
import { ResourceNotFoundError } from '../../erros'

interface FetchClassesBySubjectUseCaseRequest {
  subjectId: string
}

interface FetchClassesBySubjectUseCaseResponse {
  classes: Class[]
}

export class FetchClassesBySubjectUseCase {
  constructor(
    private subjectsRepository: SubjectsRepository,
    private classesRepository: ClassesRepository
  ) { }

  async execute({ subjectId }: FetchClassesBySubjectUseCaseRequest): Promise<FetchClassesBySubjectUseCaseResponse> {
    const subjectExists = this.subjectsRepository.findById(subjectId)
    if (!subjectExists) {
      throw new ResourceNotFoundError()
    }
    const classes = await this.classesRepository.fetchClassesBySubject(subjectId)

    return {
      classes
    }
  }
}
