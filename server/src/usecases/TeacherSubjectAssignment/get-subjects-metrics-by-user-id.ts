import { TeacherSubjectAssignmentRepository } from "@/repositories"

type GetSubjectsMetricsByUserIdRequest = {
  userId: string
}

type GetSubjectsMetricsByUserIdResponse = {
  subjectsMetrics: number
}

export class GetSubjectsMetricsByUserId {
  constructor(private readonly teacherSubjectAssigmentRepository: TeacherSubjectAssignmentRepository) { }

  async handle({ userId }: GetSubjectsMetricsByUserIdRequest): Promise<GetSubjectsMetricsByUserIdResponse> {
    const subjectsMetrics = await this.teacherSubjectAssigmentRepository.GetSubjectsMetricsByUserId(userId)

    return {
      subjectsMetrics
    }
  }
}