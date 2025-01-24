import { makeFetchStudentsWithClasses } from "@/usecases/factories/enrollments/make-fetch-students-with-classes";
import { FastifyReply, FastifyRequest } from "fastify";

export async function fetchStudentsWithClasses(request: FastifyRequest, reply: FastifyReply) {
  const fetchStudentsByClass = makeFetchStudentsWithClasses()
  try {
    const { studentsWithClasses } = await fetchStudentsByClass.execute()
    return reply.status(200).send({ studentsWithClasses })
  } catch (err) {
    throw err
  }
}