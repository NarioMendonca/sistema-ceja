import { makeRegisterTeacherSubjectAssignment } from "@/usecases/factories/TeacherSubjectAssignment/make-register-subject-teacher";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function RegisterTeacherSubjectAssignment(request: FastifyRequest, reply: FastifyReply) {
  const RegisterTeacherSubjectAssignmentBodySchema = z.object({
    userId: z.string().uuid(),
    subjectId: z.string().uuid()
  })
  const { userId, subjectId } = RegisterTeacherSubjectAssignmentBodySchema.parse(request.body)
  const registerTeacherSubjectAssignment = makeRegisterTeacherSubjectAssignment()
  try {
    await registerTeacherSubjectAssignment.execute({ userId, subjectId })
    return reply.status(201).send()
  } catch (err) {
    throw err
  }
}